import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import {
  Jumbotron,
  Container,
  Navbar,
  Nav,
  CardColumns,
  Card
} from "react-bootstrap"

import { Switch } from "../components/switch";

import "../styles/global.scss"
import styles from "./index.module.scss"

export default () => {
  const [ fluid, setFluid ] = useState(true);
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteDescription
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <header>
        <Navbar sticky="top" bg="light" variant="light" expand="sm">
          <Container fluid={fluid}>
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
        <Switch className={styles.fluidSwitch} rounded={true} isChecked={fluid} onClick={() => setFluid(!fluid)} />
      </header>
      <main>
        <Jumbotron className={styles.jumbotron}>
          <Container fluid={fluid}>
            <h1 className="display-4">{data.site.siteMetadata.title}</h1>
            <div className="lead">{data.site.siteMetadata.siteDescription}</div>
          </Container>
        </Jumbotron>
        <Container fluid={fluid}>
          <h2>Modules</h2>
          <CardColumns>
            {
              [...Array(10).keys()].map((_, i) => (
                <Card>
                  <Card.Img variant="top" src="/img/logo.svg" height="96" />
                  <Card.Body>
                    <Card.Title>Title of Module {i+1}</Card.Title>
                    <Card.Subtitle>A subtitle for module</Card.Subtitle>
                    <Card.Text>
                      A synopsis of the module
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))              
            }
          </CardColumns>
        </Container>
      </main>
      <footer />
    </>
  )
}
