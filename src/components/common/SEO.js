import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({title, description}) => {
  return (
    <Helmet title={title}></Helmet>
  )
}

export default SEO