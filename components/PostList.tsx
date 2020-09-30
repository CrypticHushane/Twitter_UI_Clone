import { EvilIcons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { tintColorDark } from '../constants/Colors';


const PostList = (props:any):any => {
    
    return (
        <View style={styles.hr}>
            <View style={styles.layout}>
                <EvilIcons name="user" size={100} color={tintColorDark} />
                <View style={styles.layout}>
                    <Text style={{ color: tintColorDark, padding:10}}>Testing</Text>
                    <Text style={{ color: tintColorDark, padding:10}}>Testing Name</Text>
                </View>
                <Text style={styles.content}>Helllooooooooooooooo</Text>
            </View>
            
            
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
        borderTopColor: tintColorDark,
        borderTopWidth:1,
      },
      space: {
          padding:10,
      },
      layout: {
          flexDirection: "row",
          justifyContent: "flex-start",
          
      },
      content: {
        flexDirection: "column-reverse",
        alignContent: "flex-end",
        color: tintColorDark
        
    }
})
