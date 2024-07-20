import { useEffect, useState } from "react"
import NewWorkspace from "./new_workspace"
import { getApiLink, getValue, USER_IDENTIFIER_KEY,getAxiosInstance } from "../utils/helper_functions"

import noworkspace from '../assets/noworkspace1.png'

import { useDispatch,useSelector } from "react-redux"
import { notify } from "../utils/helper_functions"
import {setWorkspaces} from '../reducers/workspaces_reducer'
import WorkspaceBox from "./workspace_box"

const WorkspaceView = () => {
    const [showNewWorkspaceDialog,setShowNewWorkspaceDialog] = useState(false)

    const workspaces = useSelector(state=>state.workspaces)

    const dispatch = useDispatch()

    const closeDialog = () => {
        setShowNewWorkspaceDialog(false)
    }

    const openDialog = () => {
        setShowNewWorkspaceDialog(true)
    }

    useEffect(()=>{
        const fetchWorkspaces = async()=>{
            try{
                const response = await getAxiosInstance().get('/api/workspace')
                dispatch(setWorkspaces(response.data))
            }
            catch(error){
                console.log(error)
                notify(dispatch,'Failed to fetch your workspaces')
            }
        }
        fetchWorkspaces();
    },[])

    return (
        <div style={{padding:10}}>
            {
                showNewWorkspaceDialog && <NewWorkspace discard={closeDialog} />   
            }
            <h2 className="poppins-medium">Workspaces</h2>
            <br/>
            <button className="button btn-dark poppins-medium" style={{padding:10}} onClick={openDialog}>New WorkSpace</button>
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