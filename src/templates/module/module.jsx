import React from "react"
import { navigate } from "@reach/router"
import {
  graphql,
  Link
} from "gatsby"
import {
  Jumbotron,
  Nav,
  Button
} from "react-bootstrap"
import Moment from "react-moment"
import "moment-timezone"

import { Layout } from "../../components/layout"
import styles from "./module.module.scss"

const last5Days = 5 * 24 * 60 * 60 * 100 // 5-days
const Header = ({ id, title, synopsis, published, author, timeToRead, className }) => (
  <Jumbotron id={id} className={`${styles.jumbotron} ${className}`}>
    <div className={styles.timeToRead}>{`${timeToRead} ${timeToRead === 1 ? "minute" : "minutes"} read`}</div>
    <h1 className="display-4">{title}</h1>
    <p className="lead">{synopsis}</p>
    <hr className="my-4" />
    <p>
      Published <Moment date={published} fromNowDuring={last5Days} format="MMMM DD, YYYY" /> by <span className="text-info">{author}</span>
    </p>
  </Jumbotron>
)

export const query = graphql`
  query markdown($slug: String!, $series: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        synopsis
        date
        author
        series {
          name
          order
        }
      }
      headings {
        title
        slug
        depth
      }
      timeToRead
      html
    }
    allMarkdownRemark(filter: {frontmatter: {series: {name: {eq: $series}}}}) {
      nodes {
        frontmatter {
          title
          published
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
`

export default ({ data }) => {
  return (
    <Layout>
      <div className="row">
        <div id={styles.moduleList} className={`order-1 order-sm-0 col-sm-3 col-lg-2 ${styles.mtoc} bg-sm-dark py-3 py-sm-0`}>
          <span className="font-weight-light text-uppercase">
            Module: <Link to={
              data.allMarkdownRemark.nodes.filter(node => node.frontmatter.series.order === 0)[0].fields.slug
            }>{data.markdownRemark.frontmatter.series.name}</Link>
          </span>
          <Nav className="flex-column">
            {
              data.allMarkdownRemark.nodes
                .filter(node => node.frontmatter.series.order !== 0 && node.frontmatter.published)
                .sort((a, b) => a.frontmatter.series.order - b.frontmatter.series.order)
                .map((node, idx) => (
                  <Link className="font-weight-light" key={idx} to={node.fields.slug}>{node.frontmatter.title}</Link>
                ))
            }
          </Nav>
        </div>
        <div className="order-0 order-sm-1 col-sm-9 col-lg-10">
          <Header
            id={styles.header}
            title={data.markdownRemark.frontmatter.title}
            synopsis={data.markdownRemark.frontmatter.synopsis}
            published={data.markdownRemark.frontmatter.date}
            author={data.markdownRemark.frontmatter.author}
            timeToRead={data.markdownRemark.timeToRead}
            className="d-lg-none"
          />
          <div className="row">
            <div id="toc" className={`order-0 order-lg-1 col-lg-3 ${styles.stoc} bg-sm-dark mb-3 py-3 py-sm-0 mb-lg-0`}>
              <h4 className="d-sm-none font-weight-light text-uppercase">On this Page</h4>
              <span className="d-none d-sm-block font-weight-light text-uppercase">On this Page</span>
              <div className={styles.toc}>
                <Nav className="flex-column">
                  {
                    data.markdownRemark.headings &&
                    data.markdownRemark.headings.filter(heading => heading.depth <= 2)
                    .map((heading, idx) => (
                      <Button key={idx} variant="link" className={styles.linkButton} onClick={() => navigate(`#${heading.slug}`)}>{heading.title}</Button>
                    ))
                  }
                </Nav>
              </div>
            </div>
            <div className="order-1 order-lg-0 col-lg-9">
              <Header
                id={styles.header}
                title={data.markdownRemark.frontmatter.title}
                synopsis={data.markdownRemark.frontmatter.synopsis}
                published={data.markdownRemark.frontmatter.date}
                author={data.markdownRemark.frontmatter.author}
                timeToRead={data.markdownRemark.timeToRead}
                className="d-none d-lg-block"
              />
              <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}