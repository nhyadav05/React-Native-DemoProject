import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native';

const Forgotpassword1 = require('../../assets/Forgotpassword1.png');

export default function ForgotEmail({ navigation }) {
  const [email, setEmail] = useState('');

  const handleForgotEmail = () => {
    // Implement the forgot email API call here
    Alert.alert('Password reset link sent to your email');
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
}

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
