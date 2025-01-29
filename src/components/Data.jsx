import React, {useState, useEffect} from 'react';
import test from '../assets/test.json';

function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(test)
      .then(res => res.json())
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
  
  return (
    <div>
    {data.map((user) => (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
  )
}

export default Data