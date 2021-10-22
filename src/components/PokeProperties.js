import React from 'react';
import { View } from 'react-native';
import Pokedex from './Pokedex';

const PokeProperties=(props)=>{
  return (
    <Pokedex ids={props.index}/>
  );
}



export default PokeProperties;