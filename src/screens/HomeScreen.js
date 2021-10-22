import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native'
import { IntroductionParagraph, MainButton, ViewPokeballs } from '../components/HomeScreenComponents';
import { MyPokemonIconButton } from '../components';
import ScreenName from '../navigation/ScreenName';

const HomeScreen = ({ navigation }) => {
    const [pokeballs, setPokeballs] = useState(0)

    useEffect(() => {
        navigation.setOptions({ headerRight: () => <MyPokemonIconButton /> });
    }, [])

    const getRandomPokeballs = () => {
        let result = Math.floor(Math.random() * 10) + 1

        setPokeballs(result)
    }

    const navigateToPokeballPage = () => {
        navigation.navigate(ScreenName.PokeballScreen, {
            numOfItems: pokeballs
        })
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.containerView}>
                    <IntroductionParagraph />
                    {
                        pokeballs > 0 ?
                            <ViewPokeballs handler={navigateToPokeballPage} pokeballs={pokeballs} />
                            : <MainButton description="Get Pokeballs" handler={getRandomPokeballs} />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    containerView: {
        margin: 16,
        padding: 16,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 10,
    }
})