import {useState} from 'react';
import './App.css';
import Card from './components/Card'
import Form from './components/Form'
import {libros} from './utils/libros.js'


function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
    
    <h1>Seleccion de libros premium</h1>
    {libros.map((item) => (
     <Card item={item} key={item.id} setShowForm={setShowForm}/>
    ))}
   
    {showForm ? <Form/> : null}
    
    </>
 
  )
}

export default App
