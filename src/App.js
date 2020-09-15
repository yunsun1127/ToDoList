import React, { Component } from 'react';
import Template from './components/Template';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos : [
      { id: 0, text: '리액트 예제 해보기', checked: false },
      { id: 1, text: 'To Do List 만들기', checked: true },
      { id: 2, text: '리액트 공부', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾기
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

    render() {
      const { input, todos } = this.state;
      const {
        handleChange,
        handleCreate,
        handleKeyPress,
        handleToggle,
        handleRemove
      } = this;

      return (
          <Template form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            />
          )}>
            <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
          </Template>
      );
    } 
}

export default App;