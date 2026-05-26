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
                "http://localhost:5000/insights"
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
            <h1 className="insightsHeader">
                AI Generated Insights
            </h1>

            <button onClick={generateSummary} disabled={loading}>
                {loading ? "Generating Sumamry..." : "Generate Summary"}
            </button>

            <div className="insightCard">

                <p>{summary}</p>

            </div>
        </>
    );
}

export default Insights;