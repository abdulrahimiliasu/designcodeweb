import React from "react"
import { tooltipData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import styled from "styled-components"

export default function MenuToolTip(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;

  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  z-index: 1;
  transition: 0.3s ease-in-out;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0) rotate(0) translateY(0)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
