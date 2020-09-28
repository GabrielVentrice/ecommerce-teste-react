import React from 'react'

import { getProducts } from '../../services/requests/products'

import TopMenu from '../../components/top-menu'
import ProductBox from '../../components/product-box'

import { Container, HeroContainer, MostSoldContainer } from './styles'

import { IProduct } from '../../types'

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <div>
        <h3>Olá, o que você está buscando?</h3>
        <h1>
          Criar ou migrar seu <br />
          e-commerce?
        </h1>
      </div>
      <div className="flex"></div>
    </HeroContainer>
  )
}

const MostSold: React.FC = () => {
  const [productList, setProductList] = React.useState<IProduct[]>([])

  React.useEffect(() => {
    getProducts()
      .then(res => {
        const { data } = res

        setProductList(data)

        console.log(data)
      })
      .catch(err => {
        console.log('Get_Product_Error: ', err)
      })
  }, [])

  return (
    <MostSoldContainer>
      <h6>Mais Vendidos</h6>

      <div>
        {productList.map(product => {
          return (
            <div key={product.productId}>
              <ProductBox product={product} />
            </div>
          )
        })}
      </div>
    </MostSoldContainer>
  )
}

const Home: React.FC = () => {
  return (
    <Container>
      <TopMenu></TopMenu>
      <Hero></Hero>
      <MostSold></MostSold>
    </Container>
  )
}

export default Home
