import { useState, useEffect } from "react";

const Admin = () => {
  const [userData, setUserData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

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
      const response = await fetch("/.netlify/functions/update-user-data", {
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
