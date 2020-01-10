import React from "react"
import { Helmet } from "react-helmet"

import "../styles/global.css"

export default () => {
  return (
    <>
      <Helmet>
        <html en="lang" />
        <body className="bg-gray-100 font-sans leading-normal tracking-normal" />
      </Helmet>
      <div>Hello world!</div>
    </>
  )
}
