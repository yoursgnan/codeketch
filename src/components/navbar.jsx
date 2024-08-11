import MenuIcon from "./menuicon"
import hamburger from '../assets/hamburger.svg'

const NavBar = (props) => {
    console.log('props got',props)
    return (
        
        <nav className="navbar-container">
            <div className="nav-topmenu">
                
                <div className="flex column start gap">
                <input
                    className='poppins-light material-input searchbar'
                    type="search"
                    name="search_query"
                    placeholder="Search"
                    
                    />
                {
                    
                    props.menus.map((menu, index) => (
                        <MenuIcon key={index} menudata={props.menus[index]} menuClickHandler={()=>props.menuClickHandler(index)}/>
                    ))
                }
                </div>
            </div>
        </nav>
    )
}

export default NavBar