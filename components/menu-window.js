import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

const MenuWindow = ({onClose, onDelete, isActive, onImportant, onDone}) => {
  const onCloseHandler = () => {
    onClose(isActive);
  };
  const onDelteHandler = () => {
    onDelete();
  };
  const onDoneHandler = () => {
    onDone();
  };
  const onImportantHandler = () => {
    onImportant();
  };

  return (
    <View styles={styles.container}>
      <View style={styles.windowHeader}>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onCloseHandler}>
          <Image source={require('../assets/icons/close.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.textButtonsColumns}>
        <View style={styles.textButtonsRow}>
          <TouchableOpacity
            style={styles.importantButton}
            onPress={onImportantHandler}>
            <Text style={styles.text}>{'Important'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.importantButton}
            onPress={onDoneHandler}>
            <Text style={styles.text}>{'Done'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.importantButton}
          onPress={onDelteHandler}>
          <Text style={styles.text}>{'Delete'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  windowHeader: {
    paddingBottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  textButtonsRow: {flexDirection: 'row', justifyContent: 'center'},
  textButtonsColumns: {
    flexDirection: 'column',
  },
  importantButton: {
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    height: 60,
    width: 140,
    justifyContent: 'center',
    opacity: 0.8,
    backgroundColor: '#d9d9d9',
    alignSelf: 'center',
  },
  deleteButton: {},
  text: {
    fontSize: 20,
  },
});

export default MenuWindow;
