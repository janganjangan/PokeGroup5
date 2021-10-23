import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/core'
import ScreenName from '../navigation/ScreenName';
import { POKE_API_BASE_URL } from '../constants'

const Pokedex=(props)=>{
  
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getPoke = async () => {

    const baseURL=`${POKE_API_BASE_URL}/pokemon/${props.ids}`;

     try {
      const response = await fetch(baseURL);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      
    }
  }

  useEffect(() => {
    getPoke();
  }, []);

  

  const goToEvolutionPage = () => {
    navigation.navigate(ScreenName.EvolutionScreen, {
        idPoke: props.ids
    })
}


  return (
        <View style={{padding:10}}>

          <Text style={css.caption}>{data.name}</Text>
          <Text style={css.property}>Weight: {data.weight}</Text>
          <Text style={css.property}>Base Exp: {data.base_experience}</Text>
          <FlatList
            data={data.types}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={css.property}>{item.type.name}</Text>
            )}
          />
          <TouchableOpacity style={css.property} onPress={goToEvolutionPage}>
            <Text style={css.evo}>Evolution</Text>
          </TouchableOpacity>

        </View>
  );
}

const css=StyleSheet.create({
  caption:{
    fontWeight:'bold',
    padding:5,
    fontSize:25
  },

  property:{
    fontSize:15,
    padding:5
  },

  evo:{
    color: 'blue',
    fontWeight:'bold',
    fontSize:20
  }
})


export default Pokedex;