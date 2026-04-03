import React from 'react'

export default async function DynamimcUserPage({params}:{params:Promise<{username:string}>}) {
  const username=(await params).username;
  return (
    <div>
      Dynamic User page : {username}
    </div>
  )
}
