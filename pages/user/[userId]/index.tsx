import { useRouter } from 'next/router'
import React from 'react'

const UserProfile = () => {
    const {query: {userId}} = useRouter();

  return (
    <div>El nombre del usuario es: {userId}</div>
  )
}

export default UserProfile