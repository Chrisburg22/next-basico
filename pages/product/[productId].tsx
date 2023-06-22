import { useRouter } from 'next/router'
import React from 'react'

const ProductItem = () => {
  // const router = useRouter();
  const {query: {productId}} = useRouter();
  return (
    //Cuando utilizamos el hook de router nos permite utilizar router.query.id ya que el nombre del archivo es [id].tsx
    //Por lo cual si ahora llamamos al archivo [productId].tsx la llamada a la query seria router.query.productID
    // <div>Este es el producto con el ID: {router.query.productId}</div>
    <div>Este es el producto con el ID: {productId}</div>
  )
}

export default ProductItem