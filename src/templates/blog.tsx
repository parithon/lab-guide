import React from "react"
import { graphql } from "gatsby"
import Moment from "react-moment"
import "moment-timezone"

import Layout from "../components/layout"

interface GraphQlData {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: Date;
      },
      html: any;
    }
  }
}

export default ({ data }: GraphQlData) => (
  <Layout>
    <h1 className="display-3">{data.markdownRemark.frontmatter.title}</h1>
    <div>
      Posted: <span className="">
        <Moment date={data.markdownRemark.frontmatter.date} fromNow ago /> ago
      </span>
    </div>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
  </Layout>
)

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`