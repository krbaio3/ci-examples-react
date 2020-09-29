import { useEffect, useState } from 'react';
import { getUsersByFilter } from './api';

export const useFilterUsers = initialFilter => {
  const [users, setUsers] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>(initialFilter);

  useEffect(()=>{
    getUsersByFilter(filter).then(newUsers => {
      setUsers(newUsers);
    });
  }, [filter]);

  return {
    users,
    setFilter,
  }
}
