import React from "react"
import { graphql, Link } from "gatsby"
import { Jumbotron } from "react-bootstrap"
import Moment from "react-moment"
import "moment-timezone"

import Layout from "../components/layout"
import styles from "./module.module.scss"

interface HeaderProps {
  id: string
  title: string
  synopsis: string
  published: string
  author?: string
  timeToRead?: number
  className?: string
}

const fromNowDuring = 5 * 24 * 60 * 60 * 100 // 5-days
const Header = ({id, title, synopsis, published, author, timeToRead, className}: HeaderProps) => (
  <Jumbotron id={id} className={className}>    
    <div className={styles.timeToRead}>{`${timeToRead} ${timeToRead === 1 ? "minute" : "minutes"} read`}</div>
    <h1 className="display-4">{title}</h1>
    <p className="lead">{synopsis}</p>
    <h4 className="my-4" />
    <p className="text-muted">
      Published <Moment date={published} fromNowDuring={fromNowDuring} format="MMMM DD, YYYY" /> by <span className="text-info">{author}</span>
    </p>
  </Jumbotron>
);

export const query = graphql`
  query markdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        synopsis
        date
        author
        series
      }
      series {
        name,
        slug,
        order,
        title
      }
      timeToRead
      tableOfContents(maxDepth: 2, absolute: false)
      html
    }
  }
`

interface ModuleProps {
  data: any
}

interface Series {
  name: string
  order: number
  slug: string
  title: string
}

export default ({data}: ModuleProps) => {
  return (
    <Layout>
      <div className="row">
        <div id={styles.moduleList} className={`order-1 order-sm-0 col-sm-3 col-lg-2 ${styles.mtoc} bg-sm-dark py-3 py-sm-0`}>
          <span className="font-weight-light text-uppercase">Module: {data.markdownRemark.frontmatter.series}</span>
          <ul className="nav flex-column">
            {
              data.markdownRemark.series.map(({title, slug}: Series) => (
                <li className={`nav-item`}>
                  <Link to={`/modules/${slug}`} className={`nav-link  ${styles.navLink}`} activeClassName="active">{title}</Link>
                </li>
              ))
            }
          </ul>
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
              <div className={styles.toc} dangerouslySetInnerHTML={{__html: data.markdownRemark.tableOfContents}} />
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