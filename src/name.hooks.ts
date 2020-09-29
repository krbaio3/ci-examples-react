import * as React from 'react';
import { useState } from 'react';

export const useName = () => {
  const [name, setName] = useState('John Doe');
  return {
    name,
    setName,
  }
}
