import React from 'react'
import { useLocation } from 'react-router-dom';

export const Location = () => {
  const location = useLocation()
  console.log(location);
  return (
    <div>Location</div>
    
  )
}
