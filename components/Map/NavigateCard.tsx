import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination } from '@/constants/slices/navSlide'
import { useNavigation } from '@react-navigation/native'
import NavFavourite from '../home/NavFavourite'
import IButton from '../ui/IButton'

const NavigateCard = () => {
    const dispath = useDispatch()
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`} >
            <Text style={tw`text-center py-5 text-xl font-semibold text-gray-700`} >Good morning</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`} >
                <GooglePlacesAutocomplete
                    placeholder='Where To?'
                    debounce={100}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    query={{
                        key: "AIzaSyDGjDGOBfE1nZ4JGPkau6IBRo24QoaSGFc",
                        language: 'en',
                    }}
                    styles={styles}
                    minLength={2}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        dispath(setDestination({
                            location: details?.geometry.location,
                            description: data.description
                        }))

                        navigation.navigate("ride_option_card")
                    }}
                    disableScroll={false}
                    keepResultsAfterBlur={true}
                />
                <NavFavourite />
            </View>
            <View style={tw`flex flex-row items-center justify-around mt-10`} >
                <IButton
                    title='Rides'
                    onPress={() => navigation.navigate("ride_option_card")}
                />

                <IButton
                    title='Eats'
                />
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#ffffff',
        paddingTop: 20,
    },
    textInput: {
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})