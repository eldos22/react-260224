import React from 'react'

export default function Product({product, buyProduct}) {
  return (
    <div className='product'>
      <div>
        <p>Product</p>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.brand}</p>
        <p><button onClick={()=>buyProduct(product)}>Add to cart</button></p>
        <img src={product.thumbnail} width={200}></img>
        </div>
    </div>
  )
}
