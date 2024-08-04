import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/themed'

const data = [
    {
        id: '123',
        icon: 'home',
        location: "Home",
        destination: "Code Street, New York, NY",
    },
    {
        id: '456',
        icon: 'car',
        location: "Work",
        destination: "Broadway, New York, NY",
    }
]

const NavFavourite = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item: { location, icon, destination } }) => (
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={tw`flex-row items-center p-5`}
                >
                    <Icon
                        name={icon}
                        type='ionicon'
                        color={"#fff"}
                        size={18}
                        style={tw`mr-4 rounded-full p-3 bg-blue-500`}
                    />
                    <View>
                        <Text style={tw`text-lg font-semibold`} >{location}</Text>
                        <Text style={tw`text-gray-500`} >{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourite

const styles = StyleSheet.create({})