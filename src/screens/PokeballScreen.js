import React, { useEffect, useState } from 'react'
import { FlatList, Platform, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/core'
import { CommonActions } from '@react-navigation/native';
import _ from 'lodash';

import ScreenName from '../navigation/ScreenName';
import { PokemonItem } from '../components';
import { randomWithRange } from '../utility/RandomUtil';
import { MINIMUM_POKEBALL_TYPE, MAXIMUM_POKEBALL_TYPE } from '../constants';


const PokeballScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [btnResultVisibility, setBtnResultVisibility] = useState(false);

    const { numOfItems } = route.params;

    useEffect(() => {
        const numbers = [];
        for (let i = 0; i < numOfItems; i++) {
            const randomNumber = randomWithRange(MINIMUM_POKEBALL_TYPE, MAXIMUM_POKEBALL_TYPE)
            numbers.push({
                id: i,
                value: randomNumber,
                open: false
            });
        }
        setRandomNumbers(numbers);
    }, []);

    useEffect(() => {
        const isAllClicked = randomNumbers.every(x => x.open);
        setTimeout(() => {
            setBtnResultVisibility(isAllClicked);
        }, 500)
    }, [randomNumbers])

    const onPokemonItemClicked = (index, pokemonId) => {
        const newRandomNumbersState = _.cloneDeep(randomNumbers);
        newRandomNumbersState[index] = {
            ...newRandomNumbersState[index],
            pokemonId,
            open: true
        }
        setRandomNumbers(newRandomNumbersState)
    }

    const goToPokedexScreen = () => {
        const mappedPokemonIds = randomNumbers.map(item => item.pokemonId);
        navigation.dispatch(CommonActions.reset({
            index: 1,
            routes: [
                {
                    name: ScreenName.HomeScreen,
                },
                {
                    name: ScreenName.PokedexScreen,
                    params: {
                        listPokemonIds: mappedPokemonIds
                    }
                }
            ]
        }))
    }

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={randomNumbers}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <PokemonItem
                                key={item.id}
                                pokemonType={item.value}
                                id={item.id}
                                onPokemonItemClicked={onPokemonItemClicked}
                            />
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
            {
                btnResultVisibility &&
                <TouchableOpacity activeOpacity={.5} style={styles.btnResultContainer} onPress={goToPokedexScreen}>
                    <Text style={styles.textResult}>View Pokedex</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default PokeballScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        paddingBottom: 40,
        paddingTop: Platform.OS === 'ios' ? '20' : 0
    },
    btnResultContainer: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#113CFC',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    textResult: {
        color: '#fff'
    }
})