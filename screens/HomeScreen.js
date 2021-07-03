import React from 'react';
import { StyleSheet, Button, View, Text, Image } from "react-native";


function HomeScreen() {
    return (
      <View style={styles.container}>
        <Image style={styles.sosButton}
        source={require('../assets/red-button.png')}/>
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sosButton:{
        width: 350,
        height: 350,
    },
});