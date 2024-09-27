import { Navigate1 } from "../navigatorr/page";
import { Navigate2 } from "../navigatorr/page";
export default  function Navbar(){
    return(
        <>
         <h1>I am Navbar</h1>
        <nav>
            <ul>
                <li><Navigate1 link="/" name="Home Page"/></li>
                <li><Navigate2 link="./about" name="About"/></li>
                <li><Navigate1 link="./contact" name="Contact"/></li>
                <li><Navigate2 link="./footer" name="Footer"/></li>
            </ul>
        </nav>
        </>
    )
}