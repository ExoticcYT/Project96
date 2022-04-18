import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Home extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}>
        <Text style={styles.containerText}>The ES Study App</Text>
        <View>
          <Image source={require('../assets/logo.png')} style={styles.img}/>
        </View>
        <Text style={styles.mainText}>Welcome to the ES Study App</Text>
        <Text/>
        <Text style={styles.mainText}>To get started, tap on the 3 lines above, and click on the box that says 'the ES Study App'</Text>
        <Text/>
        <Text/>
        <Text/>
        <Text style={styles.mainText}>About US:</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  containerText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  },
  mainText:{
    color: 'white',
    fontSize: 15,
    alignSelf: 'center'
  },
  img:{
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    margin: 20,
    resizeMode: "contain"
  }
});