import React from 'react'
import { View, Image } from 'react-native'
import { IC_RED_POKEBALL as RedPokeball } from '../assets/index'

const HomeScreen = () => {
    return (
        <View>
            <Image source={ RedPokeball }></Image>
        </View>
    )
}

export default HomeScreen
