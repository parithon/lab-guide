import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  ListGroup
} from "react-bootstrap"

import { Layout } from "../components"

import "../styles/global.scss"
import styles from "./index.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteDescription
        }
      }
      allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}, limit: 6) {
        nodes {
          frontmatter {
            title
            synopsis
            series {
              name
              order
            }
          }
          fields {
            slug
          }
        }
      }
    }  
  `)
  console.dir()
  return (
    <Layout fluid={false}>
      <Jumbotron fluid={true} className={styles.jumbotron}>
        <Container fluid={false}>
          <h1 className="display-4">{data.site.siteMetadata.title}</h1>
          <div className="lead">{data.site.siteMetadata.siteDescription}</div>
        </Container>
      </Jumbotron>
      <Container fluid={false}>
        <h2>Modules</h2>
        <CardColumns>
          {
            data.allMarkdownRemark.nodes.filter(node => node.frontmatter.series && node.frontmatter.series.order === 0)
              .map((node, idx) => (
                <Card key={idx}>
                  {
                    node.frontmatter.image &&
                    <Card.Img variant="top" src={node.frontmatter.image} />
                  } 
                  <Card.Body>
                    <Card.Title>{node.frontmatter.title}</Card.Title>
                    {
                      node.frontmatter.synopsis &&
                      <Card.Text>{node.frontmatter.synopsis}</Card.Text>
                    }            
                  </Card.Body>
                  <ListGroup variant="flush">
                    {
                      data.allMarkdownRemark.nodes.filter(n => n.frontmatter.series && n.frontmatter.series.name === node.frontmatter.series.name && n.frontmatter.series.order > 0)
                        .sort((a, b) => a.frontmatter.series.order - b.frontmatter.series.order)
                        .map((n, i) => (
                          <ListGroup.Item>
                            <Link key={i} to={n.fields.slug}>{n.frontmatter.title}</Link>
                          </ListGroup.Item>
                        ))
                    }
                  </ListGroup>
                </Card>
              ))
            // TODO: Add cards for modules
          }
        </CardColumns>
      </Container>
    </Layout>
  )
}
