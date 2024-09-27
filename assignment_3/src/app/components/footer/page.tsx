import { Navigate1 } from "../navigatorr/page";
import { Navigate2 } from "../navigatorr/page";
export default function Footer(){
    return(
        <>
        <h1>I am Footer Page</h1>
        <nav>
            <ul>
                <li><Navigate1 link="/" name="Home Page"/></li>
                <li><Navigate2 link="./navbar" name="Navbar"/></li>
                <li><Navigate1 link="./about" name="About"/></li>
                <li><Navigate2 link="./contact" name="Contact"/></li>
            </ul>
        </nav>
        </>
    )
}