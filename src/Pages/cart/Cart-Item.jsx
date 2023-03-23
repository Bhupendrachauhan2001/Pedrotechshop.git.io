import React,{useContext} from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/shop-contex'


export const CartItem = (props) => {
    const {id,productName, price, productImage} = props.data;
    const { cartItems, removeFromCart, increaseQquantity, decreaseQquantity, updateCartItemCount } = useContext(ShopContext);

    // const[Price, setPrice] = useState(price);
    // setPrice(Price*cartItems[id]);




  return (
    <div className='cartItem row '>
        <div className='cartImage col-xl-6 col-lg-6 col-sm-12 text-center'>
            <img src={productImage} className="" alt="" />
        </div>
        <div className="description col-xl-6 col-lg-6 col-sm-12 mt-t d-flex flex-column justify-content-center align-items-center">
            <p><b>{productName}</b></p>
            <p><b>${price}</b></p>
            <div className="countHandler d-flex">
                <button className='px-2' onClick={() => decreaseQquantity(id)}>-</button>
                <input className="cartQuantity text-center" id="Quantity"  value={cartItems[id]}
                onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => increaseQquantity(id)}>+</button>
            </div>
            <button className='btn btn-danger w-75 mt-4' onClick={() => removeFromCart(id)}>Remove From Cart</button>
        </div>
    </div>
  )
}
