import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './style';

export default class Friends extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require('../urban-pursuit-leaf-bg.jpg')}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Friends</Text>
        </View>
      </ImageBackground>
    );
  }
}
