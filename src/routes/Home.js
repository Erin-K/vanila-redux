import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home(toDos) {
  console.log(toDos)
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText('');
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

export default connect(mapStateToProps)(Home);
//connect는 Home(Component)로 보내는 prop에 추가될 수록 허용한다.