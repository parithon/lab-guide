import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Jumbotron,
  Container,
  CardColumns,
  Card
} from "react-bootstrap"

import { Layout } from "../components"

import "../styles/global.scss"
import styles from "./index.module.scss"

export default () => {
  const [ fluid, setFluid ] = useState(true)
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
    <Layout fluid={fluid} setFluid={setFluid}>
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
    </Layout>
  )
}
