import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Platform } from 'react-native'
import { PokemonItem } from '../components';
import { randomWithRange } from '../utility/RandomUtil';
import { MINIMUM_POKEBALL_TYPE, MAXIMUM_POKEBALL_TYPE } from '../constants';

const HomeScreen = ({ numOfItems }) => {

    const [randomNumbers, setRandomNumbers] = useState([]);

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
            <FlatList
                data={randomNumbers}
                numColumns={2}
                renderItem={({ item }) => {
                    return <PokemonItem pokemonType={item.value} key={item.id} />
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingTop: Platform.OS === 'ios' ? '20' : 0
    }
})