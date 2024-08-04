import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Image } from 'expo-image'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTime } from '@/constants/slices/navSlide'

const data = [
    {
        id: 1,
        title: "Uber X",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: 2,
        title: "Uber SUV",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: 3,
        title: "Uber Van",
        multiplier: 1.5,
        image: "https://links.papareact.com/3pn",
    }

]

const SURGE_CHANGE_RATE = 1.3;

const RideOptionCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = React.useState(0);
    const travelInformation = useSelector(selectTravelTime);
    console.log(travelInformation);

    return (
        <SafeAreaView style={tw`bg-white flex-1 relative`} >
            <TouchableOpacity
                style={tw`absolute top-4 left-5 p-2 rounded-full bg-gray-100`}
            // onPress={() => navigation.goBack('navigate_card')}
            >
                <Icon
                    name='arrowleft'
                    type='antdesign'
                    size={18}
                    color={"#999"}
                />
            </TouchableOpacity>
            <Text style={tw`text-center py-5 font-semibold text-lg text-gray-800`} >Choose a vehicle for {travelInformation?.distance.text}</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={() => {
                    return <View style={tw`border-t border-gray-200`} />
                }}
                renderItem={({ item: { image, title, id, multiplier }, index }) => (
                    <TouchableOpacity
                        key={id}
                        activeOpacity={0.8}
                        style={tw`flex-row items-center px-4 justify-between ${selected === (index + 1) ? 'bg-gray-100' : ''}`}
                        onPress={() => {
                            setSelected(id)
                        }}
                    >
                        <View style={tw`flex flex-row items-center`} >
                            <Image
                                source={{ uri: image }}
                                style={tw`w-28 h-28`}
                                contentFit='contain'
                                cachePolicy={'disk'}
                            />
                            <View style={tw`mt-5`} >
                                <Text style={tw`text-xl font-semibold text-gray-800 `} >{title}</Text>
                                <Text>{travelInformation?.duration.text}</Text>
                            </View>
                        </View>
                        <View style={tw`mr-5`} >
                            <Text style={tw`text-gray-900 font-semibold text-xl`} >
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 2,
                                }).format(travelInformation?.duration.value * SURGE_CHANGE_RATE * multiplier / 100)}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default RideOptionCard

const styles = StyleSheet.create({})