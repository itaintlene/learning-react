import React from 'react'

function Card({FullName="anonymous", imgSrc}) {
  return (
    <div>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <img className="w-full h-48 object-cover" src={imgSrc}  />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{FullName}</h2>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

    </div>
  )
}

export default Card