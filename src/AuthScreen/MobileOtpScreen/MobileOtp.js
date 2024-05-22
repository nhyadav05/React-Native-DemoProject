import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text,Image, TextInput, TouchableOpacity, View } from 'react-native';

const Otp1 = require('../../assets/Otp1.png');


export default function MobileOtp({ navigation }) {
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = () => {
    // Implement OTP verification API call here
    Alert.alert('OTP verified successfully');
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Image source={Otp1} style={styles.otpImage} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.linkText}>Resend OTP</Text>
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
  otpImage: {
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
