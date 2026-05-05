import { useEffect, useRef} from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./context/ModalContext"
import "./Modal.css"

interface Props {
    children: React.ReactNode
}

const eventListener = "keydown"

export const Modal = ({ children }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const { state, setState } = useModalContext()

    const closeModal = () => { setState(false) }

    const modalRoot = document.getElementById('modal')

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        const handleEsc = (e: globalThis.KeyboardEvent) => {
            if(e.key === "Escape"){
                setState(false)
            }
        }

        if(state){
            document.addEventListener(eventListener, handleEsc)
        }

        return () => {
            document.removeEventListener(eventListener, handleEsc)
        }
    }, [setState, state])

    if (!state || !modalRoot){
        return null
    }

    return createPortal(
    <div className="overlay fixed inset-0 flex items-center justify-center bg-black/50" onClick={closeModal}>
        <div className="modal w-3xl h-3xl p-10 bg-amber-600 rounded-md shadow-md/50 shadow-black" ref={modalRef} onClick={handleContentClick}>
            {children}
            <button className="bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 mt-3 hover:bg-blue-900 active:bg-blue-500 mr-2" onClick={closeModal}>Close</button>
        </div>
    </div>

    , modalRoot)
} 