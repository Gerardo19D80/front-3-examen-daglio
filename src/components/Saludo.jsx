import React from 'react'

const Saludo = ({alumno}) => {
    const{nombre, email} = alumno;

  return (
    <>
    <h4>Muchas gracias por inscribirte, {nombre}!</h4>
    <h5>te enviamos los datos de inscripcion a: {email} </h5>
    </>
  )
}

export default Saludo