import React, { useState, useEffect } from "react";
import GithubUser from "./GithubUser";
const GithubUsers = () => {
  const [usernames, setUsernames] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        if (response.ok) {
          const data = await response.json();
          const names = data.map((user) => user.login);
          setUsernames(names);
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching usernames:", error);
      }
    };

    fetchUsernames();
  }, []);

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <h1>Github Users</h1>
      <div>
        <h2>Usernames</h2>
        <ul>
          {usernames.map((username, index) => (
            <li
              key={index}
              onClick={() => handleUserClick(username)}
              style={{ cursor: "pointer" }}
            >
              {username}
            </li>
          ))}
        </ul>
      </div>
      <div>{selectedUser && <GithubUser username={selectedUser} />}</div>
    </div>
  );
};

export default GithubUsers;
