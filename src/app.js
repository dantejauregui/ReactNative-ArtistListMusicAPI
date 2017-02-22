import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import ArtistList from './ArtistList';
import {getArtists} from './api-client';

export default class PlatziMusic extends Component {

  // Application name	platziMusic:
  // API key	1e2e691583ae8793ed5b3e6bb7f1a702
  // Shared secret	1c94cc8840c21aa9828b9d6e562d63f7
  // Registered to	dantejauregui
  // URL FINAL GET:  http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=1e2e691583ae8793ed5b3e6bb7f1a702&format=json

  state = {
    artists: []
  }

  componentDidMount(){
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {
    const artists = this.state.artists

    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
