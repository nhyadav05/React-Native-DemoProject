import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DashBoard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{ marginLeft: 20, marginTop: 10 }}
      >
        <Text style={{ color: 'blue', fontSize: 16 }}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Drawer');
        }}
        style={{ marginLeft: 20, marginTop: 10 }}
      >
        <Text style={{ color: 'blue', fontSize: 16 }}>Open Drawer</Text>
      </TouchableOpacity>
      <View style={styles.DashBoard}>
        <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>
          DashBoard
        </Text>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  DashBoard: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
