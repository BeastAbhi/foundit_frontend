import React from 'react'
import Posts from './Posts'

function UserPosts() {

  return (
    <>
      <Posts userSpecific={true} givePower={true}/>
    </>
  )
}

export default UserPosts