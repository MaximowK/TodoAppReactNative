import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class TodoListItem extends Component {
  onMenuHandler = () => {
    this.props.onMenu();
    this.props.returnKey(this.props.id);
  };
  getStyleText = () => {
    return this.props.important ? styles.textImportant : styles.text;
  };
  getStyleContainer = () => {
    return this.props.done ? styles.containerDone : styles.container;
  };
  render() {
    return (
      <View style={this.getStyleContainer()}>
        <Text style={this.getStyleText()}>{this.props.label}</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={this.onMenuHandler}>
          <Image
            style={styles.image}
            source={require('../assets/icons/menu.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerDone: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.3,
  },
  text: {
    fontSize: 40,
    color: '#000',
    opacity: 0.7,
  },
  textImportant: {fontSize: 40, color: '#4682b4', opacity: 0.7},
  image: {
    paddingTop: 10,
  },
  menuButton: {
    padding: 5,
    alignSelf: 'center',
  },
});
