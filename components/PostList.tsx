import { EvilIcons, Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { tintColorDark } from '../constants/Colors';


const PostList = (props:any):any => {
    
    return (
        <View>
            <View style={styles.space}/>
            <View style={styles.row}>
                <Ionicons name="ios-person" size={80} color={tintColorDark} />
                <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.name}>{props.username}</Text>
                <View style={styles.column}>
                    <Text style={{ color:tintColorDark}}>{props.content}</Text>
                </View>
                <View style={styles.space}/>
                <View style={styles.icons}>
                    <EvilIcons name="comment" size={30} color={tintColorDark} />
                    <View style={styles.pLeft}/>
                    <EvilIcons name="retweet" size={30} color={tintColorDark} />
                    <View style={styles.pLeft}/>
                    <EvilIcons name="heart" size={30} color={tintColorDark} />
                </View>
            </View>
            <View style={styles.space}/>
        </View>
    )
}

export default PostList

const styles = StyleSheet.create({
    
      space: {
          padding:10,
      },
      pLeft: {
          paddingLeft:49,
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
    icons: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-around",
        color: tintColorDark,
        position: "absolute",
        paddingLeft: 113,
        paddingTop:70,
        flexWrap: "wrap"
    },
    name: {
        color: tintColorDark, 
        padding:10,
        
    }
})
