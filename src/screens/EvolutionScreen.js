import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { POKE_API_BASE_URL, POKEMON_IMAGE_WITH_ID } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import PokeImage from '../components/PokeImage';
import axios from 'axios'

const EvolutionScreen = () => {
    const route = useRoute();

    const { idPoke } = route.params;
    const [listData, setListData] = useState([])

    const parseEvolutionChain = (chain) => {
        if(chain?.species){
            const species = chain.species
            const urlComponents = species.url.split('/')
            const id = urlComponents[urlComponents.length - 2]

            let data = {
                name: species.name,
                id: id
            }
            return [data].concat(parseEvolutionChain(chain.evolves_to[0]))
        }
        return []
    }

    const getEvolutionChain = async () => {
        const speciesUrl =`${POKE_API_BASE_URL}/pokemon-species/${idPoke}/`
        try {
            const species = (await axios.get(speciesUrl)).data
            const evolutionChainUrl = species.evolution_chain.url
            const evolutionChain = (await axios.get(evolutionChainUrl)).data
            let chainData = parseEvolutionChain(evolutionChain.chain)
            setListData(chainData)
        } catch (error) {
            console.error(error);
        } finally {

        }
    }
    
    useEffect(() => {
        getEvolutionChain();
    }, []);

    const renderItem = ({ item }) => {
        <View>
            <PokeImage imageUri={POKEMON_IMAGE_WITH_ID(item.id)} />
            <Text>{item.name}</Text>
        </View>
    } 
   
    return (
        <SafeAreaView>
            <FlatList 
                data={listData}
                keyExtractor={({ id }, index) => id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default EvolutionScreen;