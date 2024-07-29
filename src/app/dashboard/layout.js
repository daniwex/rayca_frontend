import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata = {
  title: "Dashboard Home",
  description: "Home",
};
export default function layout({children}) {
  return (
    <div className='flex bg-[#1F1F21]'>
      <Navbar />
      {children}
    </div>
  )
}
