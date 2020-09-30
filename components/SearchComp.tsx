import { Ionicons } from '@expo/vector-icons';
import React, { FC, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { tintColorDark } from '../constants/Colors';


const  SearchComp = () => {
    
const [content, setContent] = useState<string>("");
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons name="ios-search" size={24} color={tintColorDark} style={styles.iconStyle} />
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='Search...'
                value={content}
                onChangeText={(content) => setContent(content)}
            /> 
        </View>
        
    )
}

export default SearchComp

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#000",
        height: 35,
        width: 255,
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical:10,
        flexDirection: "row",
    },
    input: {
      flex: 1,
      fontSize: 17,
      color: tintColorDark
      
    },
    iconStyle: {
        alignSelf: "center",
        marginHorizontal:15,
    }
})
