// netlify/functions/login.js

exports.handler = async (event) => {
  // Replace this with a secure password or use environment variables
  const correctPassword = process.env.PASS || "shay"; // Use environment variable in production

  // Check if the request method is POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  // Parse the JSON body
  const { password } = JSON.parse(event.body);

  // Validate the password
  if (password === correctPassword) {
    // Fetch the JSON blob or return the data
    const jsonBlob = { key: "value" }; // Replace with actual data or fetch from a source
    return {
      statusCode: 200,
      body: JSON.stringify(jsonBlob),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
    };
  }
};
