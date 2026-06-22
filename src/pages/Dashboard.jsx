import executiveDashboard from "../assets/images/executive_dashboard.png";

import { motion } from "framer-motion";

function Dashboard()
{
    return(
        <>
            <motion.div
                initial={{opacity: 0, x: 1}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0}}
                transition={{duration: 1}}
            
            
            >
        
                <div className="bigBox">

                <img className="executivedashImg" src={executiveDashboard}/>

                </div>
            </motion.div>

        </>
    );
}

export default Dashboard;