import React from 'react'
import BentoGrid from '../BentoGrid'

const UserDestination = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-8 pt-16">
        <h2 className="text-3xl font-bold">Destination populaire</h2>
        <p className=' text-xl mb-8'>
           Option les plus populaires parmi les voyageurs habitant en France
        </p>
        <BentoGrid/>
    </div>
  )
}

export default UserDestination