import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {signupUser} from '../../redux/reducer/authReducer';
const eyeIcon = require('../../assets/eye-icon.png'); // Replace with your actual eye icon path
const SignUp = require('../../assets/SignUp.png');

const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      // Basic form validation
      if (
        !username.trim() ||
        !email.trim() ||
        !password.trim() ||
        !confirmPassword.trim()
      ) {
        throw new Error('Please fill in all fields');
      }
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      // Dispatch the signupUser action with the form data
      await dispatch(signupUser({ username: username, email: email, password: password }));
      // Optionally, you can navigate to another screen after successful signup
      navigation.navigate('Dashboard');
    } catch (error) {
      const errorMessage = error && error.message ? error.message : 'An error occurred';
      console.error('Signup failed:', errorMessage);
      Alert.alert('Signup failed', errorMessage);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
        <Image source={SignUp} style={styles.SignUpImage} />
        <Text style={styles.title}>Create Account</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={[styles.input, styles.shadowProp]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.input, styles.shadowProp]}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View
          style={[styles.input, styles.shadowProp, styles.passwordContainer]}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPass}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image source={eyeIcon} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <View
          style={[styles.input, styles.shadowProp, styles.passwordContainer]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPass}
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image source={eyeIcon} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.button, styles.shadowProp]}
          onPress={handleSignup}
          // onPress={() => Alert.alert('Sign Up button pressed')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>Or</Text>

      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        By signing up you agree to the{' '}
        <Text style={styles.linkText}>Terms of service</Text>.
      </Text>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Login')}>
          Login now
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  SignUpImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backText: {
    color: '#00529D',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00529D',
  },
  inputView: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: '#00529D',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  buttonView: {
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#00529D',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginVertical: 2,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  socialButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    color: '#666666',
    marginBottom: 5,
  },
  linkText: {
    color: '#00529D',
    fontWeight: 'bold',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#666666',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
});
