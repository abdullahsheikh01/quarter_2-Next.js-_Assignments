import { Navigate1 } from "./components/navigatorr/page";
import { Navigate2 } from "./components/navigatorr/page";

export default function Home(){
  return(
   <>
   <h1>I am Home Page</h1>
    <nav>
      <ul>
        <li><Navigate1 link="./components/navbar" name="Navbar"/></li>
        <li><Navigate2 name="About" link="./components/about"/></li>
        <li><Navigate1 link="./components/contact" name="Contact"/></li>
        <li><Navigate2 link="./components/footer" name="Footer"/></li>
      </ul>
    </nav>
   </>
  )
}