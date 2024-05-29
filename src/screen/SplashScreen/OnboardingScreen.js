import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const familyS = require('../../assets/family-shopping.png');

const OnboardingScreen = ({navigation}) => {
  useEffect(() => {
    navigationFun();
  }, []);

  const navigationFun = () => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover, Customize, Shop</Text>
      <Image
        source={familyS}
        style={styles.sofaImage}
      />
      <Text style={styles.description}>
        Browse a wide selection of stylish options, visualize them in your space with augmented reality.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton}>
          <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sofaImage: {
    width: width - 40,
    height: height / 3,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  skipButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
});

export default OnboardingScreen;
