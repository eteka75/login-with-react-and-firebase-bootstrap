import React from 'react'
import cat from "../../../assets/img/cat-icegif-16.gif";

export default function Dashboard() {
  return (
    <div className='container p-5 text-center'> 
        <h1 className='display-5 text-light mb-4'> Welcome to your Sweet Private Home</h1>
        <img className='img-fluid' alt='Cat' src={cat} />
    </div>
  )
}
