import React from 'react'
import Img from 'gatsby-image'

export default ({node, type}) => {
  if (typeof node !== 'object' || node === null || !node.asset) {
    return null
  }

  const typeProps = {
    [type]: node['asset'][type]
  }

  return (
    <Img {...typeProps} alt={node.alt} />
  )
}
