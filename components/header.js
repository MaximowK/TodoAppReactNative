import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Filter from './filter';
import SearchPanel from './search-panel';
export default class AppHeader extends Component {
  constructor() {
    super();
  }
  handlerOnSearchChange = () => {
    this.props.openSearchView();
  };

  render() {
    let elem = null;
    if (this.props.searchActive) {
      elem = <SearchPanel onSearch={this.props.onSearchChange} />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.textTop}>
          {this.props.todo} more to do, {this.props.done} done
        </Text>
        <View style={styles.rowItems}>
          <Text style={styles.title}>TodoApp</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handlerOnSearchChange}>
            <Image
              source={require('../assets/icons/loupe.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        {elem}
        <Filter
          filter={this.props.filter}
          onFilterChange={this.props.onFilterChange}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
  },
  textTop: {
    alignSelf: 'flex-end',
    fontSize: 15,
  },
  rowItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 50,
    margin: 10,
  },
  button: {
    alignSelf: 'flex-end',
    margin: 5,
  },
  image: {
    width: 32,
    height: 32,
  },
});
