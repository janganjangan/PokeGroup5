import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SectionList } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { POKE_API_BASE_URL, POKEMON_IMAGE_WITH_ID } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import PokeImage from '../components/PokeImage';

const EvolutionDetailScreen = () => {

    const route = useRoute();
    const [data, setData] = useState([])

    const { pokemonId } = route.params;

    const getEvolutionDetail = async () => {
        const pokemonURL =`${POKE_API_BASE_URL}/pokemon/${pokemonId}/`
        try {
            const response = await fetch(pokemonURL);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }

    useEffect(() => {
        getEvolutionDetail();
    }, []);

    return (
        <View style={styles.containerView}>
            <PokeImage style={styles.screen} imageUri={POKEMON_IMAGE_WITH_ID(pokemonId)} />
            <SafeAreaView keyExtractor={({ id }, index) => id}>
            
            <Text style={styles.header}>{data.name}</Text>
            <Text style={styles.property}>Weight: {data.weight}</Text>
            <Text style={styles.property}>Height: {data.height}</Text>
            <Text style={styles.property}>Type: </Text>
            <FlatList
                data={data.types}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                <Text style={styles.property}>* {item.type.name}</Text>
                )}
            />
            <Text style={styles.property}>Abilities: </Text>
            <FlatList
                data={data.abilities}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                <Text style={styles.property}>* {item.ability.name}</Text>
                )}
            />
            </SafeAreaView>
        </View>
    )
}

export default EvolutionDetailScreen;

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 10,
        margin: 8,
        padding: 8,
        backgroundColor: 'white',
        borderColor: 'lightgray',
      },
      header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#a3842e',
      },
      smallHeader: {
        fontSize: 20
      },
      property:{
        fontSize:15,
        padding:5
      },
})
