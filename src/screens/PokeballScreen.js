import React, { useEffect, useState } from 'react'
import { FlatList, Platform, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/core'
import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

import ScreenName from '../navigation/ScreenName';
import { PokemonItem } from '../components';
import { POKEMON_IMAGE_WITH_ID } from '../constants';
import { randomWithRange } from '../utility/RandomUtil';
import { MINIMUM_POKEBALL_TYPE, MAXIMUM_POKEBALL_TYPE } from '../constants';
import { putPokemonIds } from '../store/PokemonReducer';


const PokeballScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
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
        }, 200)
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
        const mappedPokemonIds = randomNumbers.map(item => {
            return {
                id: item.pokemonId,
                imageUri: POKEMON_IMAGE_WITH_ID(item.pokemonId)
            }
        });
        dispatch(putPokemonIds(mappedPokemonIds));
        navigation.dispatch(CommonActions.reset({
            index: 1,
            routes: [
                {
                    name: ScreenName.HomeScreen,
                },
                {
                    name: ScreenName.PokedexScreen,
                    params: {
                        listPokemonIds: mappedPokemonIds,
                        type: 'new'
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
                    <Text style={styles.textResult}>Save &amp; View Pokedex</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        paddingBottom: 40,
    },
    btnResultContainer: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
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

export default PokeballScreen

