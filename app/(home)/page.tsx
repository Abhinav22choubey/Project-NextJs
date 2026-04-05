import React from 'react'
import { onBoardUser } from '@/modules/auth/action'

const HomePage =async () => {
  // it can be optimised later as for now it unneccessary calls db
  await onBoardUser();
  return (
    <div>
      Home page
    </div>
  )
}

export default HomePage
