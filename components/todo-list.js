import React from 'react';
import {FlatList, View} from 'react-native';
import TodoListItem from './todo-list-item';

const TodoList = ({todos, onMenu, returnKey}) => {
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoListItem
            label={item.label}
            important={item.important}
            done={item.done}
            onMenu={onMenu}
            id={item.key}
            returnKey={returnKey}
          />
        )}
      />
    </View>
  );
};

export default TodoList;
