const WorkspaceBox = (props) => {
    return (
        <div className="workspace-box flex left column gap-medium">
            <h3>{props.workspace.title}</h3>
            <p>{props.workspace.description}</p>
        </div>
    )
}

export default WorkspaceBox