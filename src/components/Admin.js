import { useState, useEffect } from "react";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Use an environment variable for the password
  // Make sure to expose this variable securely in Netlify
  const correctPassword = process.env.REACT_APP_ADMIN_PASSWORD;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setLoggedIn(true);
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      const fetchData = async () => {
        try {
          const response = await fetch("/data/user-data.json"); // Fetch your initial JSON data
          if (!response.ok) throw new Error("Failed to fetch data");
          const data = await response.json();
          setUserData(data);
          setUpdatedData(data); // Initialize with fetched data
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [loggedIn]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/.netlify/functions/user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error("Failed to update data");
      const result = await response.json();
      alert(result.message);
      setUserData(updatedData); // Update state with the latest data
    } catch (error) {
      setError(error.message);
    }
  };

  if (!loggedIn) {
    return (
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </form>
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.entries(userData).map(([user, isChecked]) => (
          <div key={user}>
            <label>
              <input
                type="checkbox"
                name={user}
                checked={updatedData[user] || false}
                onChange={handleCheckboxChange}
              />
              {user}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
