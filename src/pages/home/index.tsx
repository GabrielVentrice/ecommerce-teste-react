import React from 'react'
import { useForm } from 'react-hook-form'

import { INewsLetter } from '../../types/index'
import { IProduct } from '../../types'

import { getProducts } from '../../services/requests/products'
import { postNewsletter } from '../../services/requests/newsletter'

import EmailIcon from '../../assets/icons/email.svg'
import HeadphoneIcon from '../../assets/icons/headphone.svg'

import VtexLogo from '../../assets/img/vtex.png'
import CorebizLogo from '../../assets/img/logo-white.png'

import TopMenu from '../../components/top-menu'
import ProductBox from '../../components/product-box'

import {
  Container,
  HeroContainer,
  MostSoldContainer,
  ProductFlex,
  NewsLetterContainer,
  FooterContainer,
  InputContainer
} from './styles'

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
      })
      .catch(err => {
        console.log('Get_Product_Error: ', err)
      })
  }, [])

  return (
    <MostSoldContainer>
      <h6>Mais Vendidos</h6>

      <ProductFlex className="desktop">
        {productList.slice(0, 4).map(product => {
          return (
            <div key={product.productId}>
              <ProductBox product={product} />
            </div>
          )
        })}
      </ProductFlex>

      <ProductFlex className="mobile">
        {productList.slice(0, 2).map(product => {
          return (
            <div key={product.productId}>
              <ProductBox product={product} />
            </div>
          )
        })}
      </ProductFlex>
    </MostSoldContainer>
  )
}

const NewsLetter: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<INewsLetter>()

  const [isSent, setIsSent] = React.useState(false)

  const onSubmit = ({ name, email }: INewsLetter) => {
    postNewsletter(name, email)
      .then(res => {
        setIsSent(true)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <NewsLetterContainer>
      {isSent ? (
        <>
          <p className="sent-title">Seu e-mail foi cadastrado com sucesso!</p>

          <p className="sent-text">
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </p>

          <button className="button-large" onClick={() => setIsSent(false)}>
            Cadastrar novo e-mail
          </button>
        </>
      ) : (
        <>
          <p>Participe de nossas news com promoções e novidades!</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer error={errors.name}>
              <input
                name="name"
                ref={register({ required: true })}
                placeholder="Digite seu nome"
              />
              {errors.name && <span>Preencha com seu nome completo</span>}
            </InputContainer>

            <InputContainer error={errors.email}>
              <input
                name="email"
                type="email"
                ref={register({ required: true })}
                placeholder="Digite seu email"
              />

              {errors.email && <span>Preencha com um e-mail-válido</span>}
            </InputContainer>

            <button type="submit" className="button-medium">
              Eu quero!
            </button>
          </form>
        </>
      )}
    </NewsLetterContainer>
  )
}

const Footer = () => {
  return (
    <FooterContainer>
      <div className="flex-vertical">
        <h6>Localização</h6>

        <div className="body">
          <p>Avenida andrômeda, 2000, Bloco 6 e 8</p>

          <p>Alphavile SP</p>

          <p>brasil@corebiz.ag</p>

          <p>+55 11 3090 1039</p>
        </div>
      </div>

      <div className="flex-vertical center">
        <button>
          <div className="img">
            <img src={EmailIcon} alt="email" />
          </div>
          <div className="text">Entre em contato</div>
        </button>

        <button>
          <div className="img">
            <img src={HeadphoneIcon} alt="headphone" />
          </div>
          <div className="text">Fale com o nosso consultor online</div>
        </button>
      </div>

      <div className="flex-horizontal center">
        <div className="flex-vertical logo-margin">
          <p>Created by</p>
          <img src={CorebizLogo} width="76px" alt="Corebiz logo" />
        </div>

        <div className="flex-vertical">
          <p>Powered by</p>
          <img src={VtexLogo} width="52px" alt="Corebiz logo" />
        </div>
      </div>
    </FooterContainer>
  )
}

const Home: React.FC = () => {
  return (
    <Container>
      <TopMenu></TopMenu>

      <Hero></Hero>

      <MostSold></MostSold>

      <NewsLetter></NewsLetter>

      <Footer></Footer>
    </Container>
  )
}

export default Home
