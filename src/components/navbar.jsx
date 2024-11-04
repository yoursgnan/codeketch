import MenuIcon from "./menuicon"
import hamburger from '../assets/hamburger.svg'
import searchicon from '../assets/searchicon.svg'

const NavBar = (props) => {
    console.log('props got',props)
    return (
        
        <nav className="navbar-container" style={{width:props.expanded?'17%':'4%'}}>
            
            <div className="nav-topmenu">
                
                <div className="flex column start gap">
                
                    <div className={props.expanded?"flex column start gap":"flex column center gap"}>
                        {/* <div className="hamburger-container"> */}
                            <img src={hamburger} className="hamburger" onClick={props.updatenavstate}/>
                            {/* <span id='line1'></span> */}
                        {/* </div> */}
            
                        {
                            props.expanded ? (<input
                            className='searchbar poppins-light material-input'
                            type="search"
                            name="search_query"
                            placeholder="Search"
                            />) : (
                                <>
                                    <img src={searchicon} width={30} className="flex row searchtab searchbar" onClick={props.updatenavstate}/>
                                    <span id='line1'></span>
                                </>
                                
                            )
                        }
                    </div>
                    
                
                    {
                        props.menus.map((menu, index) => (
                            <MenuIcon key={index} menudata={props.menus[index]} menuClickHandler={()=>props.menuClickHandler(index)} menuExpanded={props.expanded}/>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar