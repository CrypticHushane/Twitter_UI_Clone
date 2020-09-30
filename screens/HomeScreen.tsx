import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import PostList from '../components/PostList';
import { Text, View } from '../components/Themed';

import Blog from '../components/Blog';
import { Avatar, ListItem } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {

  console.log(Blog);

    return (
        <View> 
          <FlatList 
              keyExtractor={ (index) => index.id.toString()}
              data={Blog}
              renderItem={ ({ item }) => (
              <>
                <TouchableOpacity>
                  <PostList name={item.name} username={item.username} content={item.content}/>
                </TouchableOpacity>
                <View style={styles.hr}/>
              </>
              ) }
          /> 
          
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  hr: {
    position: 'relative',
    top: 11,
    borderBottomColor: '#000066',
    borderBottomWidth: 1,
  },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
