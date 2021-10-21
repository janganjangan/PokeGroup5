import React, { useEffect, useState } from 'react'
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
                value: randomNumber
            });
        }
        setRandomNumbers(numbers);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={randomNumbers}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return <PokemonItem pokemonType={item.value} key={item.id} />
                    }}
                    keyExtractor={(item) => item.id}
                />
                <Button style={styles.btnResult} title={'View Pokedex'} />
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