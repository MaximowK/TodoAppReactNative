import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class SearchPanel extends Component {
  constructor() {
    super(),
      (this.state = {
        searchWord: '',
      });
  }
  onChangeTextHandler = text => {
    const words = text;
    this.setState = {
      searchWord: words,
    };
    this.props.onSearch(words);
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="type to search"
          onChangeText={this.onChangeTextHandler}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    margin: 8,
    borderRadius: 10,
    opacity: 0.8,
    borderWidth: 1,
  },
});
