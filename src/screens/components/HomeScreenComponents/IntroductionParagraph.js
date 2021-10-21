import React from 'react'
import { Text, StyleSheet } from 'react-native'

const IntroductionParagraph = () => {
    const styles = StyleSheet.create({
        introductionParagraph: {
            marginBottom: 32,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        
        descriptionParagraph: {
            fontSize: 18, 
            fontWeight: 'normal' 
        }
    })

    const strGreetings = "Hello there,\n"
    const strButtonInfo = "press the button below to get free pokeballs :D"

    return (
        <Text style={ styles.introductionParagraph }>
            { strGreetings }
            <Text style={ styles.descriptionParagraph }>
                { strButtonInfo }
            </Text>
        </Text>
    )
}

export default IntroductionParagraph
