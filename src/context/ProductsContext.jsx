import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider=({children})=>{



    const [cart, setCart]= useState(0)

    return(
        <ProductsContext.Provider value={{cart,setCart}}>
              {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

export const useProductsContext = ()=> useContext(ProductsContext)
