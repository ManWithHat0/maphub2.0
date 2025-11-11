

import dotenv from "dotenv";
dotenv.config({ path: "doc.env" });
const apiKey = process.env.API_KEY;
console.log(`API Key: ${apiKey}`);
