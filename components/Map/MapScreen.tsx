import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from './Map';
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from './NavigateCard';
import RideOptionCard from './RideOptionCard';

const MapScreenComponent = () => {
    const Stack = createStackNavigator();
    return (
        <View>

            <View style={tw`h-1/2`} >
                <Map />
            </View>

            <View style={tw`h-1/2`} >
                <Stack.Navigator>
                    <Stack.Screen
                        component={NavigateCard}
                        name='navigate_card'
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='ride_option_card'
                        component={RideOptionCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreenComponent

const styles = StyleSheet.create({})