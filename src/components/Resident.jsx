import { useEffect, useState } from "react"
import axios from "axios"

const Resident = ({ residentUrl }) => {
    //console.log("URL Información del residente: ", { residentUrl })
    const [residentInfo, setResidentInfo] = useState(null)
    /* Objeto con colores para el circulo del status */
    const statusStyles = {
        "Alive" :"bg-green-500",
        "Dead" :"bg-red-500",
        "unknown" :"bg-gray-400",
    }

    useEffect(() => {
        axios.get(residentUrl)
            .then(({ data }) => {
                //console.log("Resident Data:", data)
                setResidentInfo(data)
            })
            .catch((err) => { console.log(err) })
            .finally(() => { console.log("LLamada a servicio información de Resudente .Finalizada") })
    }, [])



    return (
        <article >
            <div className="relative">
                <img src={residentInfo?.image} alt=""></img>
                <div className="flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2  bg-black px-3 py-1 rounded-md">
                    <div className={`h-3 aspect-square bg-green-500 rounded-full ${statusStyles[residentInfo?.status]}`}></div>
                    <span className="font-red ">{residentInfo?.status}</span>
                </div>
            </div>
            <section >
                <h4>{residentInfo?.name}</h4>
                <ul>
                    <li>Species: <span>{residentInfo?.species
                    }</span>   </li>
                    <li>origin:<span>{residentInfo?.origin.name}</span></li>
                    <li>Times appear: <span>{residentInfo?.episode.length}</span></li>
                </ul>

            </section>
        </article>

    )
}
export default Resident