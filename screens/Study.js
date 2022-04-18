import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

let interval=null

function ButtonsRow({ children }) {
  return <View style={styles.buttonsRow}>{children}</View>;
}

function DisabledOpacity() {
  const [disable, setDisable] = React.useState(false);
  return <TouchableOpacity disabled={disable} style={styles.button} />;
}

export default class Study extends Component {
  constructor() {
    super();
    this.state = {
      minute: 0,
      second: 0,
      pauseDisabled: true,
      resetDisabled: true,
      isStartClicked: false,
      startDisabled: false,
    };
  }

  startTimer = () => {
    if (this.state.isStartClicked == false) {
      interval = setInterval(() => {
        return this.setState((state, props) => {
          return {
            second: state.second + 1,
            minute: state.second == 59 ? state.minute + 1 : state.minute,
            pauseDisabled: false,
            resetDisabled: false,
            isStartClicked: true,
            startDisabled: true
          };
        });
      }, 1000);
    } else {
      return (
        clearInterval(interval)
      );
    }
  };

  resetTimer = () => {
   // if (this.state.disabled == false && this.state.isStartClicked == true) {
      clearInterval(interval)
      return(
        this.setState(() => {
          return {
            second: 0,
            minute: 0,
            pauseDisabled:true,
            resetDisabled: true,
            isStartClicked:false,
            startDisabled: false
          }
        })
      )
  //  }
  };

  pauseTimer = () => {
    //if(this.state.isStartClicked == true){
      clearInterval(interval)
      this.setState(()=>{
        return {
          isStartClicked:false,
          pauseDisabled: true,
          startDisabled: false,
          resetDisabled: false,
        }
      })
    //}
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.img} />
        <Text />
        <Text />
        <Text style={styles.containerText}>
          Welcome to the Study Screen! Tap the 'Start' Button below to start
          studying. After you are done, tap the 'Reset' button to let us know!
        </Text>
        <Text style={styles.timer}>
          {this.state.minute}:{this.state.second}
        </Text>
        <ButtonsRow>
          <TouchableOpacity
            style={styles.startButton}
            disabled={this.state.startDisabled}
            onPress={() => {
              this.startTimer();
            }}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pauseButton}
            disabled={this.state.pauseDisabled}
            onPress={() => {
              this.pauseTimer();
            }}>
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetButton}
            disabled={this.state.resetDisabled}
            onPress={() => this.resetTimer()}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </ButtonsRow>
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
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  img: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(200),
    borderTopLeftRadius: RFValue(5),
    borderTopRightRadius: RFValue(5),
    resizeMode: 'contain',
  },
  startButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderColor: 'gray',
    borderWidth: 5,
    borderRadius: 20,
    width: 100,
    height: 50,
    marginBottom: 20,
  },
  pauseButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    borderColor: 'gray',
    borderWidth: 5,
    borderRadius: 20,
    width: 100,
    height: 50,
    marginBottom: 20,
  },
  resetButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderColor: 'gray',
    borderWidth: 5,
    borderRadius: 20,
    width: 100,
    height: 50,
    marginBottom: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 40,
  },
  timer: {
    color: 'white',
    fontSize: 20,
    fontWeight: '200',
  },
});
