import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView
        style={styles.container}>
        <Image style={styles.img} source={require('../assets/user.png')}></Image>
        <Text style={styles.containerText}>First and last name</Text>
        <Text/>
        <Text style={styles.containerText}>Email ID</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  containerText: {
    color: 'white',
    fontSize: 20,
    borderColor: 'gray'
  },
  img: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(200),
    borderTopLeftRadius: RFValue(5),
    borderTopRightRadius: RFValue(5),
    resizeMode: 'contain',
  },
});