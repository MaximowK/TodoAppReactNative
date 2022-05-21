import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Filter extends Component {
  buttons = [
    {name: 'all', label: 'all'},
    {name: 'active', label: 'active'},
    {name: 'done', label: 'done'},
  ];
  render() {
    const {filter, onFilterChange} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      return (
        <TouchableOpacity
          style={styles.button}
          key={name}
          onPress={() => onFilterChange(name)}>
          <Text>{label}</Text>
        </TouchableOpacity>
      );
    });
    return <View style={styles.container}>{buttons}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    margin: 2,
    height: 30,
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
    fontSize: 10,
    opacity: 0.7,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  center: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});
