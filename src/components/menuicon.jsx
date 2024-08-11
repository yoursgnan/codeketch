const MenuIcon = (props) => {
    return (
        <div className={props.menudata.active?"flex row left tab active-tab":"flex row left tab"} onClick={props.menuClickHandler}>
            <img src={props.menudata.icon} className="menuicon" title={props.menudata.name}/>
            <span style={{
                fontSize:15
            }}>{props.menudata.name}</span>
        </div>
    )
}

export default MenuIcon