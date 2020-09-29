import styled from 'styled-components'
import { device } from '../../styles/constants'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  padding-bottom: 16px;

  button {
    color: white;
    background: black;
  }

  .name {
    margin-top: 8px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    color: #7a7a7a;
    line-height: 16px;
  }

  .listPrice {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #7a7a7a;
    margin-top: 4px;
    text-decoration: line-through;
  }

  .price {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin-top: 4px;
    color: black;
  }

  .installments {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;
  }

  @media ${device.laptop} {
    .name {
      font-size: 12px;
    }

    .price {
      font-size: 16px;
    }

    button {
      color: transparent;
      background: transparent;
    }
  }

  &:hover {
    background: #e6e8ea;

    button {
      color: white;
      background: black;
    }
  }

  &:active {
    button {
      background: #f8475f;
    }
  }
`

export const Image = styled.img`
  max-width: 132px;

  @media ${device.laptop} {
    max-width: 216px;
  }
`

export const FlagImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`

export const StarContainer = styled.div`
  justify-content: center;
`

export const Button = styled.button`
  color: white;
  background: black;
  padding: 8px 24px;
  border: none;
  border-radius: 5px;
  margin-top: 8px;
  font-size: 12px;
  text-transform: uppercase;
`
