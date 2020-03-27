//Routes digunakan untuk mekanisme navigator (Berpindah antar layar/View)
//import data Component React dari react-native
import React, {Component} from 'react';
//Import Router, stack dan Scene sebagai alat navigation dari react-native-router-flux
//Router untuk initialisasi Stack
//Stack untuk key root untuk navigator
//Scene untuk mendefinisikan View/layout yang akan digunakan dalam navigasi
import {Router, Stack, Scene} from 'react-native-router-flux';
//semua halaman yang akan dinavigasikan LOGIN, SIGNUP, MAIN(NOTES)
//import view dari Login
import Login from './pages/Login';
//import view dari Signup
import Signup from './pages/Signup';
//import View dari main
import Main from './components/main';
//export default class Routes = untuk membuat class inti
//extends Component untuk extends/mewarisi react native
export default class Routes extends Component {
  //render() sebagai method yang akan dijalankan ketika class terpanggil atau secara default pada App.js
  render() {
    //return() untuk mengembalikan nilai ketika method render() terpanggil
    return (
      //Router untuk initialisasi Stack
      //Stack untuk key root untuk navigator
      //Scene untuk mendefinisikan View/layout yang akan digunakan dalam navigasi
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="signup" component={Signup} title="Register" />
          <Scene key="main" component={Main} title="Main" />
        </Stack>
      </Router>
    );
  }
}
