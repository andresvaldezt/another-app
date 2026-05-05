import { createContext, useState, type ReactNode, useContext } from "react";

const ModalContext = createContext<{
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    state: false,
    setState: () => null
})

const ModalProvider = ({children}: {children: ReactNode}) => {
    const [state, setState] = useState<boolean>(false)

    return <ModalContext.Provider value={{ state, setState }}>{children}</ModalContext.Provider>
}

const useModalContext = () => {
        const context = useContext(ModalContext)
    
        if(!context){
            throw new Error('Global Context must be used within a GlobalContextProvider')
        }
    
        return context    
}

export {
    ModalContext,
    ModalProvider,
    useModalContext
}