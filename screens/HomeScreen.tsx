import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import PostList from '../components/PostList';
import { Text, View } from '../components/Themed';

import Blog from '../components/Blog';
import { Avatar, ListItem } from 'react-native-elements';

const HomeScreen = () => {

  console.log(Blog);

    return (
        <View>
          <Text style={styles.title}>Home</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="/screens/HomeScreen.js" />
          <PostList />
          {/* <FlatList 
                    keyExtractor={ (index) => index.id}
                    data={Blog}
                    renderItem={ ({ item }) => <Text style={{ color: tintColorDark}}> {item.username} </Text> }
                
                />  */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
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
