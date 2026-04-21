import type { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    parentMethod: () => void
}

interface LabelProps {
  label: string,
  state: number | string
}

export function Button({children, parentMethod}: ButtonProps){
    return(
        <button className="bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 hover:bg-blue-900 active:bg-blue-500" onClick={parentMethod}>
            {children}
        </button>
    )
}

Button.Label = function({ label, state }: LabelProps){
 return <span>{label}: {state}</span>
}