import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import { Button, FlatList, Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import { PokemonItem } from '../components';
import { randomWithRange } from '../utility/RandomUtil';
import { MINIMUM_POKEBALL_TYPE, MAXIMUM_POKEBALL_TYPE } from '../constants';
import { useRoute } from '@react-navigation/core';

const PokeballScreen = () => {

    const route = useRoute();
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
        setBtnResultVisibility(isAllClicked);
    }, [randomNumbers])

    const onPokemonItemClicked = (index) => {
        const newRandomNumbersState = _.cloneDeep(randomNumbers);
        newRandomNumbersState[index] = {
            ...newRandomNumbersState[index],
            open: true
        }
        setRandomNumbers(newRandomNumbersState)
    }

    return (
        <SafeAreaView style={styles.container}>
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
                {
                    btnResultVisibility && <Button style={styles.btnResult} title={'View Pokedex'} />
                }
            </View>
        </SafeAreaView>
    )
}

export default PokeballScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingTop: Platform.OS === 'ios' ? '20' : 0
    },
    btnResult: {
        position: 'absolute'
    }
})