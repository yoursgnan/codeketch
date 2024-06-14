const MenuIcon = (props) => {
    return (
        <div className={props.menudata.active?"flex column center tab active-tab":"flex column center tab"} onClick={props.menuClickHandler}>
            <img src={props.menudata.icon} className="menuicon" title={props.menudata.name}/>
            <span style={{
                fontSize:10
            }}>{props.menudata.name}</span>
        </div>
    )
}

export default MenuIcon