import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const MainButton = ({ description, handler }) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: 'red',
            padding: 16,
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            marginBottom: 8
        },

        buttonContent: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold'
        },
    })

    return (
        <View>
            <TouchableOpacity onPress={ () => { handler() } }>
                <View style={ styles.button }>
                    <Text style={ styles.buttonContent }>{ description }</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MainButton
