import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  const renderUsers = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Github Users</h2>
      {renderUsers()}
    </div>
  );
};

export default GithubUsers;
