//App digunakan sebagai layout yang pertama kali ditampilkan pada saat menjalankan Aplikasi
//App digunakan untuk Menampilkan hasil Splash Screen dan Routes yang mengarah ke halaman Login
//import data Component React dari react-native
import React, {Component} from 'react';
//import spesifik component seperti StyleSheet untuk style,
//View untuk pembuatan layout container, dan StatusBar untuk bagian atas Aplikasi
import {StyleSheet, View, StatusBar} from 'react-native';
//Import bagian View layout dari SpalshScreen
import SplashScreen from './src/components/splashscreen';
//Import Routes View yang mengarah langsung ke bagian Login
import Routes from './src/Routes';
//export default class App = untuk membuat class inti
//extends Component untuk extends/mewarisi react native
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({isLoading: false});
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a" //warna latar aplikasi
          barStyle="light-content" //tema status bar diatas aplikasi berwarna terang
        />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // StyleSheet abstraksi serupa CSS StyleSheets
  container: {
    flex: 1,
  },
});
