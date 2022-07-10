import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={Logo} style={{ height: "2.5rem" }} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pokemons
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item text-light" to="/pokemons">Pokemon's List</Link></li>
                                    <li><Link className="dropdown-item text-light" to="/pokemons/create">Create Pokemón</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;