import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { getValue, USER_IDENTIFIER_KEY, getApiLink } from "../utils/helper_functions"

import WorkspaceView from "./workspace_view"
import NavBar from "./navbar"
import home from '../assets/home.svg'
import settings_icon from '../assets/settings.svg'
import VerifyEmail from "./verifyemail"
import Settings from "./settings"
import { useSelector } from "react-redux"

const Main = () => {
    const appuser = useSelector(state=>state.appuser)
    const [menus,setMenus] = useState([
        {
            icon: home,
            name: 'Workspaces',
            page_layout: {
                title: 'Workspace',
                component: <WorkspaceView/>
            },
            active:true
        },
        {
            icon: settings_icon,
            name: 'Settings',
            page_layout: {
                title: 'Workspace',
                component: <Settings/>
            },
            active:false
        },
    ]);

    const getActiveComponent = () => {
        const activeMenu = menus.find(menu => menu.active);
        return activeMenu? activeMenu.page_layout.component: null
    }
    
    const [navExpanded,setNavExpanded] = useState(false)

    const updatenavstate = () => {
        console.log('nav update func called')
        setNavExpanded(!navExpanded)
    }

    const setActiveTab = (index) =>{
        const updatedMenus = menus.map((menu, menuIndex) => {
            return {
                ...menu,
                active: index === menuIndex
            };
        });
        setMenus(updatedMenus);
    }

    return (
        <div>
            <div className="canvas flex row left">
                <NavBar menus={menus} expanded={navExpanded} menuClickHandler={setActiveTab} updatenavstate={updatenavstate}/>
                <main className="component-view">
                    {/* {(appuser && !appuser.email_verified) && <VerifyEmail/>} */}
                    {getActiveComponent()}
                </main> 
            </div>
        </div>
        
        
    ) 
} 

export default Main