import React from "react"
import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"

import Layout from "../components/layout"
import styles from "./index.module.scss"

export default () => {
  return (
    <Layout>
      <div className="row">
        <div className={`order-0 col-sm-3 ${styles.mtoc}`}>
          <Navbar expand="sm">
            <Navbar.Toggle aria-controls="module-nav" />
            <Navbar.Collapse id="module-nav">
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Last</Link></li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="order-1 col-sm-9">
          <div className="row">
            <div className={`order-0 order-lg-1 col-lg-3 ${styles.stock}`}>
              <span className="font-weight-light text-muted text-uppercase">On this Page</span>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
              </ul>
            </div>
            <div className="order-1 order-lg-0 col-lg-9">
              <h1 className="display-4">Hello, World</h1>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
              <p>This is some text.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}