import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import MockupAnimation from "../Animations/MockupAnimation"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import { WaveBackground } from "../backgrounds/WaveBackground"
import { keyframes } from "styled-components"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br />
            and code <span>React</span> apps
          </Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
          <PurchaseButton />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  overflow: hidden;
`

const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  /* animation: ${animation} 1s forwards; */

  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }
    /* :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    } */
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Description = styled(MediumText)``
