import React from 'react'
import { useRouteError, Link } from 'react-router-dom';


const NotFound = () => {
    const error= useRouteError()
    console.log(error)
  return (
    <>
    <h1>404</h1>
    <div>NotFound</div>
    <p>{error.statusText || error.message}</p>
    <Link to="/">Volver</Link>
    </>
  )
}

export default NotFound