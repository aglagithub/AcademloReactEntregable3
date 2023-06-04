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
    console.log(URL)

    axios.get(URL)
      .then(({ data }) => {
        console.log(data)
        setLocation(data)
      })
      .catch((err) => { console.log(err) })
      .finally(() => { console.log("LLamada a servicio finalizada") })
  }, [dimensionId])

  return (
    <>
      <main className="bg-black min-h-full text-white">
        {/* {getRandomDimension()}
        <br />  */}
        {/*   <div>{location?.id}</div> 
           <div>{location?.name}</div> 
        <div> {location?.dimension}</div>
        <div>{location?.type}</div>
        <div>{location?.residents.length}</div> */}
        <Location location={location} />
        <ResidentList residents={location?.residents}/>



      </main>
    </>
  );
}

export default App;

