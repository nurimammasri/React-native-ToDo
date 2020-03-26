import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
//“Scene“ sebagai fungsi transisi halaman
//semua halaman yang akan dinavigasikan
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './components/main';
export default class Routes extends Component {
  render() {
    return (
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
