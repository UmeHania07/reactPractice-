import {Link, NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div>
            <ul className='Navbar'>
                {/* <li><Link to="/about">About</Link></li> */}
            {/* <li><Link to="/">Home</Link></li>
           <li><Link to="/service">Service</Link></li>
           <li><Link to="/contact">contact</Link></li> */}
           <li><NavLink className="navbar-link"  to="/user/hania/id 1">Hania</NavLink></li>
          <li><NavLink className="navbar-link" to="/user/aiman/id 2">Aiman</NavLink></li>
           <li><NavLink className="navbar-link" to="/user/abuzar/id 3">Abuzar</NavLink></li>
           <li><NavLink className="navbar-link" to="/user/saifee/id 4">Saifee</NavLink></li>
           <li><NavLink  className="navbar-link" to="/user/ami/id 5">Ami</NavLink></li>
           <li><NavLink  className="navbar-link" to="/user/baba/id 6">Baba</NavLink></li>
    <hr/>
           </ul>
        </div>
        </>
    )
}
export default Navbar;