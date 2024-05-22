import React, { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const facebook = require('../../assets/facebook.png');
const twitter = require('../../assets/twitter.png');
const linkedin = require('../../assets/linkedin.png');

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login function
    if (email && password) {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Login failed', 'Please enter email and password');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Image source={require('../../assets/login-illustration.png')} style={styles.headerImage} />
          <Text style={styles.headerText}>Welcome To Little Drop, where you manage your daily tasks</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={[styles.input, styles.shadowProp]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, styles.shadowProp]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity onPress={() => navigation.navigate('ForgotEmail')}>
            <Text style={styles.linkText}>Forgot Email?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.shadowProp]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>

          <TouchableOpacity
            style={[styles.button, styles.shadowProp]}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialLogin}>
          <Text style={styles.socialText}>Login with</Text>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Image source={facebook} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={twitter} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={linkedin} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
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
    backgroundColor: '#FFFFFF', // Ensure the background color is white for shadow visibility
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
  orText: {
    color: '#AAAAAA',
    marginBottom: 10,
  },
  socialLogin: {
    alignItems: 'center',
  },
  socialText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Adds shadow for Android
  },
});
