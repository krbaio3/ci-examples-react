import React, { useEffect, useState } from 'react';

export const usePolling = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Simulate calls to api and count it
    const interval = setInterval(() => {
      setCount(c => (c+1));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return { count };
};
