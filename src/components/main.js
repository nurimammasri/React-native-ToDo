//Main digunakan bagian kompleks tampilan dari Note
//import data Component React dari react-native
import React, {Component} from 'react';
//import spesifik component seperti StyleSheet untuk style, Text untuk menampilkan text,
//View untuk pembuatan layout container, dan ScrollView untuk membuat tampilan bisa discroll
//TextInput untuk membuat fungsi EditText atau form, dan TouchableOpacity untuk membuat Button dengan efek Opacity
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//Import Action sebagai navigation dari react-native-router-flux
import {Actions} from 'react-native-router-flux';
//import Tampilan dari file note.js
import Note from './note';

//export default class Logo = untuk membuat class inti
//extends Component untuk extends/mewarisi react native
export default class Main extends Component {
  //
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

  //Setting props untuk menginitialisasi objek properti
  constructor(props) {
    super(props); //memanggil constructor pada Component
    this.state = {
      //initialisasi tempat menyimpan note dengan Array
      noteArray: [],
      //initialisasi noteText kalimat teks untuk note
      noteText: '',
    };
  }
  //render() sebagai method yang akan dijalankan ketika class terpanggil atau secara default pada App.js
  render() {
    //
    let notes = this.state.noteArray.map((val, key) => {
      //return() untuk mengembalikan layout ketika notes dipanggil
      return (
        //
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>- Note -</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder="Write note here"
            placeholderTextColor="white"
            onChangeText={noteText => this.setState({noteText})}
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addNote.bind(this)}>
          <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {
    if (this.state.noteArray) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ' '});
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },

  textHeader: {
    color: 'white',
    fontSize: 18,
    paddingTop: 40,
    paddingBottom: 15,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: 'white',
    padding: 30,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 100,
    backgroundColor: '#E91E63',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
});
