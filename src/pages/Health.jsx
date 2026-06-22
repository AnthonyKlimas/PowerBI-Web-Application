import customerhealthImg from "../assets/images/customer_health_dashboard.png"

import { motion } from "framer-motion";

function Health()
{
    return (
        <>
        <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1}}
            >
    
        <div className="bigBox">

            <img className="healthdashImg" src={customerhealthImg}/>

        </div>
    </motion.div>

        </>
    );
}

export default Health;