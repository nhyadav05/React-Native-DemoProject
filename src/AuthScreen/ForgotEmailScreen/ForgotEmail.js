// ForgotEmail.js

import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/reducer/authReducer'; // Adjust the path accordingly
import axios from 'axios'; // Import axios here

const Forgotpassword1 = require('../../assets/Forgotpassword1.png');

const ForgotEmail = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleForgotEmail = async () => {
    try {
      // Dispatch the forgotPassword action with the entered email
      dispatch(forgotPassword({ email }));
      Alert.alert('Password Reset Link Sent', 'Check your email for the password reset link.');
    } catch (error) {
      Alert.alert('Error', 'Failed to send password reset link. Please try again later.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Forgotpassword1} style={styles.forgotEImage} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleForgotEmail}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.linkText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
  },
  forgotEImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  form: {
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#00529D',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#00529D',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#00529D',
    marginTop: 10,
  },
});

export default ForgotEmail;
