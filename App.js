import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to TUKE Navigation App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
