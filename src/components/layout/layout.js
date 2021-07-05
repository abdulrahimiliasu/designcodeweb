import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Header } from "../layout/Header"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
