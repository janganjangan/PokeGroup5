import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import PokeImage from './src/components/PokeImage';
import PokeProperties from './src/components/PokeProperties';

const data = [
  {
     "id": "1",
     "imgUri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
  },
  {
    "id": "3",
    "imgUri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png"
  },       
  {
    "id": "5",
    "imgUri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png"
  },   
  {
    "id": "7",
    "imgUri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png"
  },
  {
    "id": "10",
    "imgUri": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png"
  }
];

const Item = ({ imgUri,idx }) => {
  return (
    <View style={css.list}>
        <PokeImage imageUri= {imgUri}/>
        <PokeProperties index={idx} />
    </View>
  );
}

const App=()=>{

  const renderItem = ({ item }) => (
    <Item imgUri={item.imgUri} idx={item.id}/>
  );
 
 
  return (
    <SafeAreaView>
          <View>
            <Text style={css.header}>Poke Collections</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={renderItem}
          />
    </SafeAreaView>
  );
}

const css=StyleSheet.create({
  list:{
    flexDirection:'row',
    alignItems:'center', 
    marginTop:20,
    borderWidth: 3, 
    borderColor: "blue"
  },
  header:{
    fontSize:25,
    fontWeight:'bold',
    letterSpacing:10,
    marginTop:20,
    color:'#a3842e'
  }
})

export default App;