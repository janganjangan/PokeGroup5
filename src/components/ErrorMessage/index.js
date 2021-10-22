import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message, textStyle }) => {

    return (
        <View style={styles.center}>
            <Text style={[styles.errorText, textStyle]}>{message}</Text>
        </View>
    )
}

export default ErrorMessage;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        fontSize: 16
    }
})