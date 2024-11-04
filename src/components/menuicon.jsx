import classNames from "classnames"

const MenuIcon = (props) => {
    const menuClass = classNames('flex','row',{
        'left': props.menuExpanded,
        'center': !props.menuExpanded,
        'active-tab':props.menudata.active,
        'tab': !props.menudata.active
    })
    return (
        <div className={menuClass} onClick={props.menuClickHandler}>
            <img src={props.menudata.icon} className="menuicon" title={props.menudata.name} style={{width:props.menuExpanded?'1rem':'1.5rem'}}/>
            {
                props.menuExpanded && <span style={{
                    fontSize:15
                }}>{props.menudata.name}</span>
            }
        </div>
    )
}

export default MenuIcon