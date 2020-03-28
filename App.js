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
  //Setting props untuk State untuk menginitialisasi objek properti
  constructor(props) {
    super(props); //memanggil constructor pada Component
    //initialisasi untuk render SplashScreen isLoading:true
    this.state = {isLoading: true};
  }
  //performTimeConsumingTask digunakan untuk setTimeout
  //yakni waktu render dari tampilan SplashScreen
  //2000 sama dengan 2 detik
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  //asyn componentDidMount() agar performTimeConsumingTask dapat bekerja
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    //Setelah 2 detik maka data akan !null dan akan mematikan SplashScreen
    //dengan isLoading:false
    if (data !== null) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({isLoading: false});
    }
  }
  //render() sebagai method yang akan dijalankan ketika class terpanggil atau secara default pada App.js
  render() {
    //expresstion of if statement digunakan untuk
    //jika masih render selama 2 detik maka tampikan View SplashScreen
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    //Setelah itu return ke dua, Tampilkan View Routes yang mengarah langsung ke halaman Login
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
//untuk deklarasi dan pembuatan style untuk component
const styles = StyleSheet.create({
  // StyleSheet abstraksi serupa CSS StyleSheets
  //deklarasi style container untuk View component
  container: {
    flex: 1, //flex: 1, yang memberi tahu komponen untuk mengisi semua ruang yang tersedia, dibagi rata di antara komponen lainnya dengan ukuran seluruh ruang yang tersedia. Semakin besar flex yang diberikan, semakin tinggi rasio ruang komponen akan dibandingkan dengan flex: 1.
  },
});
