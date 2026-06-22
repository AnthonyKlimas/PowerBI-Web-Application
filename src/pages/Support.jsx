import { motion } from "framer-motion";

import supportDashboard from "../assets/images/support_dashboard.png";

function Support()
{
    return (
    <>

        <div className= "cardContainer">

        <motion.div
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit ={{opacity: 0}}
            transition = {{duration: .5}}
        >

        <h1 className= "header">
            Support Dashboard
        </h1>

        </motion.div>

        <motion.div
            initial = {{opacity: 0, x: 200}}
            animate = {{opacity: 1, x: 0}}
            exit ={{opacity: 0, x: -200}}
            transition = {{duration: .5}}
        >
        
            <div className="bigBox">
                <img className="supportdashImg" src={supportDashboard}/>
            </div>

            </motion.div>

        </div>
    </>
    );
}

export default Support;