import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0">
            <NavLink to={"/"} className="navbar-brand p-0"><h1>K | B</h1></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <NavLink to={"/"} className="nav-item nav-link">Home</NavLink>
                        <NavLink to={"/about"} className="nav-item nav-link">About</NavLink>
                        <NavLink to={"/services"} className="nav-item nav-link">Services</NavLink>
                        <NavLink to={"/projects"} className="nav-item nav-link">Projects</NavLink>
                        <NavLink to={"/contact"} className="nav-item nav-link">Contact</NavLink>
                    </div>            
                </div>
            </nav>
    )
}