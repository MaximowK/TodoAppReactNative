import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const AddButton = ({openModal}) => {
  const handlerAddItem = () => {
    openModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlerAddItem}>
        <View>
          <Text style={styles.text}>Add task</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    opacity: 1,
  },
  text: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    fontSize: 20,
    color: '#000',
    backgroundColor: '#d9d9d9',
  },
});

export default AddButton;
