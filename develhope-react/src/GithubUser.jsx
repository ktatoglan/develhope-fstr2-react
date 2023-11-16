import React, { useState, useEffect } from "react";

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error("User not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div>
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <p>Login: {userData.login}</p>
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GithubUser;
