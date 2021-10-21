import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

const HomeScreen = () => {

    return (
        <SafeAreaView style={styles.container}>

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