/**
 * Name: chi hung (Samuel) SUM
 * ID:   300858503
 * Lab 03
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Regform extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  }
  handleFirstName = (text) => {
   this.setState({ firstName: text })
  }
  handleLastName = (text) => {
   this.setState({ lastName: text })
  }
  handleEmail = (text) => {
   this.setState({ email: text })
  }
  send = (lastName, email) => {
     alert('lastName:' + lastName + 'email: ' + email)
  }
  clearAllFields = () => {
    this.setState({firstName: ''})
    this.setState({lastName: ''})
    this.setState({email: ''})
  }

  render() {
    return (
      <View style={styles.Regform}>
        <Text style={styles.header}>Registration</Text>
        <TextInput style={styles.textinput} placeholder="First name" placeholderTextColor="#ffffb3"
        underlineColorAndroid={'transparent'} onChangeText = {this.handleFirstName} value={this.state.firstName}/>
        <TextInput style={styles.textinput} placeholder="Last name" placeholderTextColor="#ffffb3"
        underlineColorAndroid={'transparent'} onChangeText = {this.handleLastName} value={this.state.lastName}/>
        <TextInput style={styles.textinput} placeholder="Email address" placeholderTextColor="#ffffb3"
        underlineColorAndroid={'transparent'} onChangeText = {this.handleEmail} value={this.state.email}/>
        <TouchableOpacity style={styles.button_send} >
          <Text style={styles.btntext}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_clear}
          onPress = {this.clearAllFields} >
          <Text style={styles.btntext}>Clear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#ffffff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#ffffff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button_send: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  button_clear: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ff0066',
    marginTop: 30,
  },
  btntext: {
    color: '#ffffff',
    fontSize: 20,
  },
});
