import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
export default class Logo extends Component {
  render() {
    return (
      //format tampilan logo
      <View style={styles.container}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 100, height: 130, borderRadius: 10}} //format gambar sebagai logo
          source={require('../images/logo.png')}
        />
        <Text style={styles.logoText}>Welcome to IMAM app!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    //setting tampilan teks logo
    marginVertical: 15,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
