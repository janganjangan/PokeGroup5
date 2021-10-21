import React from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import ScreenName from '../navigation/ScreenName';

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate(ScreenName.PokeballScreen, {
            numOfItems: 5
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button title={'Navigate to Pokeball Screen'} onPress={handleOnPress} />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? '20' : 0
    }
})