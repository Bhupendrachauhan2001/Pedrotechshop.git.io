import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products'

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    for(let i=1; i< PRODUCTS.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);
    // const [CartPrice, setCartPrice] = useState(null);

    const getTotalCartAmount = () =>{
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id ===Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) =>{
        console.log('CLICKED')
        if(cartItems[itemId]<10){
            setCartItems((prev) =>({...prev, [itemId]: prev[itemId] + 1}))
            
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId] = 0}))

    }
    const updateCartItemCount = (newAmount,itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]: newAmount}))

    }
    const increaseQquantity = (itemId) =>{

        // setCartItems((prev) =>({...prev, [itemId]: prev[itemId] > 10}))
        if(cartItems[itemId]<10){
             setCartItems((prev) =>({...prev, [itemId]: prev[itemId] + 1}))
        }

    }
    const decreaseQquantity = (itemId) =>{
        if(cartItems[itemId]>1){
            setCartItems((prev) =>({...prev, [itemId]: prev[itemId] - 1}))
       }
    }

    // console.log(PRODUCTS[itemId]+"------")
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart, 
        increaseQquantity, 
        decreaseQquantity,
        updateCartItemCount,
        getTotalCartAmount
    }

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
