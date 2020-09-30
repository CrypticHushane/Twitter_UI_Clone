import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const MessageScreen = ( props: { navigation: any }) => {
    return (
        <View style={styles.container}>
      <Text style={styles.title}>Message</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/MessageScreen.js" />
      <Button title="Go to TabOneScreen" onPress={ () => props.navigation.navigate("TabOneScreen")}/>
    </View>
    )
}

export default MessageScreen


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
