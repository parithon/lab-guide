import React from "react"
import { Helmet } from "react-helmet"

import "../styles/global.css"

export default () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <body className="bg-gray-100 leading-normal tracking-normal" />
      </Helmet>
      <div>Hello world!</div>
    </>
  )
}
