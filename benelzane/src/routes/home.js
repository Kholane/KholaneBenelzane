import { NavLink } from "react-router-dom";
import "./home.css";

export default function Home(){
    return (
 <div className="container-fluid hero vh-100">
  <div className="row">
    <div className="col mt-5">

    </div>
  </div>
   <div className="row">
    <div className="col text-black text-lg-center py-5 mt-5">
      <div className="mt-5">
        <h1 className=" mt-5 display-6 myheading">Kholani Benelzane</h1>
        <h2 className="text-white display-3">Freelance Web Developer</h2>
        <p className="text-white">I believe every business weather small or big deserves an online presence.</p>
      </div>
      <div className="about_me text-white">
        <NavLink to={"/about"} className="btn rounded-pill" role="button">ABOUT ME</NavLink>
      </div>
      </div>
      </div>
      </div>
    )
}