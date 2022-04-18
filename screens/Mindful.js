import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Mindful extends Component {
  render() {
    return (
      <SafeAreaView
        style={styles.container}>
        <ScrollView>
          <Text style={styles.containerText}>Zen Mindfulness</Text>
        <View>
          <Image source={require('../assets/mindfulness.png')} style={styles.img}/>
        </View>
        <Text style={styles.mainText}>SCREEN</Text>
        </ScrollView>
      </SafeAreaView>
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