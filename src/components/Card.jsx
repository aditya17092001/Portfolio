import React from 'react'

const Card = ({ icon, name }) => {
    return (
        
        <div className='shadow-lg shadow-white w-24 h-32 flex flex-col justify-center m-10 bg-gray-700 bg-opacity-50 p-4 rounded-3xl hover:shadow-2xl hover:cursor-pointer'>
            <div className='h-14 w-14 flex justify-center ml-1'>{icon}</div>
            <div className='flex justify-center text-lg pt-2'>{name}</div>
        </div>
    )
}

export default Card
