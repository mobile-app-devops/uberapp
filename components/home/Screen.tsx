import {
    StyleSheet,
    View,
    SafeAreaView,
} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Image } from 'expo-image';
import ImageUri from '@/constants/ImageUri';
import NavOptions from './NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '@/constants/slices/navSlide'
import NavFavourite from './NavFavourite';

const Screen = () => {
    const dispath = useDispatch();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }} >
            <View style={tw`p-5`} >
                <Image
                    source={{ uri: ImageUri.uberLogo }}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    contentFit='contain'
                    cachePolicy={'disk'}
                />

                {/* Google Search API */}
                <GooglePlacesAutocomplete
                    nearbyPlacesAPI='GooglePlacesSearch'
                    placeholder='Where To?'
                    query={{
                        key: "AIzaSyDGjDGOBfE1nZ4JGPkau6IBRo24QoaSGFc",
                        language: 'en',
                    }}
                    debounce={100}
                    styles={{
                        container: {
                            flex: 0,
                            marginBottom: 10
                        },
                    }}
                    enablePoweredByContainer={false}
                    minLength={2}
                    onPress={(data, details = null) => {
                        dispath(setOrigin({
                            location: details?.geometry.location,
                            description: data.description
                        }))

                        console.log(details?.geometry.location);


                        dispath(setDestination(null))
                    }}
                    fetchDetails={true}
                />

                <NavOptions />

                <NavFavourite />
            </View>
        </SafeAreaView>
    )
}

export default Screen