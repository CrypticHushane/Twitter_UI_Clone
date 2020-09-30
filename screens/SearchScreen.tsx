import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const SearchScreen = () => {

    return (
        <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>
      <Text>Mah try make replicate the twitter UI</Text>
      <Text>Shane.........jah</Text>
    </View>
    )
}

export default SearchScreen


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
