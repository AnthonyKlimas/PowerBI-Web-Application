const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { GoogleGenAI } = require("@google/genai");

require("dotenv").config();

const app = express();

app.use(cors());

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.get("/insights", async (req, res) =>
{
    try
    {
        const executive = fs.readFileSync(
            "../src/assets/images/executive_dashboard.png"
            );

        const support = fs.readFileSync(
            "../src/assets/images/support_dashboard.png"
            );

        const health = fs.readFileSync(
            "../src/assets/images/customer_health_dashboard.png"
            );

        const response =
    await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            {
                inlineData: {
                    mimeType: "image/png",
                    data: executive.toString("base64")
                }
            },
            {
                inlineData: {
                    mimeType: "image/png",
                    data: support.toString("base64")
                }
            },
            {
                inlineData: {
                    mimeType: "image/png",
                    data: health.toString("base64")
                }
            },
            {
                text:
                    `
                    Analyze these three Power BI dashboards.
                    Do not use markdown.
                    Do not use ** or # symbols.
                    Return plain text only.

                    Dashboard 1:
                    Executive Dashboard

                    Dashboard 2:
                    Customer Support Dashboard

                    Dashboard 3:
                    Customer Health Dashboard

                    Provide:
                    1. Key business trends
                    2. Customer satisfaction insights
                    3. Support performance observations
                    4. Executive recommendations

                    Keep the summary under 200 words.
                    `
            }
        ]
    });

        res.send(response.text);
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send(
            "Failed to generate summary."
        );
    }
});

app.listen(5000, () =>
{
    console.log("Server running on port 5000");
});