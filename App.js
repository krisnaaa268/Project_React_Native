/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Judul from './components/Judul'



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
        <Text style={styles.welcome}>
          =====WELCOME-GAN!=====
          <Image style={{width :200,heigh :200}}
          source={require('./my2.jpg')}/>
        </Text>
        <Text>nama: yacob krisna putra</Text>
        <Text>kelas: XI RPL 2</Text>
        <Text>no:38</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 30,
	fontFamily: "bold",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom:10,
  },
});
