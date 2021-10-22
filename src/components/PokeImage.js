import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const PokeImage=(props)=>{
  
  return (
    <View >
        <Image source={{uri: props.imageUri }}
            style={css.image}
            />
    </View>
  );
}

const css=StyleSheet.create({
 
  image:{
    width:150,
    height:150,
    borderRadius:75,
    marginLeft:20, 
    marginRight:20,
    padding:10,
    overflow: "hidden", 
    borderWidth: 3, 
    borderColor: "red" 
  }

})

export default PokeImage;