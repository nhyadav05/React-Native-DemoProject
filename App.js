import { Text, View, SafeAreaView, StatusBar,StyleSheet } from "react-native";
import React,{useEffect} from 'react'
import { Provider } from 'react-redux';
import Navigation from "./src/navigation/Navigation";
import store from "./src/redux/store/store";


export default function App() {
  return (
   
    <Provider store={store}>
    <Navigation />
  </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '1E1E1E',
  },
});
