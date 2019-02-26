import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const feed = require('./assets/data.json');
export default class App extends React.Component {



  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(feed,null,4)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
