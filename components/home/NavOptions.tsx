import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'
import React from 'react';
import { Image } from 'expo-image';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed'
import { router } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectOrigin } from '@/constants/slices/navSlide';

const DATA = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "mapscreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "orderfood" // change in future....
    }
]

const NavOptions = () => {
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={DATA}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.4}
                    style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-200 mr-4 w-40 rounded ${origin ? 'opacity-100' : "opacity-40"} `}
                    onPress={() => router.navigate(`../${item.screen}`)}
                >
                    <View>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 120, height: 120 }}
                            contentFit='contain'
                            cachePolicy={'disk'}
                        />
                        <Text style={tw`pt-3 text-lg font-semibold text-gray-700`} >{item.title}</Text>
                    </View>

                    <Icon
                        name='arrowright'
                        type='antdesign'
                        style={tw`mt-2 p-2 bg-gray-700 rounded-full w-9`}
                        size={20}
                        color={'#fff'}
                    />

                </TouchableOpacity>
            )}

            keyExtractor={item => item.id}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({
    card: {

    }
})