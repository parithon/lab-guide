import React from "react"
import {
  useStaticQuery,
  graphql,
  Link
} from "gatsby"
import {
  Container,
  Navbar,
  Nav
} from "react-bootstrap"

import { Helmet } from "./helmet"
import "../../styles/global.scss"
import styles from "./layout.module.scss"

export const Layout = ({ fluid = true, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }`
  )
  return (
    <>
      <Helmet />
      <header className={styles.header}>
        <Navbar bg="light" variant="light" expand="sm">
          <Container>
            <Navbar.Brand>
              <img src="/img/logo-96.png" height="30" width="30" className="d-inline-block align-top mr-2" alt="logo" />
              {data.site.siteMetadata.title}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav activeKey="/" className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
              </Nav>
              <Nav />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        {
          fluid
          ?
          <Container>
            {children}
          </Container>
          :
          children
        }
        
      </main>
      <footer></footer>
    </>
  )
}