import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'

function Home({toDos, addToDo}) {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText('');
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {JSON.stringify(toDos)}
      </ul>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  console.log(state,ownProps);
  return { toDos: state }
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home);
// export default connect(mapStateToProps)(Home);
//connect는 Home(Component)로 보내는 prop에 추가될 수록 허용한다.