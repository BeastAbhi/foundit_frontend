import React from 'react'
import { useContext } from 'react'
import postContext from '../context/posts/postContext'

function About() {
  const a = useContext(postContext)
  return (
    <div>this is about {a.name}</div>
  )
}

export default About