import Resident from "../components/Resident"

export const paginationLogic = (currentPage, residents) => {
    //console.log("current page in pagination logic: ", currentPage)
    //console.log("residents in pagination logic: ", residents)

   //previene que resident todavia no esté definido
    if(!residents){
        return {
            pages: [1],
            residentsPage:[]
        }
    }
    // cantidad de residentes por página
    const RESIDENTS_PER_PAGE = 20
    // cantidad total de páginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)
   

    // residents que van a mostrar en la página
    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
    const residentsInPage = residents.slice(sliceStart, sliceEnd)

    //Generación del arreglo con los números de las páginas que se van a mostrar
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    //console.log("Pages: ", pages)
    //console.log("Residents in page: ", residentsInPage)

    

    return { pages, residentsInPage }


}