import React, { useState, useEffect } from 'react';
import GithubUser from './GithubUser';
import { useParams } from 'react-router-dom';

const ShowGithubUser = () => {
  const { username } = useParams();
  
  return <GithubUser username={username} />;
};

export default ShowGithubUser;
