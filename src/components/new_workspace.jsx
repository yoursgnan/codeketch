import { useState } from "react"
import { setWorkspaceData } from "../reducers/workspace_reducer"
import { addWorkspace } from "../reducers/workspaces_reducer"
import { useDispatch, useSelector } from "react-redux"
import { getAxiosInstance } from "../utils/helper_functions"

const NewWorkspace = (props) => {
    const worspaceData = useSelector(state=>state.newworkspace)
    const dispatch = useDispatch()
    const createWorkSpace = async() => {
        const response = await getAxiosInstance().post('/api/workspace',worspaceData)
        dispatch(addWorkspace(response.data))
        props.discard()
    }

    const handleFieldChange = (event) => {
        dispatch(setWorkspaceData({
          name: event.target.name,
          value: event.target.value
        }))
      }

    return (
        <div className="content-box white-bg dialog-box flex left column gap-medium">
            
            <div className="flex column gap-medium">
                <h3 className="poppins-medium">Create Workspace</h3>
                {/* <p className="smalltext">workspaces are the spaces where you can create</p> */}
                <input 
                    name='title'
                    value={worspaceData.title || ''} 
                    onChange={handleFieldChange}
                    placeholder="Title"
                    className="poppins-light material-input"/>
                <input 
                    name='description'
                    value={worspaceData.description || ''}  
                    onChange={handleFieldChange}
                    placeholder="Description"
                    className="poppins-light material-input"/>
                
            </div>
            <div className="flex end gap">
                <button onClick={props.discard} className="button btn-light poppins-light">Discard</button>
                <button onClick={createWorkSpace} className="button btn-dark poppins-medium">Create</button>
            </div>
            
            
        </div>
    )
}

export default NewWorkspace