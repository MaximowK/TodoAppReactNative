import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

export default class AddItemWindow extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }
  onChange = text => {
    this.setState({label: text});
  };
  onSubmit = () => {
    this.props.onAdd(this.state.label);
    this.props.onClose(this.props.isActive);
  };
  onCloseHandler = () => {
    this.props.onClose();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.onCloseHandler}>
          <Image source={require('../assets/icons/close.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>Add new task</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
          onSubmitEditing={this.onSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  input: {backgroundColor: '#d9d9d9', borderRadius: 10, borderWidth: 0.4},
  text: {fontSize: 20, alignSelf: 'center'},
  closeButton: {alignItems: 'flex-end'},
});
