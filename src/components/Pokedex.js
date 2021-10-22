import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

const Pokedex=(props)=>{
  
  const [data, setData] = useState([]);

  const getPoke = async () => {

    const baseURL=`https://pokeapi.co/api/v2/pokemon/${props.ids}`;

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
  }
})


export default Pokedex;