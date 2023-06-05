import React, { useEffect } from 'react'
import Resident from "./Resident"
import { useState } from 'react'
import { paginationLogic } from '../utils/pagination'

const FIRST_PAGE = 1
const ResidentList = ({ residents }) => {
    //console.log("Residents:", residents)
    let residentsToShow = residents
    let numerosPagina = []
    const [currentPage, setCurrentPage] = useState(1)

    if (residents) {
        const { pages, residentsInPage } = paginationLogic(currentPage, residents)

        //console.log("pages:", pages)
        //console.log("Residents in Page:", residentsInPage)
        residentsToShow = residentsInPage
        numerosPagina = pages
    }

    /* const {pages,residentsInPage} = paginationLogic(currentPage,residents) */
    //console.log("current page:", currentPage)

    /* console.log("pages:",pages)
    console.log("Residents in Page:",residentsInPage) */
useEffect(() => {
 
setCurrentPage(FIRST_PAGE)
 
}, [location])

    
    return (
        <>
            <section className="px-3">

                {/* Lista de Residentes */}
                <section className='grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6 '>
                    {/*  {residents?.[0]} */}
                    {
                        residentsToShow?.map((resident, index) =>
                        (
                            <Resident key={resident} residentUrl={resident} />

                        ))
                    }
                </section>
            </section>

            {/* Paginación */}
            <section className="flex justify-center gap-4 flex-wrap pb-8">
                {
                    numerosPagina.map(numeroPagina => <button
                        onClick={() => { setCurrentPage(numeroPagina) }}
                        className={`bg-green-700 p-2 px-3 rounded-md ${(numeroPagina===currentPage)?"bg-red-400":"bg-green-700"}`}>
                        {numeroPagina}
                    </button>)


                }
            </section>
        </>
    )
}

export default ResidentList