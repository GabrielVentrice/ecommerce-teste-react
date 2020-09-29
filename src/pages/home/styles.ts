import styled from 'styled-components'
import { device } from '../../styles/constants'

import BackgroundHero from '../../assets/img/hero-bg.png'
import BackgroundHeroMobile from '../../assets/img/hero-bg-mobile.png'

export const Container = styled.div`
  & > section {
    padding-left: 20px;
    padding-right: 20px;

    @media ${device.laptop} {
      padding-left: 12vw;
      padding-right: 12vw;
    }

    @media ${device.laptopL} {
      padding-left: 17vw;
      padding-right: 17vw;
    }
  }
`
export const HeroContainer = styled.section`
  display: flex;
  background: black;
  flex-direction: column;

  padding-top: max(28px, 8vw);
  padding-bottom: max(28px, 8vw);

  background-image: url(${BackgroundHeroMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${device.laptop} {
    padding-top: 152px;
    padding-bottom: 128px;
    background-image: url(${BackgroundHero});
  }

  h1,
  h3 {
    color: white;
  }
`

export const MostSoldContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding-top: 24px;
  padding-bottom: 64px;
`

export const ProductFlex = styled.div`
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;

  &.desktop {
    display: none;
  }

  &.mobile {
    display: flex;
  }

  @media ${device.tablet} {
    &.desktop {
      display: flex;
    }

    &.mobile {
      display: none;
    }
  }
`

export const NewsLetterContainer = styled.section`
  display: flex;
  align-items: center;
  background: #f2f2f2;
  padding-top: 24px;
  padding-bottom: 32px;
  flex-direction: column;

  p {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: #333333;
  }

  .sent-title {
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: #000;
  }

  .sent-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #000;
    margin-bottom: 16px;
  }

  form {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    @media ${device.laptop} {
      flex-direction: row;
      justify-content: center;
    }
  }
`

export const FooterContainer = styled.section`
  background: black;
  display: flex;
  color: white;
  padding-top: 24px;
  padding-bottom: 24px;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    background: white;
    color: black;
    width: 195px;
    height: 38px;

    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    text-transform: uppercase;

    display: flex;

    align-items: center;

    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 48px;
    }

    .text {
      width: 150px;
    }
  }

  .flex-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.center {
      margin-top: 32px;
      align-items: center;
    }
  }

  .flex-horizontal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-margin {
      margin-right: 24px;
    }

    &.center {
      margin-top: 32px;
      justify-content: center;
    }
  }

  .body {
    margin-top: 32px;

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 24px;
      color: white;
    }
  }
`

interface InputContainerProps {
  error: any
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;

  input {
    border: ${props => (props.error ? '1px solid #d7182a' : 'none')};
  }

  span {
    top: 30px;

    color: #d7182a;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    margin-left: 4px;
  }
`
