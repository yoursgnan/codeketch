import { useEffect, useState } from "react"
import NewWorkspace from "./new_workspace"
import { getApiLink, getValue, USER_IDENTIFIER_KEY } from "../utils/helper_functions"

import noworkspace from '../assets/noworkspace1.png'

import axios from "axios"

import WorkspaceBox from "./workspace_box"

const WorkspaceView = () => {
    const [showNewWorkspaceDialog,setShowNewWorkspaceDialog] = useState(false)

    const [workspaces,setWorkspaces] = useState([])

    const [data,setData] = useState({
        title: '',
        description: ''
    })

    axios.defaults.headers.common['Authorization'] = `Bearer ${getValue(USER_IDENTIFIER_KEY)}`

    const createWorkSpace = async() => {
        console.log('create called',data)
        const api_link = getApiLink() + '/api/workspace'
        const response = await axios.post(api_link,data)
        console.log('response',response.data)
        const newWorkspaces = [...workspaces,response.data]
        setWorkspaces(newWorkspaces)
        setShowNewWorkspaceDialog(false)
        
    }

    useEffect(()=>{
        const fetchWorkspaces = async()=>{
            const api_link = getApiLink() + '/api/workspace'
            const response = await axios.get(api_link)
            setWorkspaces(response.data)

        }
        fetchWorkspaces();
    },[])

    return (
        <div style={{padding:10}}>
            {
                showNewWorkspaceDialog && <NewWorkspace discard={()=>{setShowNewWorkspaceDialog(false)}} data={data} setData={setData} createWorkSpace={createWorkSpace}/>   
            }
            <h2 className="poppins-medium">Workspaces</h2>
            <br/>
            <button className="button btn-dark poppins-medium" style={{padding:10}} onClick={()=>{setShowNewWorkspaceDialog(true)}}>New WorkSpace</button>
            <br/>
            {
            workspaces && workspaces.length > 0  ? (
                <div className="workspace-container">
                    {
                        workspaces.map((workspace,index)=><WorkspaceBox workspace={workspace} key={index}/>)
                    }
                </div>
            ) : (
                <div>
                    <p>Get started by creating workspace</p>
                </div>
            )
            }
        </div>
    )
}

export default WorkspaceView