import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

import "../styles/global.scss"

export default ({ children }: any) => {
  const query = useStaticQuery(graphql`
    query data {
      site {
        siteMetadata {
          title,
          github
        }
      }
    }
  `);
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light" expand="sm">
          <Navbar.Brand>
            <img src="/img/logo-96.png" height="30" width="30" className="d-inline-block align-top mr-2" />
            {query.site.siteMetadata.title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey="/" className="mr-auto">
              <Link to="/" className="nav-link">Home</Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <main className="container-fluid">
        {children}
      </main>
    </>
  );
}