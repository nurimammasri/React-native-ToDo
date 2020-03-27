//Logo digunakan membuat layout Header (Image dan title) pada Login dan Signup
//import data Component React dari react-native
import React, {Component} from 'react';
//import spesifik component seperti StyleSheet untuk style, Text untuk menampilkan text,
//View untuk pembuatan layout container, dan Image untuk menampilkan gambar
import {StyleSheet, Text, View, Image} from 'react-native';
//export default class Logo = untuk membuat class inti
//extends Component untuk extends/mewarisi react native
export default class Logo extends Component {
  //render() sebagai method yang akan dijalankan ketika class terpanggil atau secara default pada App.js
  render() {
    //return() untuk mengembalikan nilai ketika method render() terpanggil
    return (
      //View untuk mendefinisikan kelompok View dengan style sendiri yakni style.container
      //TextInput untuk membuat component text Input
      //format tampilan logo
      <View style={styles.container}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 100, height: 130, borderRadius: 10}} //format gambar sebagai logo
          source={require('../images/logo.png')} //file source untuk image
        />
        <Text style={styles.logoText}>Welcome to IMAM app!</Text>
      </View>
    );
  }
}

//untuk deklarasi dan pembuatan style untuk component
const styles = StyleSheet.create({
  //deklarasi style container untuk View component
  container: {
    flexGrow: 1, //untuk mentata banyak componen yang ada sesuai dengan lebar device
    justifyContent: 'flex-end', //untuk gravity content pada bagian tengah atau center
    alignItems: 'center', //align bagian tengah
  },
  logoText: {
    //setting tampilan teks logo
    marginVertical: 15, //Margin kiri dan kanan
    fontSize: 23, //ber=sar font
    fontWeight: 'bold', //font dengan style tebal
    color: '#ffffff', //warna text
  },
});
