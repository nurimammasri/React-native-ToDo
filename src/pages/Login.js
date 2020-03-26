//
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';
import {Actions} from 'react-native-router-flux';
export default class Login extends Component {
  signup() {
    Actions.signup();
  }

  main() {
    Actions.main();
  }
  //tampilan halaman Login
  render() {
    return (
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
//penjelasan mengenai css lihat saja di form.js
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2A20C',
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
