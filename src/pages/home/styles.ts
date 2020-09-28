import styled from 'styled-components'
import { device } from '../../styles/constants'

import BackgroundHero from '../../assets/img/hero-bg.png'
import BackgroundHeroMobile from '../../assets/img/hero-bg-mobile.png'

export const Container = styled.div`
  width: 100vw;

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
`
