import React from 'react'
import Resident from "./Resident"

const ResidentList = ({ residents }) => {
    //console.log("Residents:", residents)
    return (
        <>
            <section className="px-3">
                {/* Lista de Residentes */}
                <section className='grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6'>
                    {/*  {residents?.[0]} */}
                    {
                        residents?.map((resident, index) =>
                        (
                         <Resident key={resident} residentUrl={resident} />
                         
                        ))
                    }
                </section>
            </section>

            {/* Lista de residentes */}
        </>
    )
}

export default ResidentList