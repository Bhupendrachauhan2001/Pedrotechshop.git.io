import React, { useContext } from 'react'
import './ProductStyle.css'
import {ShopContext} from '../../Context/shop-contex'

export const Product = (props) => {
    let {id,productName, price, productImage} = props.data;
   
    const { addToCart, cartItems } = useContext(ShopContext);
    let cartItemAmount = cartItems[id]
  return (
    
        <div className="col-xl-3 col-sm-12">
          <div className="product-containor">
            <div className="productImg">
                <img src={productImage} alt="" />
            </div>
            <div className='productDetail d-flex flex-column mt-2'>
                <div className="productName ">{productName}</div>
                <div className="productPrice">Price ${price}</div>
            </div>
            <buttton type="button"  className="addToCart btn btn-danger w-50 m-auto" onClick={() => addToCart(id)}>
              Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
            </buttton>
          </div>
        </div>
        
  )
}
