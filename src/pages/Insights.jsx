import { useState } from "react";

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
    <div className="card">
        <div className="bigBox">
            <button onClick={generateSummary} disabled={loading}>
                {loading ? "Generating Sumamry..." : "Generate Summary"}
            </button>

            <div className="insightCard">

                <p>{summary}</p>

            </div>
        </div>
    </div>
    </>
    );
}

export default Insights;