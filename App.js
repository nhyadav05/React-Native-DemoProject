import { Text, View, SafeAreaView, StatusBar,StyleSheet } from "react-native";
import React,{useEffect} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./src/navigation/Navigation";


export default function App() {
  return (
   
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '1E1E1E',
  },
});
