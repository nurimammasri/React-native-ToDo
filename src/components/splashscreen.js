import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>My Notes</Text>
        <Text style={styles.textDesc}>Nur Imam Masri</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  textStyles: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
  textDesc: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
