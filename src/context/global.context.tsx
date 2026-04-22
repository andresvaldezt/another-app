import { createContext, useContext, useState, type ReactNode } from "react";

interface GlobalContextType {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}

const EmptyGlobalState: number = 0

const GlobalContext = createContext<GlobalContextType>({
    value: 0,
    setValue: () => {}
})

interface GlobalProps {
    children: ReactNode
}

export const GlobalProvider = ({children}: GlobalProps) => {
    const [value, setValue] = useState<number>(EmptyGlobalState)

    return(
        <GlobalContext.Provider value={{ value, setValue }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)

    if(!context.value && context.value !== 0){
        throw new Error('Global Context must be used within a GlobalContextProvider')
    }

    return context
}




