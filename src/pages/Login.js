//Login digunakan membuat layout bagian Login
//import data Component React dari react-native
import React, {Component} from 'react';
//import spesifik component seperti StyleSheet untuk style,
//View untuk pembuatan layout container, dan Text untuk menampilkan Text
//TouchableOpacity untuk button dengan animated Opacity ketika ditekan
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
//Import View yang dibutuhkan untuk file Logo.js dan FormLogin.js
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';
//Import Action sebagai navigation dari react-native-router-flux
import {Actions} from 'react-native-router-flux';
//export default class Login = untuk membuat class inti
//extends Component untuk extends/mewarisi react native
export default class Login extends Component {
  //signup() digunakan sebagai method navigator pada Routes.js untuk berpindah ke halaman signup
  signup() {
    Actions.signup();
  }
  //main() digunakan sebagai method navigator pada Routes.js untuk berpindah ke halaman note
  main() {
    Actions.main();
  }
  //tampilan halaman Login
  //render() sebagai method yang akan dijalankan ketika class terpanggil atau secara default pada App.js
  render() {
    //return() untuk mengembalikan nilai ketika method render() terpanggil
    return (
      //View untuk mendefinisikan kelompok View dengan style sendiri yakni style.container
      //<Logo /> untuk memasukkan view logo (foto dan welcome title)
      //<FormLogin type="Login" /> untuk memasukkan view formLogin
      //TouchableOpacity digunakan untuk menampilkan Button dengan gesture transparan ketika diklik
      //onPress={this.signup} untuk inisialisasi ketika menekan signup berpindah kehalaman Signup
      <View style={styles.container}>
        <Logo />
        <FormLogin type="Login" />
        <TouchableOpacity style={styles.button} onPress={this.main}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
//untuk deklarasi dan pembuatan style untuk component
const styles = StyleSheet.create({
  //deklarasi style container untuk View component
  container: {
    backgroundColor: '#F2A20C', //untuk warna background
    flex: 1, //flex: 1, yang memberi tahu komponen untuk mengisi semua ruang yang tersedia, dibagi rata di antara komponen lainnya dengan ukuran seluruh ruang yang tersedia. Semakin besar flex yang diberikan, semakin tinggi rasio ruang komponen akan dibandingkan dengan flex: 1.
    justifyContent: 'center', //untuk gravity content pada bagian tengah atau center
    alignItems: 'center', //align bagian tengah
  },
  //deklarasi style untuk View signup bagaian tulisan bawah
  signupTextCont: {
    flexGrow: 1, //untuk mentata banyak componen yang ada sesuai dengan device
    alignItems: 'flex-end', //menata Align bagian kanan
    justifyContent: 'center', //membuat View center atau tengah
    paddingVertical: 16, //membuat padding atau luas View secara vertikal
    flexDirection: 'row', //menata componen yang ada didalam view secara baris
  },
  //deklarasi style untuk component text pada tulisan bawah
  signupText: {
    fontStyle: 'italic', //membuat text miring
    color: 'rgba(255,255,255,0.6)', //warna text rgb
    fontSize: 16, //besar font
  },
  //deklarasi style untuk text component tulisan button signup tulisan bawah
  signupButton: {
    fontStyle: 'italic', //membuat text miring
    color: '#ffffff', //warna text #xxxx format heksa
    fontSize: 16, //besar font
    fontWeight: '500', //tebal font
  },
  //deklarasi style container untuk View component Button Login
  button: {
    //setting tampilan button yang dipakai
    width: 250, //lebar button
    backgroundColor: '#1c313a', //warna background button
    borderRadius: 25, //lengkungan sudut button
    marginVertical: 10, //jarak antara button dengan box lain (mis: input box)
    paddingVertical: 13, //jarak antara teks dengan tepi button
  },
  //deklarasi style container untuk View component text pada Button Login
  buttonText: {
    //setting tampilan text yang bisa diklik (pada bawah layar)
    fontSize: 16, //ukuran teks button
    fontWeight: '500', //ketebalan teks button
    color: '#ffffff', //warna teks button
    textAlign: 'center', //menengahkan format tulisan
  },
});
