// ye Pharam hy 

import { useParams } from "react-router-dom";

function User(){
    let Params = useParams();
    let {id,name} = Params;
    // console.log(name)
    return<>
    <div>
        <h1>{id}</h1>
        <h1>This is a {name}`s page</h1>
    </div>
    
    </>
}
export default User;