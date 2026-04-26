import { useRef } from "react"

export const FocusInput = () => {
    const buttonStyles = 'bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 hover:bg-blue-900 active:bg-blue-500 mr-2'
    const InputRef = useRef<HTMLInputElement>(null)

    const handleButtonClick = () => {
        if (!InputRef.current) {
            console.log('No existe la referencia al elemento')
            return
        }

        InputRef.current.focus()
    }

    return(
        <div>
            <input className="border-2 border-solid mx-4" ref={InputRef} type="text" placeholder="Escribe algo aquí..."/>
            <button className={buttonStyles} onClick={handleButtonClick}>Enfocar en el Input</button>
        </div>
    )
}