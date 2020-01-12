import React from "react"
import { Link } from "gatsby"
import { Jumbotron } from "react-bootstrap"

import Layout from "../components/layout"
import styles from "./index.module.scss"

export default () => {
  return (
    <Layout>
      <div className="row">
        <div id="module-list" className={`order-1 order-sm-0 col-sm-3 col-lg-2 ${styles.mtoc} bg-sm-dark py-3 py-sm-0`}>
          <h4 className="d-sm-none font-weight-light text-uppercase">Modules</h4>
          <ul className="list-unstyled">
            <li><Link to="/">First</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Middle</Link></li>
            <li><Link to="/">Last</Link></li>
          </ul>
        </div>
        <div className="order-0 order-sm-1 col-sm-9 col-lg-10">
          <Jumbotron className="d-lg-none">
            <h1 className="display-4">Hello, World</h1>
            <p className="lead">This is a sample page while designing the layout.</p>
            <hr className="my-4" />
            <p>Posted: January 11, 2020</p>
          </Jumbotron>
          <div className="row">
            <div id="toc" className={`order-0 order-lg-1 col-lg-2 ${styles.stoc} bg-sm-dark mb-3 py-3 py-sm-0 mb-lg-0`}>
              <h4 className="d-sm-none font-weight-light text-uppercase">On this Page</h4>
              <span className="d-none d-sm-block font-weight-light text-uppercase">On this Page</span>
              <ul className="nav flex-column">
                <li className="nav-item"><Link to="/">First</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Middle</Link></li>
                <li className="nav-item"><Link to="/">Last</Link></li>
              </ul>
            </div>
            <div className="order-1 order-lg-0 col-lg-10">
              <Jumbotron className="d-none d-lg-block">
                <h1 className="display-4">Hello, World</h1>
                <p className="lead">This is a sample page while designing the layout.</p>
                <hr className="my-4" />
                <p>Posted: January 11, 2020</p>
              </Jumbotron>
              <h2>Here we go</h2>
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