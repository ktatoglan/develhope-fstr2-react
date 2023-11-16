import { useState, useEffect } from 'react';

import useSWR from 'swr';

const useGithubUser = (username) => {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return response.json();
  };

  const { data: userData, error, isValidating: isLoading } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return {
    userData,
    isLoading: !userData && !error,
    error,
  };
};

export default useGithubUser;

