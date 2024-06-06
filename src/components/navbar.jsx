import MenuIcon from "./menuicon"

const NavBar = (props) => {
    console.log('props got',props)
    return (
        <div className="navbar-container">
            <div className="navbar-menus">
                <div className="nav-menubar">
                {
                    props.menus.map((menu, index) => (
                        <MenuIcon key={index} icon={menu.icon} name={menu.name} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default NavBar