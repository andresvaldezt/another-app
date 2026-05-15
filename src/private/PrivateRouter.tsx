import { Route, Navigate } from "react-router-dom"
import { Dashboard } from "../private/Dashboard/Dashboard"
import { RoutesWithNotFound } from "../components/RoutesWithNotFound/RoutesWithNotFound"

export const PrivateRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/dashboard"/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/about" element={<Dashboard/>}></Route>
            <Route path="/user" element={<Dashboard/>}></Route>
        </RoutesWithNotFound>
    )
}