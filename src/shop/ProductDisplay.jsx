import React from 'react'

const ProductDisplay = ({item}) => {
    console.log(item);
    const {name, id, price, ratingsCount} = item
  return (
    <div>ProductDisplay:{name}</div>
  )
}

export default ProductDisplay