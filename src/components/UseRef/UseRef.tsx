//Objetivo: Nos permite crear una referencia mutable que persiste durante todo el ciclo
//de vida del componente sin causar un re-render.
//Objetivo 2: hacer referencia a un elemento del DOM.

//Ejemplo: un marcador de un libro que utilizamos para guardar la última posición de la lectura.
//No módifica el contenido del libro

import { useRef, useState } from "react"

export const BookReader = () => {
    const buttonStyles = 'bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 hover:bg-blue-900 active:bg-blue-500 mr-2'

    const currentPageRef = useRef<number>(1)
    const [currentPage, setCurrentPage] = useState(1)

    const nextPage = () => {
        currentPageRef.current += 1
        console.log(`Avanzaste a la página ${currentPageRef.current}`)
    }

    const previousPage = () => {
        if(currentPageRef.current === 1){
            console.log(`No se puede retroceder la página porque ya te encuentras en la página ${currentPageRef.current}`)
            return
        }

        currentPageRef.current -= 1
        console.log(`Retrocediste a la página ${currentPageRef.current}`)
    }

    const goToPage = (page: number) => {
        if(page < 1){
            console.log(`No se puede pasar a un valor imposible: ${page}`)
            return
        }
        setCurrentPage(page)
        currentPageRef.current = page
        console.log(`Saltaste a la página ${currentPageRef.current}`)
    }

    return(
        <div>
            <h2 className="text-2xl font-bold">Lectura de libro</h2>
            <p>página actual: {currentPageRef.current}</p>
            <p>página actual[STATE]: {currentPage}</p>
            <button className={buttonStyles} onClick={previousPage}>Pagina Anterior</button>
            <button className={buttonStyles} onClick={nextPage}>Pagina Siguiente</button>
            <button className={buttonStyles} onClick={() => {goToPage(50)}}>Saltar de Pagina 50</button>
        </div>
    )
}