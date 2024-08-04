import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
interface IButtonProps {
    title: string;
    onPress?: () => void;
}
const IButton: React.FC<IButtonProps> = ({
    title,
    onPress
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={tw`flex flex-row items-center justify-center bg-blue-500 py-3 px-5 rounded-full`}
        >
            <Icon name='car' type='font-awesome' size={18} color={"#FFF"} />
            <Text style={tw`text-white text-lg font-semibold ml-2`} >{title}</Text>
        </TouchableOpacity>
    )
}
interface IButtonProps {
    title: string;
    onPress?: () => void;
}
export default IButton

const styles = StyleSheet.create({})