import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"
import { getRandomDimension } from "./utils/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";
function App() {
  const [dimensionId, setDimensionId] = useState(getRandomDimension())
  const [location, setLocation] = useState(null)

  useEffect(() => {

    /* const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}` */

    const URL = `https://rickandmortyapi.com/api/location/${dimensionId}`
    //console.log(URL)

    /* LLamada al servicio */
    axios.get(URL)
      .then(({ data }) => {
        //console.log(data)
        setLocation(data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => { 
        //console.log("LLamada a servicio finalizada") 
      })
    /* LLamada al servicio. End */

  }, [dimensionId])

  return (
    <>
      <main className=" min-h-full  text-white bg-[url('public/images/background_image.png')"  style={{
            backgroundImage:
              "url('/images/background_image.png')", 
          }}>
        {/* {getRandomDimension()}
        <br />  */}
        {/*   <div>{location?.id}</div> 
              <div>{location?.name}</div> 
              <div> {location?.dimension}</div>
              <div>{location?.type}</div>
               <div>{location?.residents.length}</div> */}
       {/*  <img src="/images/background_image.png" alt="background" /> */}
       <img className=" mx-auto object-contain"src="/images/Image_Header.png" alt="Image Header"  /> 
        <Location location={location} setLocation={setLocation} />
        <ResidentList residents={location?.residents} />



      </main>
    </>
  );
}

export default App;

