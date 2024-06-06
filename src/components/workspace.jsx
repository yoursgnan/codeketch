import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { getValue, USER_IDENTIFIER_KEY, getApiLink } from "../utils/helper_functions"
import NavBar from "./navbar"
import home from '../assets/home.svg'

const Workspace = () => {
    const [user,setUser] = useState(null)
    const navigate = useNavigate()
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${getValue(USER_IDENTIFIER_KEY)}`
    const logout = () => {
        window.localStorage.clear()
        navigate('/')
    }

    useEffect(()=>{
    const action_login = async() => {
        try{
            const loginUser = await axios.get(getApiLink()+'/api/login')
            console.log('signed in user',loginUser)
            setUser(loginUser.data)
        }catch(error){
            navigate('/')
        }
        
    }

    action_login()
    
    },[navigate]) 

    const menus = [
        {
            icon: home,
            name: 'Workspaces'
        },
    ];
    
    const lowermenus = [
        {
            component: (<button onClick={logout} className="button github poppins-medium">Sign out</button>)
        }
    ]
    console.log('menus',menus)

    return (
        <div className="canvas flex row">
            <NavBar menus={menus} lowermenus={lowermenus}/>
            <div>
                <h3>workspaces</h3>
                <p>Welcome {user.name}</p>
                <button className="button github poppins-medium">New Workspace</button>
                <div><a href="#" onClick={logout}>Sign Out</a></div>
            </div>
        </div>
    ) 
} 

export default Workspace