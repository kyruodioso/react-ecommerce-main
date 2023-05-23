import React from 'react'
import { useProductsContext } from '../context/ProductsContext'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'


const ButtonAddProduct = () => {
    const {cart,setCart}= useProductsContext()

    function addToCart() {
        setCart(cart + 1)
      }

  return (
    <MDBBtn  className="me-1" color="info" floating size="lg" tag="a"
    onClick={addToCart}
     >
       <MDBIcon fas icon="cart-plus" size="lg" />
     </MDBBtn>  )
}

export default ButtonAddProduct