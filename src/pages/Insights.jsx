import { useState } from "react";

import { motion } from "framer-motion";

function Insights()
{
    const [summary, setSummary] = useState();

    const [loading, setLoading] = useState(false);

    async function generateSummary()
    {
        setLoading(true);

        try
        {
            const response = await fetch(
                "https://powerbi-web-application.onrender.com/insights"
            );

            const text = await response.text();

            setSummary(text);
        }
        catch(error)
        {
            console.error(error);

            setSummary(
                "Failed to retrieve AI summary."
            );
        }

        setLoading(false);
    }

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
            AI Insights Dashboard
        </h1>

    </motion.div>

    <motion.div
        initial = {{opacity: 0, x: 200}}
        animate = {{opacity: 1, x: 0}}
        exit ={{opacity: 0, x: -200}}
        transition = {{duration: .5}}
    >

    
        <div className="bigBox">

            <button onClick={generateSummary} disabled={loading}>

                {loading ? "Generating Summary..." : "Generate Summary"}

            </button>

            <div className="insightCard">

                <p>{summary}</p>

            </div>
        </div>

    </motion.div>
    </div>
    </>
    );
}

export default Insights;