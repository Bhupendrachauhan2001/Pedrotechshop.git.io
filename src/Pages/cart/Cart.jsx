import React , {useContext} from 'react'
import {ShopContext} from '../../Context/shop-contex'
import { PRODUCTS } from '../../Products';
import {CartItem} from './Cart-Item'
import './Cart.css'
import {useNavigate} from 'react-router-dom' ;


export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()
  return (
  <div>
    <div className='py-2'>
      <h1 className='text-center mb-2'>Cart Items</h1>
    </div>
    <div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>

      {
        totalAmount > 0 ? 
        <div className='checkout'>
        <p className='total'>SubTotal: ${totalAmount}</p>
        
        <div className='cartButton row d-flex justify-content-center align-items-center w-100 p-2'>
          <button className='col-xl-4 col-lg-4 col-sm-6 mx-2 p-2 border-1 rounded-3 text-white bg-dark font-weight-bold' onClick={() => navigate("/")}>Continue Shopping</button>
          <button className='col-xl-4 col-lg-4 col-sm-6 mx-2  p-2 border-1 rounded-3 text-white bg-dark font-weight-bold'>Chekcout</button>
        </div>
      </div>: <h1 className='text-center'>Cart is Empty</h1>
      }
     
    </div>
  </div> 
  )
}
