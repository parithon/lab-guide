import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const footerQuery: any = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          github
        }
      }
    }
  `)
  return (
    <footer className="bg-info mt-5 p-5 text-light text-center">      
      <svg viewBox="0 0 512 512" height="128" width="128">
        <path fill="currentColor" d="m 296,384.01 h -80 a 8.009,8.0085 0 0 0 -8,7.9995 v 23.999 h 96 v -23.999 a 8.009,8.0085 0 0 0 -8,-7.9995 z" />
        <path fill="currentColor" d="m 247.57,464 a 76.517,76.513 0 0 1 -3.48,15.999 h 23.818 A 76.517,76.513 0 0 1 264.428,464 Z" />
        <path fill="currentColor" d="m 208,440 a 8.009,8.0085 0 0 0 8,7.9995 h 80 A 8.009,8.0085 0 0 0 304,440 v -7.9995 h -96 z" />
        <path fill="currentColor" d="M 120,384.01 H 40 a 8.009,8.0085 0 0 0 -8,7.9995 v 23.999 h 96 v -23.999 a 8.009,8.0085 0 0 0 -8,-7.9995 z" />
        <path fill="currentColor" d="m 71.571,464 a 76.517,76.513 0 0 1 -3.48,15.999 H 91.909 A 76.517,76.513 0 0 1 88.429,464 Z" />
        <path fill="currentColor" d="m 32,440 a 8.009,8.0085 0 0 0 8,7.9995 h 80 A 8.009,8.0085 0 0 0 128,440 v -7.9995 H 32 Z" />
        <path fill="currentColor" d="m 423.57,464 a 76.517,76.513 0 0 1 -3.48,15.999 h 23.818 A 76.517,76.513 0 0 1 440.428,464 Z" />
        <path fill="currentColor" d="m 384,440 a 8.009,8.0085 0 0 0 8,7.9995 h 80 A 8.009,8.0085 0 0 0 480,440 v -7.9995 h -96 z" />
        <path fill="currentColor" d="m 472,384.01 h -80 a 8.009,8.0085 0 0 0 -8,7.9995 v 23.999 h 96 v -23.999 a 8.009,8.0085 0 0 0 -8,-7.9995 z" />
        <path fill="currentColor" d="m 152,208.02 h 80 a 8.009,8.0085 0 0 0 8,-7.9995 v -7.9995 h -96 v 7.9995 a 8.009,8.0085 0 0 0 8,7.9995 z" />
        <path fill="currentColor" d="m 240,152.02 a 8.009,8.0085 0 0 0 -8,-7.9995 h -80 a 8.009,8.0085 0 0 0 -8,7.9995 v 23.999 h 96 z" />
        <path fill="currentColor" d="M 368,112.02 H 312 V 88.021 h -16 v 23.999 h -8 v 31.998 h 80 z m -16,23.999 H 336 V 120.02 h 16 z" />
        <path fill="currentColor" d="m 384,104.02 v 23.999 h 68 a 28.0005,27.9985 0 1 0 0,-55.997 h -4 a 8,7.9995 0 0 1 -8,-7.9995 32,31.998 0 0 0 -62.514,-9.6634 8,7.9995 0 0 1 -5.3,5.2367 13.017,13.016 0 0 0 -8.387,7.9995 8,7.9995 0 0 1 -5.815,5.0857 28.145,28.143 0 0 0 -21.669,23.34 H 376 a 8,7.9995 0 0 1 8,7.9995 z m 48,-7.9995 h 32 v 15.999 h -32 z m -32,0 h 16 v 15.999 h -16 z" />
        <path fill="currentColor" d="m 368,160.02 h -80 v 31.998 h 80 z m -16,23.999 H 336 V 168.02 h 16 z" />
        <rect fill="currentColor" height="15.999" width="16" y="320.01001" x="248" />
        <rect fill="currentColor" height="31.997999" width="16" y="272.01001" x="248" />
        <path fill="currentColor" d="m 80,272.01 a 24.006,24.005 0 0 0 22.629,-15.999 h 306.74 a 24,23.999 0 1 0 0,-15.999 h -41.371 v -31.998 h -80 v 31.998 h -84.091 a 76.517,76.513 0 0 1 -3.48,-15.999 h -16.858 a 76.517,76.513 0 0 1 -3.48,15.999 H 102.627 A 24,23.999 0 1 0 79.998,272.01 Z m 256,-55.997 h 16 v 15.999 h -16 z" />
        <path fill="currentColor" d="M 78.525,336.15 A 8,7.9995 0 0 0 72,344.0126 v 23.999 h 16 v -17.359 l 121.48,-22.776 a 8,7.9995 0 0 0 6.525,-7.8626 v -47.997 h -16 v 41.358 z" />
        <path fill="currentColor" d="m 440,368.01 v -23.999 a 8,7.9995 0 0 0 -6.525,-7.8626 l -121.48,-22.776 v -41.358 h -16 v 47.997 a 8,7.9995 0 0 0 6.525,7.8626 L 424,350.65 v 17.359 z" />
        <rect fill="currentColor" height="15.999" width="16" y="352.01001" x="248" />
      </svg>
      <div className="display-4">Lab Guide</div>
      <div className="lead">Some motto should go here</div>
      <div className="mt-5">
        <a className="text-dark" href={footerQuery.site.siteMetadata.github} target="_blank" style={{fontSize: "1.85rem"}}>
          <FontAwesomeIcon icon={fab.faGithub} />
        </a>
      </div>
    </footer>
  )
}