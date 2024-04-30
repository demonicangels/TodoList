import { useState } from 'react'
import './App.css'
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom'
import Nav from './pages/NavBar.jsx'
import Home from './pages/HomePage.jsx'
import Todo from './pages/ToDoList.jsx'
import { TodoProvider } from './TodoProvider.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <>
      <Router>
          <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/todo" element={
                    <TodoProvider>
                        <Todo />
                    </TodoProvider>
                } />
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
    
  )
}

export default App
