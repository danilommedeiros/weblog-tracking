import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins';
import {AppLoading} from 'expo';


export default function App() {

  const fonts = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if(!fonts){
    return <AppLoading/>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Boas vindas ao Weblog o mais novo rastreador de encomendas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3755',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontFamily:"Poppins_600SemiBold",
 	  fontSize: 30,
	  color: "white",
	  alignItems: 'center',
	  justifyContent: 'center',
	  marginTop: -500


	

    
	
	
  }
});