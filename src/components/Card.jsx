import React from 'react'

const Card = ({ name, city, age, profession, photoUrl }) => {
  return (
    <>
     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={photoUrl}
        alt={`${name}'s profile`}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">📍 {city}</p>
        <p className="text-gray-600">🎂 Age: {age}</p>
        <p className="text-gray-600">💼 {profession}</p>
      </div>
    </div>

    </>
  )
}

export default Card