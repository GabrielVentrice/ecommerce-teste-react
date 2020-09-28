import React, { ReactNode } from 'react'

import Logo from '../../assets/logo-black.svg'
import SearchIcon from '../../assets/icons/search.svg'
import UserIcon from '../../assets/icons/user.svg'
import CartIcon from '../../assets/icons/cart.svg'
import BurguerIcon from '../../assets/icons/burguer.svg'

import {
  Container,
  Image,
  InputContainer,
  AccountContainer,
  CartContainer,
  Flex
} from './styles'

interface ISearchInput {
  className?: string
  children?: ReactNode
}

const Cart: React.FC = () => {
  return (
    <CartContainer>
      <img src={CartIcon} alt="Icone de carrinho"></img>
    </CartContainer>
  )
}

const SearchInput: React.FC<ISearchInput> = ({
  className,
  children
}: ISearchInput) => {
  return (
    <InputContainer className={className}>
      <input placeholder="O que você está procurando?"></input>
      <img src={SearchIcon} alt="Icone de procurar"></img>
    </InputContainer>
  )
}

const TopMenu: React.FC = () => {
  return (
    <Container>
      <Flex>
        <img src={BurguerIcon} className="menu-icon" alt="Icone de menu"></img>

        <Image src={Logo}></Image>

        <SearchInput className="laptop"></SearchInput>

        <AccountContainer>
          <img src={UserIcon} alt="Icone de usuario" />

          <p>Minha conta</p>
        </AccountContainer>

        <Cart></Cart>
      </Flex>

      <SearchInput className="mobile"></SearchInput>
    </Container>
  )
}

export default TopMenu
