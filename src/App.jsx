import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/ToDoList'
import DependencyDemo from './components/DependencyDemo'
import Calculator from './components/Calculator'
function App() {

  function showModalHandler(event) {

  }

  function hideModalHandler(event) {

  }

 return <main>
  <TodoList />
  <DependencyDemo />
  <Calculator />
 </main>
}

export default App
