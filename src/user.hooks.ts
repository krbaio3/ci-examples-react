import * as React from 'react';
import { User } from './model';
import { useEffect, useState } from 'react';

export const useUser = (initialUser: User) => {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    // Simulate async call
    setTimeout(() => {
      setUser({ name: 'Jane', surname: 'Smith' });
    }, 500);
  }, []);

  return {
    user,
    setUser,
  };
};
