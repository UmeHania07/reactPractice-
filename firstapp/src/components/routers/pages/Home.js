import { Link } from "react-router-dom";

function Home(){
    return<>        
    <h1>Home page &#128525;</h1>
    <p>This is a Home page</p>
    <Link to="/about">Go to About Page</Link>
    
    <li><Link to="/user/hania">Hania</Link></li>
    <li><Link to="/user/aiman">Aiman</Link></li>
    <li><Link to="/user/abuzar">Abuzar</Link></li>
    <li><Link to="/user/saifee">Saifee</Link></li>
    <li><Link to="/user/ami">Ami</Link></li>
    <li><Link to="/user/baba">Baba</Link></li>
    </>

}
export default Home;
