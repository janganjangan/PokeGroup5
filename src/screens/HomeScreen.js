import React, { useState } from 'react'
import { View,
        StyleSheet, 
        ScrollView,
        SafeAreaView
    } from 'react-native'
import IntroductionParagraph from './components/HomeScreenComponents/IntroductionParagraph';
import MainButton from './components/HomeScreenComponents/MainButton';
import ViewPokeballs from './components/HomeScreenComponents/ViewPokeballs';

const HomeScreen = ({ navigation }) => {
    const [pokeballs, setPokeballs] = useState(0)
    const navigation = useNavigation();

    const getRandomPokeballs = () => {
        let result = Math.floor(Math.random() * 10) + 1

        setPokeballs(result)
    }

    const navigateToPokeballPage = () => {
        navigation.navigate(ScreenName.PokeballScreen, {
            numOfItems: pokeballs
        })
    }

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

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={ styles.containerView }>
                    <IntroductionParagraph/>
                    {
                        pokeballs > 0 ? 
                        <ViewPokeballs handler={ navigateToPokeballPage } pokeballs={ pokeballs } />
                        : <MainButton description="Get Pokeballs" handler={ getRandomPokeballs } />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;