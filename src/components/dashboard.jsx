import { useNavigate } from "react-router"

const Dashboard = () => {
    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.clear()
        navigate('/')
    }

    return (
        <div className="flex column center">
            <h1>Welcome to dashboard</h1>
            <button onClick={logout} className="button github poppins-medium">Sign out</button>
        </div>
        
    )
} 

export default Dashboard