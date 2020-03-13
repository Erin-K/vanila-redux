import {createStore} from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
  return {
    type: ADD,
    text
  }
};

const deleteToDO = (text) => {
  return {
    type: DELETE,
    text
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [{text: action.text, id: action.id}, ...state]
    case DELETE:
      return state.filter((itme) => itme.id != action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;