import { useRouter } from 'next/router'
import React from 'react'

const UserPost = () => {
    const {query: {postId,userId}} = useRouter();

  return (
    <div>Post id: {postId} from user id: {userId}</div>
  )
}

export default UserPost