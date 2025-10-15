
import React from 'react'

const Notifications = ({isOpen}) => {
  return (
    isOpen &&
    <div className="bg-white rounded space-y-4 p-4 shadow-lg max-w-96 absolute mt-1 top-16 right-48 z-10 animate-slideDown">
      <h1 className='text-xl font-medium text-[#035642]'>Notifications</h1>
      <hr className='text-gray-300'/>
      <h1 className='text-xl font-medium text-[#035642]'>You have no notifications currently! Try again later maybe?</h1>
    </div>
  )
}

export default Notifications