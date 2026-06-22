import executiveDashboard from "../assets/images/executive_dashboard.png";

import { motion } from "framer-motion";

function Dashboard()
{
    return(
        <>
            <div className= "cardContainer">

        <motion.div
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit ={{opacity: 0}}
            transition = {{duration: .5}}
        >

        <h1 className= "header">
            Executive Dashboard
        </h1>

        </motion.div>

                <motion.div
                    initial = {{opacity: 0, x: 200}}
                    animate = {{opacity: 1, x: 0}}
                    exit ={{opacity: 0, x: -200}}
                    transition = {{duration: .5}}
                >
        
                    <div className="bigBox">

                        <img className="executivedashImg" src={executiveDashboard}/>

                    </div>

                </motion.div>
            </div>

        </>
    );
}

export default Dashboard;