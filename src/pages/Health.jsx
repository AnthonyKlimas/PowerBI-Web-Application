import customerhealthImg from "../assets/images/customer_health_dashboard.png"

import { motion } from "framer-motion";

function Health()
{
    return (
        <div className= "cardContainer">

        <motion.div
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit ={{opacity: 0}}
            transition = {{duration: .5}}
        >

        <h1 className= "header">
            Customer Health Dashboard
        </h1>

        </motion.div>
        
        <motion.div
            initial = {{opacity: 0, x: 200}}
            animate = {{opacity: 1, x: 0}}
            exit ={{opacity: 0, x: -200}}
            transition = {{duration: .5}}
        >
    
        <div className="bigBox">

            <img className="healthdashImg" src={customerhealthImg}/>

        </div>

        </motion.div>

        </div>
    );
}

export default Health;