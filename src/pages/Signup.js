//pada dasarnya isi file ini mirip dengan Login.js hanya saja berbeda action nya
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
//dalam satu halaman Signup, akan ditampilkan logo dan form, maka import kedua file tersebut
import Logo from '../components/Logo';
import FormSignup from '../components/FormSignup';
import {Actions} from 'react-native-router-flux';
export default class Signup extends Component {
  goBack() {
    Actions.pop();
    //pop (membatalkan/menghilangkan) action yang telah
    // dilakukan, fungsi ini mengembalikan action.signup() yang
    // telah dipanggil, sehingga tampilan yang telah berubah
    // karena pemanggilan akan kembali ke halaman Login yg
    // bersifat initial={true}. Fungsi ini nantinya akan
    // dipanggil saat button text pada halaman Signup diklik
    // (perhatikan pemanggilan fungsi goBack() dibawah)
  }
  main() {
    Actions.main();
  }

  //tampilan halaman Signup
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <FormSignup type="Signup" />
        <TouchableOpacity style={styles.button} onPress={this.main}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0597F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    fontStyle: 'italic',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    //setting tampilan button yang dipakai
    width: 250, //lebar button
    backgroundColor: '#1c313a', //warna background button
    borderRadius: 25, //lengkungan sudut button
    marginVertical: 10, //jarak antara button dengan box lain (mis: input box)
    paddingVertical: 13, //jarak antara teks dengan tepi button
  },
  buttonText: {
    //setting tampilan text yang bisa diklik (pada bawah layar)
    fontSize: 16, //ukuran teks button
    fontWeight: '500', //ketebalan teks button
    color: '#ffffff', //warna teks button
    textAlign: 'center', //menengahkan format tulisan
  },
});
