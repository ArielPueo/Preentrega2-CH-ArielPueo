import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
  const logoBrand = './narutoicon.png';
  return (
    <header>
        <Link to={"/"}>
          <img className="logoBrand" src={logoBrand} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}> Ropa </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/3"}> Cosas </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar