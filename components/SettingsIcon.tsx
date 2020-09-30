import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors, { tintColorDark, tintColorLight} from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const SettingsIcon = () => {
    return (
        <Ionicons name="ios-settings" size={24} color={tintColorLight} style={{paddingRight: 15}}/>
    )
}

export default SettingsIcon

const styles = StyleSheet.create({})
