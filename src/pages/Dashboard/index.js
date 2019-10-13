import React, {useEffect} from 'react';
import api from '../../service/api'

export default function  Dashboard(){
  useEffect(() =>{
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers:{ user_id}
      });
    }
    loadSpots();
  },[])
  return <h1>Dashboard</h1>
  
}