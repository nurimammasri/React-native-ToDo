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

  //Setting props untuk State untuk menginitialisasi objek properti
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
    //variable view dengan state pemanggil untuk noteArray
    let notes = this.state.noteArray.map((val, key) => {
      //return() untuk mengembalikan layout ketika notes dipanggil
      return (
        //memanggil bagian untuk tampilan list note
        <Note
          key={key} //input key
          keyval={key}
          val={val} //untuk props
          deleteMethod={() => this.deleteNote(key)} //untuk fungsi delete note per note
        />
      );
    });

    //return() untuk menampilkan layout header NOTE dan Write Note dan tombol tambah (+)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>NOTE</Text>
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
  //Fungsi untuk menambahkan note
  addNote() {
    if (this.state.noteArray) {
      var d = new Date(); //instance ke fungsi track date (tanggal)
      this.state.noteArray.push({
        //format penulisan tanggal
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        //set note text
        note: this.state.noteText,
      });
      //mengubah isi state untuk noteArray dan noteText
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ' '});
    }
  }
  //fungsi untuk delete note
  deleteNote(key) {
    //splice = untuk menghapus array sesuai dengan key
    this.state.noteArray.splice(key, 1);
    //mengubah isi state untuk noteArray setelah di delete
    this.setState({noteArray: this.state.noteArray});
  }
}

//untuk deklarasi dan pembuatan style untuk component
const styles = StyleSheet.create({
  //deklarasi style untuk view note
  container: {
    flex: 1, //flex: 1, yang memberi tahu komponen untuk mengisi semua ruang yang tersedia, dibagi rata di antara komponen lainnya dengan ukuran seluruh ruang yang tersedia. Semakin besar flex yang diberikan, semakin tinggi rasio ruang komponen akan dibandingkan dengan flex: 1.
  },
  //deklarasi style untuk header judul Note
  header: {
    backgroundColor: '#E91E63', //warna background
    alignItems: 'center', //align untuk bagian center/tengah
    justifyContent: 'center', //untuk gravity content pada bagian tengah atau center
    borderBottomWidth: 2, //tebal garis bawah
    borderBottomColor: '#ddd', //warna garis bawah
  },
  //deklarasi style untuk Text Header NOTE
  textHeader: {
    color: 'white', //warna teks
    fontWeight: 'bold', //style tebal
    fontSize: 30, //beasr font
    paddingTop: 40, //besar padding bagian atas
    paddingBottom: 15, //besar padding bagian bawah
  },
  //deklarasi style untuk ScrollView
  scrollContainer: {
    flex: 1, //flex: 1, yang memberi tahu komponen untuk mengisi semua ruang yang tersedia, dibagi rata di antara komponen lainnya dengan ukuran seluruh ruang yang tersedia. Semakin besar flex yang diberikan, semakin tinggi rasio ruang komponen akan dibandingkan dengan flex: 1.
    marginBottom: 100, //besar margin bawah
  },
  //deklarasi style untuk bagian pengisisan text note
  footer: {
    position: 'absolute', //untuk position
    bottom: 0, //margin bawah 0
    left: 0, //margin kiri 0
    right: 0, //margin kanan 0
    zIndex: 10, //indeks relative penempatan component
  },
  //deklarasi style untuk placeholder text note "Write note here"
  textInput: {
    alignSelf: 'stretch', //untuk align penuh ke kanan dan kiri
    color: 'white', //warna text
    padding: 30, //padding vertikal dan horizontal
    backgroundColor: '#252525', //warna background
    borderTopWidth: 2, //tebal garis atas
    borderTopColor: '#ededed', //warna garis atas
  },
  //deklaarasi style untuk tombol (+) untuk menambahkan note
  addButton: {
    position: 'absolute', //untuk position
    zIndex: 11, //indeks relative penempatan component
    right: 10, //margin kanan
    bottom: 100, //margin bawah
    backgroundColor: '#E91E63', //warna background
    width: 50, //lebar
    height: 50, //tinggi
    borderRadius: 50, //radius component
    alignItems: 'center', //align bagian tengah
    justifyContent: 'center', //untuk gravity content pada bagian tengah atau center
  },
  //untuk style + pada tombol
  addButtonText: {
    color: 'white', //warna
    fontSize: 24, //besar font
  },
});
