interface Props {
    label: string,
    parentMethod: () => void
}

export function Button({label, parentMethod}: Props){
    return(
        <button className="bg-blue-600 text-lg font-bold text-amber-50 rounded-md p-2 hover:bg-blue-900 active:bg-blue-500" onClick={parentMethod}>
            {label}
        </button>
    )
}