import React, { ReactNode } from 'react'
import { IProduct } from '../../types'

import { Container, Image } from './styles'

interface IProductBox {
  product: IProduct
  children?: ReactNode
}

const ProductBox: React.FC<IProductBox> = ({ product }: IProductBox) => {
  return (
    <Container>
      <Image src={product.imageUrl}></Image>
      {product.productName}
    </Container>
  )
}

export default ProductBox
