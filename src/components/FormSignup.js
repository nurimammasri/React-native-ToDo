//FormSignup digunakan membuat layout bagian input dan button dri form Signup
//import data Component React dari react-native
import React, {Component} from 'react';
//import spesifik component seperti StyleSheet untuk style, View untuk pembuatan layout container, dan Text Input untuk pembuatan Form
import {StyleSheet, View, TextInput} from 'react-native';
//export default class Form Signup = untuk membuat class inti
//extends Component untuk extends/mewarisi react native
export default class FormSignup extends Component {
  //render() sebagai method yang akan dijalankan ketika class terpanggil atau secara default pada App.js
  render() {
    //return() untuk mengembalikan nilai ketika method render() terpanggil
    return (
      //View untuk mendefinisikan kelompok View dengan style sendiri yakni style.container
      //TextInput untuk membuat component text Input
      <View style={styles.container}>
        <TextInput //tampilan First Name input box
          style={styles.inputBox} // style view text input brupa input box
          underlineColorAndroid="rgba(0,0,0,0)" //untuk garir underline warna putih/transparant
          placeholder="First Name" //tampilan default teks dalam email input boxm(setelah input diketik, teks tsb akan hilang)
          placeholderTextColor="#000000" //warna teks palaceholder
          selectionColor="#fff" //warna untuk selectioncolor ketikka ditekan
          keyboardType="default" //tipe keyboard yang akan tampil
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput //tampilan Last Name input box
          style={styles.inputBox} //style text input brupa input box
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Last Name" //tampilan default teks dalam email input boxm(setelah input diketik, teks tsb akan hilang)
          placeholderTextColor="#000000" //warna teks palaceholder
          selectionColor="#fff" //warna untuk selectioncolor ketikka ditekan
          keyboardType="default" //tipe keyboard yang akan tampil
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput //tampilan email input box
          style={styles.inputBox} //style text input brupa input box
          underlineColorAndroid="rgba(0,0,0,0)" //untuk garir underline warna putih/transparant
          placeholder="Email" //tampilan default teks dalam email input boxm(setelah input diketik, teks tsb akan hilang)
          placeholderTextColor="#000000" //warna teks palaceholder
          selectionColor="#fff" //warna untuk selectioncolor ketikka ditekan
          keyboardType="email-address" //tipe keyboard yang akan tampil
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput //tampilan password input box
          style={styles.inputBox} //style text input brupa input box
          underlineColorAndroid="rgba(0,0,0,0)" //untuk garir underline warna putih/transparant
          placeholder="Password" //tampilan default teks dalam password input box
          secureTextEntry={true} //untuk fungsi hide untuk password
          placeholderTextColor="#000000" //warna teks placeholder
          ref={input => (this.password = input)}
        />
      </View>
    );
  }
}
//untuk deklarasi dan pembuatan style untuk component
const styles = StyleSheet.create({
  //deklarasi style container untuk View component
  container: {
    flexGrow: 1, //untuk mentata banyak componen yang ada sesuai dengan lebar device
    justifyContent: 'center', //untuk gravity content pada bagian tengah atau center
    alignItems: 'center', //align bagian tengah
  },
  inputBox: {
    //setting tampilan input box yang dipakai
    width: 300, //lebar
    backgroundColor: '#ffffff', //background box
    borderRadius: 10, //lengkungan sudut box
    paddingHorizontal: 16, //jarak dari tepi box ke teks
    fontSize: 16, //ukuran teks
    color: '#000000', //warna teks
    marginVertical: 10, //jarak antar
  },
});
