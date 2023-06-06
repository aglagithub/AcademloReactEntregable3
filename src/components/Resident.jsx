import { useEffect, useState } from "react"
import axios from "axios"

const Resident = ({ residentUrl }) => {
    //console.log("URL Información del residente: ", { residentUrl })
    const [residentInfo, setResidentInfo] = useState(null)
    /* Objeto con colores para el circulo del status */
    const statusStyles = {
        "Alive": "bg-green-500",
        "Dead": "bg-red-500",
        "unknown": "bg-zinc-400",
    }

    useEffect(() => {
        axios.get(residentUrl)
            .then(({ data }) => {
                //console.log("Resident Data:", data)
                setResidentInfo(data)
            })
            .catch((err) => { console.log(err) })
            .finally(() => {
                //console.log("LLamada a servicio información de Residente .Finalizada")
            })
    }, [])



    return (
        <article className="border-2 border-solid  border-[#39764c] rounded-md overflow-hidden">
            <div className="relative ">
                <img src={residentInfo?.image} alt=""></img>
                <div className="flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2  bg-black px-3 py-1 rounded-md border-2 border-solid border-[#39764c]">
                    <div className={`h-3 aspect-square bg-green-500 rounded-full ${statusStyles[residentInfo?.status]}`}></div>
                    <span className="font-red text-sm">{residentInfo?.status}</span>
                </div>
            </div>
            <section className="px-3 py-2 border-t-2 border-solid  border-[#39764c]">
                <h4 className="text-center">{residentInfo?.name}</h4>
                <ul>
                    <li className="text-gray-400 text-sm">Species:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span className="text-white">{residentInfo?.species
                    }</span>   </li>
                    <li className="text-gray-400 text-sm">origin: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span  className="text-white">{residentInfo?.origin.name}</span></li>
                    <li className="text-gray-400 text-sm">Times appear:&nbsp;<span className="text-center text-white ">{residentInfo?.episode.length} time</span></li>
                </ul>

            </section>
        </article> 

    )
}
export default Resident