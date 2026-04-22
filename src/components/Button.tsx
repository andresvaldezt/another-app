import type { ReactNode } from "react"
import { useGlobalContext } from "../context/global.context.tsx"

interface ButtonProps {
    children: ReactNode,
    parentMethod: () => void
}

interface LabelProps {
  label: string,
  state: number | string
}

export function Button({children, parentMethod}: ButtonProps){
    const { setValue } = useGlobalContext()

    const handleClick = () => {
        setValue((count) => count+2)
        parentMethod()
    }
    
    return(
        <button onClick={handleClick} className="bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 hover:bg-blue-900 active:bg-blue-500">
            {children}
        </button>
    )
}

Button.Label = function({ label, state }: LabelProps){
    const {value} = useGlobalContext()
    return <span>{label}: {state} : {value}</span>
}