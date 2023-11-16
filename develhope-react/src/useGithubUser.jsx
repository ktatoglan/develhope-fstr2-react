import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('User not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return { userData, isLoading, error };
};

export default useGithubUser;
