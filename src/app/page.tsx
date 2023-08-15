'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Home Page',
}

export default function Home() {

  const [session, setSession] = useState(false)
  return (
    <div>
      {session ? User() : Guest()}
    </div>
  )
}


//Guest User
function Guest() {
  return (
    <main className="container mx-auto py-20 text-center">
      <h3 className='text-4xl font-bold'>Guest HomePage</h3>

      <div className='flext justify-center mt-5'>
        <Link
          href={'/login'}
          className='bg-gradient-to-r from-blue-500 to bg-indigo-500 py-2 px-3 text-gray-50 text-lg rounded-2xl'
        >
          Sign In
        </Link>
      </div>
    </main>
  )
}

//Authorized User
function User() {
  return (
    <main className="container mx-auto py-20 text-center">
      <h3 className='text-4xl font-bold'>Authorized User HomePage</h3>

      <div>
        <h5>Unknown</h5>
        <h5>Unknown</h5>
      </div>

      <div className='flex justify-center'>
        <button className='bg-gradient-to-r from-blue-500 to bg-indigo-500 py-2 px-3 text-gray-50 text-lg rounded-2xl'>Sign Out</button>
      </div>

      <div className='flext justify-center mt-5'>
        <Link
          href={'/Profile'}
          className='bg-gradient-to-r from-blue-500 to bg-indigo-500 py-2 px-3 text-gray-50 text-lg rounded-2xl'
        >
          Profile Page
        </Link>
      </div>
    </main>
  )
}