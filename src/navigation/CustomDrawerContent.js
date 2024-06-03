import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';

const CustomDrawerContent =({ props,navigation })=> {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Custom Header</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => navigation.navigate('Login')} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
