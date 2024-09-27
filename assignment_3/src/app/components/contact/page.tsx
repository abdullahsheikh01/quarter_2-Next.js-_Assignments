import { Navigate1 } from "../navigatorr/page";
import { Navigate2 } from "../navigatorr/page";
export default function Contact(){
    return(
        <>
        <h1>I am Contact Page</h1>
        <nav>
            <ul>
                <li><Navigate1 link="/" name="Home Page"/></li>
                <li><Navigate2 link="./navbar" name="Navbar"/></li>
                <li><Navigate1 link="./about" name="About"/></li>
                <li><Navigate2 link="./footer" name="Footer"/></li>
            </ul>
        </nav>
        </>
    )
};