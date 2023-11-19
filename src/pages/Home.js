import React, { useContext } from 'react'
 import { UserContext } from '../context/UserContext'

export default function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className='container'>
        <h1 className='display-3 text-center mt-4 text-light'>            
          {currentUser ? "Welcome buddy !": "Hi Sign Up or Sign In"}
        </h1>
    </div>
  )
}
