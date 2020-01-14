import React from "react"
import { Helmet } from "react-helmet"

import "../styles/global.css"

export default () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <div>Hello world!</div>
    </>
  )
}
