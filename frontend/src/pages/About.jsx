import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function About(){
    return (
        <div>
            <Navbar/>
            <h1>
                About page
            </h1>
            <Link to="/">
            Go Home
            </Link>
        </div>
    );
}
export default About;