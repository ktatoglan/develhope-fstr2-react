import React, { useState } from "react";
import useGithubUser from "./useGithubUser";
const GithubUser = () => {
  const [username, setUsername] = useState("");
  const { userData, isLoading, error, fetchUserData } = useGithubUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Fetch User</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Login: {userData.login}</p>
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      )}
    </div>
  );
};

export default GithubUser;
