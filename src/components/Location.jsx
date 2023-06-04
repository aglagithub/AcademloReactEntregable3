import React from 'react'

const Location = ({location}) => {
    console.log("Location received in component:",location)
  return (
    <>
  <section>
    {/* Input de búsqueda */}
    {/* Info Location */}
    <section>
        {/*  */}
        <h2 className="text-center text-xl py-2">{location?.name }</h2>
        <ul className='flex gap-2 p-2'>
            <li>type: {location?.type}</li>
            <li>dimension: {location?.dimension}</li>
            <li>population: {location?.residents.length}</li>
        </ul>
    </section>
  </section>
    </>
  )
} 

export default Location 