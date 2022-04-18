import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Box from './Box';
import Mindful from './Mindful';
import FourSevenEight from './FourSevenEight';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/native';

export default class Breathe extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.containerText}>
            Welcome to the Breathe screen!
          </Text>
          <Text />
          <Text />
          <Image source={require('../assets/logo1.png')} style={styles.img} />
          <Text />
          <Text />
          <Text style={styles.containerText}>
            We are here to help you relax and have a great, mindful day! Check
            out our breathing techniques below!
          </Text>
          <Text />
          <Text />
          <TouchableOpacity style={styles.button} disabled={true}>
            <Image style={styles.img} source={require('../assets/4-7-8.png')} />
            <Text style={styles.imgText}>4-7-8 Breathing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} disabled={true}>
            <Image style={styles.img} source={require('../assets/4-4-4.png')} />
            <Text style={styles.imgText}>Box breathing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} disabled={true}>
            <Image
              style={{
                width: '100%',
                alignSelf: 'center',
                height: RFValue(210),
                resizeMode: 'contain',
              }}
              source={require('../assets/mindfulness.png')}
            />
            <Text style={styles.imgText}>Simple Mindfulness</Text>
          </TouchableOpacity>
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
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  imgText: {
    fontFamily: 'cursive',
    fontSize: 20,
    color: 'white',
  },
  img: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(210),
    borderRadius: 20,
    resizeMode: 'contain',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    borderColor: 'gray',
    borderWidth: 5,
    borderRadius: 20,
    width: 350,
    height: 350,
    marginBottom: 20,
  },
});
