import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import MenuWindow from './menu-window';

const ModalMenu = ({isActive, onClose, onDelete, onImportant, onDone}) => {
  return (
    <Modal visible={isActive} transparent>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <MenuWindow
            onClose={onClose}
            onDelete={onDelete}
            onImportant={onImportant}
            onDone={onDone}
            isActive={isActive}
          />
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

export default ModalMenu;
