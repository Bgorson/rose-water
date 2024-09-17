// netlify/functions/user-data.js

let userData = {
  "Brandon Gorson": true,
  "Rachel Nitzarim": false,
};

exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(userData),
    };
  } else if (event.httpMethod === "POST") {
    try {
      const updatedData = JSON.parse(event.body);
      userData = { ...userData, ...updatedData };

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Data updated successfully" }),
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid request" }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }
};
