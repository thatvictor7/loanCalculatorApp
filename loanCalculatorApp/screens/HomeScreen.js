import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Header, Button, Input } from 'react-native-elements';
import { Text, Platform, Picker, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoanTerm from '../components/LoanTerm.js'
import InteresrRate from '../components/InterestRate.js'

// import { MonoText } from '../components/StyledText';

state = { language: true };

export default function HomeScreen() {
  return (
    <View style={styles.welcomeContainer}>
      <Header
        placement="left"
        backgroundColor="#10ae00"
        // leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Your Loan Calculator', style: { color: '#fff' } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
      />
      {/* <Divider style={{ backgroundColor: 'blue', height: 3 }} /> */}
        <Text style={styles.loanTitle}>Enter Loan Info:</Text>
      <View style={styles.pickerView}>
        <Picker
          // textAlign={'center'}
          selectedValue={this.state.language}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
        }>
        <Picker.Item label="Personal Loan" value="java" />
        <Picker.Item label="Auto Loan" value="js" />
        </Picker>
      </View>
      <Text style={styles.title}>Amount:</Text>
      <View style={styles.inputView}>
        <Input
          style={styles.input}
          textAlign={'center'}
          placeholder='$5,000'
          // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
      </View>
      <Text style={styles.title}>Loan Term:</Text>
      <LoanTerm></LoanTerm>
      <Text style={styles.title}>Interest Rate:</Text>
      <InteresrRate></InteresrRate>
      <Button
        buttonStyle={styles.button}
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />}
          title="Calculate"
      />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50, 
    width: 360,
    backgroundColor: '#2608B1',
    color: 'white',
    // textAlign: 'center'
    // borderRadius: 30
  },
  pickerViewLoanTerm: {
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: '#bdc3c7', 
    overflow: 'hidden'
  },
  welcomeContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    // marginTop: 10,
    // marginBottom: 20,
    backgroundColor: '#000E23'
  },
  title: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 30
  },
  loanTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 5
  },
  pickerView: {
    borderRadius: 50, 
    // borderWidth: 1, 
    borderColor: '#bdc3c7', 
    overflow: 'hidden',
  },
  input: {
    // alignItems: 'center',
    // width: 260
    // marginHorizontal: 50,
    // backgroundColor: 'white'
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 360
  },
  button: {
    backgroundColor: '#f9002c',
    marginTop: 50,
    width: 400
  },
  screenSpacer: {
    // alignItems: 'center',
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});
