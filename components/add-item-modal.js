import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import AddItemWindow from './add-item-window';

const ModWind = ({isActive, onClose, onAdd}) => {
  return (
    <Modal transparent visible={isActive}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <AddItemWindow onClose={onClose} isActive={isActive} onAdd={onAdd} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 20,
    borderWidth: 0.8,
  },
});

export default ModWind;
