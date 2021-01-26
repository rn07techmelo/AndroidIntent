import React, { Component } from 'react'
import { Text, StyleSheet, View ,AppRegistry } from 'react-native'

export default class App extends Component {
  componentDidMount() {
    console.log('AppRegistry ', AppRegistry.startHeadlessTask )
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
