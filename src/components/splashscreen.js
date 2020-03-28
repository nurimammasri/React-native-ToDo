//SplashScreen digunakan membuat layout bagian Login
//import data Component React dari react-native
import React from 'react';
//import spesifik component seperti StyleSheet untuk style,
//View untuk pembuatan layout container, dan Text untuk menampilkan Text
import {View, Text, StyleSheet} from 'react-native';

//class SplashScreen = untuk membuat class inti
//extends Component untuk extends/mewarisi react native
class SplashScreen extends React.Component {
  //tampilan halaman SplashScreen
  //render() sebagai method yang akan dijalankan ketika class terpanggil atau secara default pada App.js
  render() {
    //return() untuk mengembalikan nilai ketika method render() terpanggil
    return (
      //Untuk Tampilan Text Pengantar
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>My Notes</Text>
        <Text style={styles.textDesc}>Nur Imam Masri</Text>
      </View>
    );
  }
}
//untuk deklarasi dan pembuatan style untuk component
const styles = StyleSheet.create({
  //deklarasi style viewStyles untuk View component
  viewStyles: {
    flex: 1, //flex: 1, yang memberi tahu komponen untuk mengisi semua ruang yang tersedia, dibagi rata di antara komponen lainnya dengan ukuran seluruh ruang yang tersedia. Semakin besar flex yang diberikan, semakin tinggi rasio ruang komponen akan dibandingkan dengan flex: 1.
    alignItems: 'center', //align bagian tengah
    justifyContent: 'center', //untuk gravity content pada bagian tengah atau center
    backgroundColor: 'orange', //warna background splashscreen
  },
  //deklarasi style untuk text My Notes
  textStyles: {
    color: 'white', //warna teks
    fontSize: 60, //besar teks
    fontWeight: 'bold', //style bold untuk teks
  },
  //Deklarasi style untuk Descripsi (Nur Imam Masri)
  textDesc: {
    color: 'white', //warna teks
    fontSize: 20, //besar teks
    fontWeight: 'bold', //style bold untuk teks
    marginTop: 20, //besar margin atau jarak Top component
  },
});

//Export view dari SplashScreen
export default SplashScreen;
