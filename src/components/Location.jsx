import React from 'react'
import axios from 'axios'

const Location = ({ location, setLocation }) => {
  //console.log("Location received in component:", location)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newLocation = event.target.newLocation.value
    //console.log("Search Button clicked",newLocation)
    if (newLocation) {
      const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
      //console.log("Localización to search: ",URL)

      /* LLamada al servicio */
      axios.get(URL)
        .then(({ data }) => {
          //console.log("Información Recibida al pulsar botón: ",data)
          setLocation(data)
        })
        .catch((err) => { 
          console.log(err) 
        })
        .finally(() => { 
          //console.log("LLamada a servicio finalizada") 
        })
    }
    /* LLamada al servicio. End */
  }
  return (
    <>
      <section >
        
        {/* Input de búsqueda */}
        <div className="flex justify-center pb-5 inline-block">
        <form className=" border-3 border-solid  border-green-200" onSubmit={handleSubmit}>
          <input placeholder=" Type a location Id ..." type="text" id="newLocation" className='text-black py-1' />&nbsp;
          <button className="px-2 py-1 bg-green-700">Search <i className='bx bx-search px-2'></i>
</button>
                  </form>
        </div>
        <div className='text-center text-green-500'>!Welcome to the crazy universe!</div>
        {/* Info Location */}
        <section>
          {/*  */}
          <h2 className="text-center text-xl py-2">{location?.name}</h2>
          <ul className='flex gap-3 p-2 justify-center'>
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