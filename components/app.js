import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import AppHeader from './header';
import TodoList from './todo-list';
import AddButton from './add-button';
import AddItemModal from './add-item-modal';
import ModalMenu from './modal-menu';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        this.createItem('Drink Coffe'),
        this.createItem('Go on work'),
        this.createItem('Have a rest'),
        this.createItem('Have a litle bit beer'),
      ],
      addModalActive: false,
      menuModalActive: false,
      searchWord: '',
      filter: 'all',
    };
  }
  currentKey = '';
  maxId = 100;

  createItem = label => {
    return {
      label,
      important: false,
      done: false,
      key: (this.maxId++).toString(),
    };
  };
  returnKey = key => {
    return (this.currentKey = key);
  };

  deleteItem = () => {
    console.log(this.currentKey);
    this.setState(({todoData}) => {
      const newArray = todoData.filter(list => list.key !== this.currentKey);
      return {
        todoData: newArray,
      };
    });
    this.onCloseMenuModal();
  };
  addObj = text => {
    console.log('add');
    const newObj = this.createItem(text);
    this.setState(({todoData}) => {
      const newArr = [...todoData, newObj];
      return {
        todoData: newArr,
      };
    });
  };

  openMenuModal = () => {
    this.setState(({menuModalActive}) => {
      let newState = !menuModalActive;
      return {
        menuModalActive: newState,
      };
    });
  };
  onSearchChange = searchWord => {
    this.setState({searchWord});
  };
  search = (items, searchWord) => {
    let filtArr = [];
    if (items.lenght === 0) {
      filtArr = [...items];
    } else {
      filtArr = items.filter(
        item => item.label.toLowerCase().indexOf(searchWord.toLowerCase()) > -1,
      );
    }
    return filtArr;
  };

  openSearchView = () => {
    this.setState(({searchActive}) => {
      const newState = !searchActive;
      return {
        searchActive: newState,
      };
    });
  };

  openAddModal = () => {
    this.setState({addModalActive: true});
  };
  onCloseAddModal = () => {
    this.setState({addModalActive: false});
  };
  onCloseMenuModal = () => {
    this.setState({menuModalActive: false});
  };

  filtArray = (arr, filter) => {
    switch (filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter(el => !el.done);
      case 'done':
        return arr.filter(el => el.done);
      default:
        arr;
    }
  };
  onFilterChange = filter => {
    this.setState({filter});
  };
  onImportant = () => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, this.currentKey, 'important'),
      };
    });
    this.onCloseMenuModal();
  };
  onDone = () => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, this.currentKey, 'done'),
      };
    });
    this.onCloseMenuModal();
  };
  toggleProperty(arr, key, propName) {
    const indx = arr.findIndex(el => el.key === this.currentKey);
    const oldItem = arr[indx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)];
  }

  render() {
    const doneCount = this.state.todoData.filter(el => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    const filtArray = this.filtArray(
      this.search(this.state.todoData, this.state.searchWord),
      this.state.filter,
    );
    return (
      <SafeAreaView style={styles.container}>
        <AddItemModal
          isActive={this.state.addModalActive}
          onClose={this.onCloseAddModal}
          onAdd={this.addObj}
        />
        <ModalMenu
          isActive={this.state.menuModalActive}
          onClose={this.onCloseMenuModal}
          onDelete={this.deleteItem}
          onImportant={this.onImportant}
          onDone={this.onDone}
          todos={this.state.todoData}
        />
        <View style={styles.headerBox}>
          <ImageBackground source={require('../assets/icons/background.png')}>
            <AppHeader
              openSearchView={this.openSearchView}
              searchActive={this.state.searchActive}
              onSearchChange={this.onSearchChange}
              onFilterChange={this.onFilterChange}
              filter={this.state.filter}
              todo={todoCount}
              done={doneCount}
            />
          </ImageBackground>
        </View>
        <View style={styles.listBox}>
          <TodoList
            style={styles.listArea}
            todos={filtArray}
            onMenu={this.openMenuModal}
            returnKey={this.returnKey}
          />
        </View>
        <KeyboardAvoidingView behavior="position" style={styles.bottomBar}>
          <ImageBackground source={require('../assets/icons/background.png')}>
            <AddButton openModal={this.openAddModal} />
          </ImageBackground>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBox: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 12,
    zIndex: 3,
  },
  listBox: {
    height: 550,
    zIndex: 2,
  },
  bottomBar: {
    display: 'flex',
    alignContent: 'center',
    height: 75,
    width: '100%',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0.1,
    right: 0,
    zIndex: 1,
  },
});
