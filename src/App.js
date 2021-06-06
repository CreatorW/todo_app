import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl,Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

// Wenn Upload app loads, wir brauchen die DB um datan zu ziehen um sie zu adden oder entfernen

useEffect(() => {
  // der Code hier ... startet wenn App.js ladet
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    // console.log(snapshot.docs.map(doc => doc.data().todo));
    setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
  })
}, []);

  const addTodo = (event) => {
      // Klick Button Ereignis
    event.preventDefault(); // Stop the refresh
    
    db.collection('todos').add({
      todo: input ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput(''); // Leert das Input Feld    
  }
  
  return(
    <div className="App">
      <h1>🚀 Hello World! 🚀</h1>

      <form>
  
        <FormControl>
          <InputLabel >☑️ Schreibe eine Todo ✌️</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>          
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>
      
      </form>
     

      <ul>
        {todos.map(todo =>(
          <Todo todo={todo}/>
          
        ))}  
      </ul>

    </div>
  );
}

export default App;
