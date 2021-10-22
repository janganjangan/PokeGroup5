import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { POKE_API_BASE_URL, POKEMON_IMAGE_WITH_ID } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import PokeImage from '../components/PokeImage';
import axios from 'axios'
import ScreenName from '../navigation/ScreenName';

const EvolutionScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const { idPoke } = route.params;
    const [listData, setListData] = useState([])

    const parseEvolutionChain = (chain) => {
        if(chain?.species){
            const species = chain.species
            const urlComponents = species.url.split('/')
            const id = urlComponents[urlComponents.length - 2]

            const gotoDetail = () => {
                navigation.navigate(ScreenName.EvolutionDetailScreen, {
                    pokemonId: id
            })}

            let data = {
                name: species.name,
                id: id,
                gotoDetail: gotoDetail
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
        return <View style={styles.containerView}>
            <PokeImage imageUri={POKEMON_IMAGE_WITH_ID(item.id)} />
            <View>
                <Text style={styles.text}>{item.name}</Text>
                <Button title={"Evolution Detail"} onPress={item.gotoDetail}/>
            </View>
        </View>
    }

    const renderItemSeparator = () => {
        return <View style={styles.separator}>
            <Text style={styles.separatorText}>V</Text>
        </View>
    }
   
    return (
        <SafeAreaView>
            <FlatList 
                data={listData}
                keyExtractor={({ id }, index) => id}
                renderItem={renderItem}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </SafeAreaView>
    )
}

export default EvolutionScreen;

const styles = StyleSheet.create({
    containerView: {
        margin: 8,
        padding: 8,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#a3842e'
    },
    separator: {
        margin: 8,
        padding: 8,
        flex: 1,
        alignItems: 'center'
    },
    separatorText: {
        fontSize: 12,
        fontWeight: 'bold',
    }
})