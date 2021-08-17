import './App.css';
import React, {useState} from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  let onDelete = (todo) => {
    setTodoList(todoList.filter((e)=>{
      return todo!==e;
    }));
  
  }
  let addTodo = (title,desc)=>{
    const myTodo = {
      tid: todoList.length? todoList[todoList.length-1].tid + 1:1,
      title: title,
      desc: desc
    }
    setTodoList([...todoList,myTodo]);
    console.log(myTodo);
  }
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Header title='Todo List App' search={false} addTodo={addTodo}/>
      <Main todoList={todoList} onDelete={onDelete}/>
      <Footer crname='Monish Bairagi'/>
    </div>
  );
}

export default App;
