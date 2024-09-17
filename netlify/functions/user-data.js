// netlify/functions/update-user-data.js

const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const filePath = path.join(__dirname, "../public/data/user-data.json");

    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), "utf-8");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data updated successfully" }),
    };
  } catch (error) {
    console.error("Detailed error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error updating data" }),
    };
  }
};
