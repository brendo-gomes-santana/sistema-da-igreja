import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../Service"
import Loading from "../components/Loading"
export default function Privida({ children }) {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('@InforUser')) || []
        if (dados.length === 0) {
            setLoading(false)
            navigate('/')
            return;
        }
        api.defaults.headers.common['Authorization'] = dados.token;
        setLoading(false)
    }, [navigate])

    if(loading){
        return(
            <Loading/>
        )
    }

    return children
}
