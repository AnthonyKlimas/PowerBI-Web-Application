import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar()
{
    return (
        <nav>

            <Link to="/executive">
                <h1>Executive Dashboard</h1>
            </Link>

            <Link to="/support">
                <h1>Support Dashboard</h1>
            </Link>
            
            <Link to="/health">
                <h1>Customer Health Dashboard</h1>
            </Link>

            <Link to="/insights">
                <h1>AI Insights Dashboard</h1>
            </Link>
    
        </nav>

    );
}

export default Navbar;