const MenuIcon = (props) => {
    return (
        <div className="flex column center">
            <img src={props.icon} className="menuicon" title={props.name}/>
            {/* <span>{props.name}</span> */}
        </div>
    )
}

export default MenuIcon