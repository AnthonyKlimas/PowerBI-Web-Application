import { Link } from "react-router-dom";

import reactLogo from "../assets/images/react.png";

import "./Navbar.css";

function Navbar()
{
    return (
        <nav>

            <div className= "navContainer">

                <div className= "logoContainer">

                    <img src={reactLogo}/>

                    <p>Data Analytics Web Application</p>

                </div>

                <div className= "linksContainer">

                    <Link to="/executive">
                        <p>Executive Dashboard</p>
                    </Link>

                    <Link to="/support">
                        <p>Support Dashboard</p>
                    </Link>
            
                    <Link to="/health">
                        <p>Customer Health Dashboard</p>
                    </Link>

                    <Link to="/insights">
                        <p>AI Insights Dashboard</p>
                    </Link>

                    <div>

                    </div>

                </div>

            </div>
    
        </nav>

    );
}

export default Navbar;