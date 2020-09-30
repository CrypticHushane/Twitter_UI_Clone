import { EvilIcons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { tintColorDark } from '../constants/Colors';


const PostList = (props:any):any => {
    
    return (
        <View style={styles.hr}>
            <View style={styles.space}/>
            <View style={styles.row}>
                <EvilIcons name="user" size={100} color={tintColorDark} />
                <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.name}>{props.username}</Text>
                <View style={styles.column}>
                    <Text style={{ color:tintColorDark}}>{props.content}</Text>
                </View>
                
            </View>
            <View style={styles.space}/>
        </View>
    )
}

export default PostList

const styles = StyleSheet.create({
    hr: {
        position: 'relative',
        top: 11,
        borderBottomColor: tintColorDark,
        borderBottomWidth: 1,
      },
      space: {
          padding:10,
      },
      row: {
          flexDirection: "row",
          justifyContent: "flex-start",
          
      },
      column: {
        flex: 1,
        flexDirection: "column",
        alignContent: "space-between",
        color: tintColorDark,
        position: "absolute",
        paddingLeft: 113,
        paddingTop:40,
        flexWrap: "wrap"
        
    },
    name: {
        color: tintColorDark, 
        padding:10,
        
    }
})
