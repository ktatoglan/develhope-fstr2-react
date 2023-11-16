import React from 'react';
import useGithubUser from './useGithubUser'; // Adjust the path as needed

const GithubUser = ({ username }) => {
  const { userData, isLoading, error } = useGithubUser(username);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Login: {userData.login}</p>
      <img src={userData.avatar_url} alt="User Avatar" style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default GithubUser;
