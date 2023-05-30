import React from 'react'
import { useProductsContext } from '../context/ProductsContext'
import { MDBBtn } from 'mdb-react-ui-kit'


const ButtonAddProduct = () => {
    const {cart,setCart}= useProductsContext()

    function addToCart() {
        setCart(cart + 1)
      }

  return (
    <MDBBtn
    outline
    color="primary"
    size="sm"
    className="mt-2"
    onClick={addToCart}

  >
    Agregar al carrito
  </MDBBtn>
)
}

export default ButtonAddProduct