import React, { ReactNode } from 'react'
import { IProduct, IInstallments } from '../../types'

import StarFull from '../../assets/icons/star-full.svg'
import StarEmpty from '../../assets/icons/star-empty.svg'
import FlagDiscount from '../../assets/img/flag-discount-image.png'

import { formatReais } from '../../utils/format'

import { useCart } from '../../hooks/cart-context'

import { Container, Image, StarContainer, FlagImage, Button } from './styles'

interface IProductBox {
  product: IProduct
  children?: ReactNode
}

interface IRatingStar {
  children?: ReactNode
  rating: number
}

const RatingStar: React.FC<IRatingStar> = ({ rating }) => {
  let stars = []

  for (let i = 0; i < 5; i++) {
    if (i < rating) stars.push(<img src={StarFull} alt="Estrela cheia" />)
    else stars.push(<img src={StarEmpty} alt="Estrela vazia" />)
  }

  return <StarContainer>{stars}</StarContainer>
}

const ProductBox: React.FC<IProductBox> = ({ product }: IProductBox) => {
  const { addToCart } = useCart()

  function listPriceText(price: number) {
    return `de ${formatReais(price)}`
  }

  function priceText(price: number) {
    return `por ${formatReais(price)}`
  }

  function InstallmentText({ quantity, value }: IInstallments) {
    return `ou em ${quantity}x de ${formatReais(value)}`
  }

  function addProduct(id: number) {
    addToCart(id)
  }

  return (
    <Container onClick={() => addProduct(product.productId)}>
      {product.listPrice && (
        <FlagImage src={FlagDiscount} alt="Promoção"></FlagImage>
      )}

      <Image src={product.imageUrl} alt="Imagem do produto"></Image>

      <p className="name">{product.productName}</p>

      <RatingStar rating={product.stars}></RatingStar>

      <p className="listPrice">
        {product.listPrice ? (
          listPriceText(product.listPrice)
        ) : (
          <span>&nbsp;&nbsp;</span>
        )}
      </p>

      <p className="price">{priceText(product.price)}</p>

      <p className="installments">
        {!!product.installments.length &&
          InstallmentText(product.installments[0])}
      </p>

      <Button>Comprar</Button>
    </Container>
  )
}

export default ProductBox
