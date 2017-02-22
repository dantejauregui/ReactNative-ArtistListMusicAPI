import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class ArtistBox extends Component {
  render() {
    //las imagenes de url externas se tienen q colocar width y height, sino no se renderizara, este es un ejemplo:
    //const image = 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png';

    //usando DESTRUCTURING de ES6 y trayendo los datos del Padre con this.props
    const {name, image, likes, comments} = this.props.artist;

    return (
        <View style={styles.artistBox}>

          <Image style={styles.image} source={{ uri: image}} />

          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30} color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
          </View>

        </View>

    );
  }
}

const styles = StyleSheet.create({

  image: {
    width: 150,
    height: 150,
  },
  artistBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 40,

  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  count: {
    color: 'gray',
  }
});
