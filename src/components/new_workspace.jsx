import { useState } from "react"

const NewWorkspace = (props) => {
    

    return (
        <div className="content-box white-bg dialog-box flex left column gap-medium">
            
            <div className="flex column gap-medium">
                <h3 className="poppins-medium">Create Workspace</h3>
                {/* <p className="smalltext">workspaces are the spaces where you can create</p> */}
                <input 
                    value={props.data.title} 
                    onChange={(event)=>{props.setData({...props.data,title:event.target.value})}}
                    placeholder="Title"
                    className="poppins-light material-input"/>
                <input 
                    value={props.data.description}  
                    onChange={(event)=>{props.setData({...props.data,description:event.target.value})}}
                    placeholder="Description"
                    className="poppins-light material-input"/>
                
            </div>
            <div className="flex end gap">
                <button onClick={props.discard} className="button btn-light poppins-light">Discard</button>
                <button onClick={props.createWorkSpace} className="button btn-dark poppins-medium">Create</button>
            </div>
            
            
        </div>
    )
}

export default NewWorkspace