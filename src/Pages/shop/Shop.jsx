import React from 'react'
import {PRODUCTS} from '../../Products'
import {Product} from './Product'

export const Shop = () => {
  return (
    <div className="shop">
      <div className='shopTitle py-2 mt-2'>
        <h1 className='text-center'>PEDROTECH-SHOP</h1>
      </div>

      <div className="products row px-5">
        {PRODUCTS.map((product) => (
          <Product data={product}/>
        ))
        }   
      </div>
    </div>
  )
}
