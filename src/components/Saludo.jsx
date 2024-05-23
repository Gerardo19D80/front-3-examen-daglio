import React from 'react'

const Saludo = ({cliente}) => {

    const{nombre, apellido, email} = cliente;

  return (
    <>
    <h4>Muchas gracias, {nombre} {apellido}!</h4>
    <h5>te enviamos el libro digital con el pin de acceso a: {email} </h5>
    </>
  )
}

export default Saludo