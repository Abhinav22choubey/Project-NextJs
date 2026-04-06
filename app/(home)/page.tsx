import React from 'react'
import { onBoardUser } from '@/modules/auth/action'
import LandingPage from '@/modules/home/components/Hero';

const HomePage =async () => {
  // it can be optimised later as for now it unneccessary calls db
  await onBoardUser();
  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default HomePage
