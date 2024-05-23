import React from 'react'

const Card = ({ item, setShowForm }) => {
  console.log(item)
  return (
    <div className="cards"> 
    <img src={item.img} alt={item.autor} />
    <h4>{item.autor}</h4>
    <h4>{item.libro}</h4>
    <button onClick={() => setShowForm(true)}>Comprar Libro</button>
    </div>
  )
}

export default Card