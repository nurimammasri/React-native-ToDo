//note digunakan untuk bagian list note
//import data Component React dari react-native
import React, {Component} from 'react';
//import spesifik component seperti StyleSheet untuk style,
//View untuk pembuatan layout container, dan Text untuk menampilkan Text
//TouchableOpacity untuk button dengan animated Opacity ketika ditekan
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
//export default class Note = untuk membuat class inti
//extends Component untuk extends/mewarisi react native
export default class Note extends Component {
  //tampilan halaman List Note
  //render() sebagai method yang akan dijalankan ketika class terpanggil atau secara default pada App.js
  render() {
    //return() untuk mengembalikan nilai ketika method render() terpanggil
    return (
      //Tampilan list item ketika note ditambahkan
      //{this.props.val.date} untuk menampilkan Text bagian tanggal
      //{this.props.val.note} untuk menampilkan isi note
      //onPress={this.props.deleteMethod} untuk memanggil fungsi delete note
      <View key={this.props.keyval} styles={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//untuk deklarasi dan pembuatan style untuk component
const styles = StyleSheet.create({
  //deklarasi style untuk view note
  note: {
    position: 'relative', //relative terhadap bagian scrool view
    padding: 20, //padding vertikal maupun horizontal 20
    paddingRight: 100, //padding kanan jadi 100
    borderBottomWidth: 2, //tebal garis bawah 2
    borderBottomColor: '#ededed', //warna bottom garis
  },
  //deklarasi style untuk isi note
  noteText: {
    paddingLeft: 20, //padding left 20
    borderLeftWidth: 10, //tebal garis kiri
    borderLeftColor: '#E91E63', //warga garis kiri
  },
  //deklarasi style untuk button delete
  noteDelete: {
    position: 'absolute', //berada pada bagian tangan center
    justifyContent: 'center', //untuk gravity content pada bagian tengah atau center
    alignItems: 'center', //align bagian tengah
    backgroundColor: '#2980B9', //warna background
    padding: 10, //padding vertikal maupun horizontal
    top: 10, //margin top
    bottom: 10, //margin bottom
    right: 10, //margin kanan
  },

  //dekalarasi style untuk text "delete"
  noteDeleteText: {
    color: 'white', //warna teks
  },
});
