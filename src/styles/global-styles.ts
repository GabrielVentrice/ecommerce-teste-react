import { createGlobalStyle } from 'styled-components'
import { device } from './constants'
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap');

  body{
    font-family: 'Nunito', sans-serif;

    
  }

  ::placeholder{
    font-family: 'Nunito', sans-serif;
    color: #7A7A7A;
    font-weight: 400;
    font-size: 13px;
  }

  p{
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #7A7A7A;
  }

  h1{
    font-size: 30px;
    font-weight: 900;

    @media ${device.laptop} {
      font-size: 45px;
  }
  }

  h3{
    font-size: 30px;
    font-weight: 700;

    @media ${device.laptop} {
      font-size: 30px;
    }
  }

  h6{
    font-size: 18px;
    font-weight: 900;
    position: relative;
    line-height: 27px;

    @media ${device.laptop} {
      font-size: 20px;
      line-height: 25px;
    }

    &:after{
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      height: 0;
      width: 35px;
      border-bottom: 4px solid #C0C0C0;

      @media ${device.laptop} {
        width: 65px;
      }
    }
  }
`
