import { useNavigate } from "react-router"
import { useEffect } from "react"
import { getValue, USER_IDENTIFIER_KEY } from "../utils/helper_functions"

const Dashboard = () => {
    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.clear()
        navigate('/')
    }

    useEffect(()=>{
        const action_login = async() => {
            if(!getValue(USER_IDENTIFIER_KEY)){
            navigate('/')
            }
        }

        action_login()
        
    },[navigate]) 



    return (
        <div className="flex column center">
            <h1>Welcome to dashboard</h1>
            <button onClick={logout} className="button github poppins-medium">Sign out</button>
        </div>
        
    )
} 

export default Dashboard