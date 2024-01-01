import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const{id} = useParams()
  return (
    <div>
      User: {id}
      {/* <h1>heheheh</h1> */}
    </div>
  )
}

export default User
