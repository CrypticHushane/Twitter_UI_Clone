import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors, { tintColorDark} from '../constants/Colors';

const Profile = () => {
    return (
        <Ionicons name="md-person" size={30} color={tintColorDark} style={{paddingLeft: 15}}/>
    )
}

export default Profile

const styles = StyleSheet.create({})
