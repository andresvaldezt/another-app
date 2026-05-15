import type { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom"

interface Props {
    children: ReactNode
} 

export const RoutesWithNotFound = ({children}: Props) => {
    return(
        <Routes>
            {children}
            <Route path="*" element={<Navigate to="/404"></Navigate>}></Route>
            <Route path="/404" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
    )
}