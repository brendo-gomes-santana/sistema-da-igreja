import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import api from "../Service"
export default function Privida({ children }) {
    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('@InforUser'))
        if (!dados) {
            return <Navigate to='/' />
        }
        api.defaults.headers.common['Authorization'] = dados.token;
    })

    return children
}
