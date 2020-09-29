import styled from 'styled-components'

import { device } from '../../styles/constants'

export const Container = styled.section`
  display: flex;
  background: #ffffff;
  padding-top: 16px;
  padding-bottom: 24px;
  align-items: center;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;

    .menu-icon {
      display: none;
    }
  }
`

export const Image = styled.img`
  height: 21px;

  @media ${device.laptop} {
    height: 41px;
  }
`

export const InputContainer = styled.div`
  &.laptop {
    display: none;
  }

  &.mobile {
    display: flex;
    width: 100%;
    margin-top: 16px;
  }

  @media ${device.laptop} {
    &.laptop {
      display: flex;
      width: 37vw;
    }

    &.mobile {
      display: none;
    }
  }

  border-bottom: 1px solid #7a7a7a;
  padding: 8px 0px;

  input {
    border: none;
    flex: 1;
    padding: 0px;
    border: none;
    margin: 0px;
  }

  img {
    height: 18px;
  }
`
export const AccountContainer = styled.div`
  @media ${device.laptop} {
    display: flex;
  }

  display: none;
  align-items: flex-end;
  cursor: pointer;

  p {
    margin-left: 8px;
    white-space: nowrap;
  }

  :hover {
    p {
      color: black !important;
    }
  }
`

interface CartContainerProps {
  quantity: number
}

export const CartContainer = styled.div<CartContainerProps>`
  display: flex;
  align-items: center;

  div {
    display: flex;
    margin-left: 4px;
    border-radius: 50px;
    background: ${props => (props.quantity === 0 ? 'transparent' : '#f8475f')};

    width: 14px;
    height: 14px;

    align-items: center;
    justify-content: center;

    p {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 14px;
      color: ${props => (props.quantity === 0 ? 'transparent' : '#fff')};
    }
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
