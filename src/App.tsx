import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import UserName from './components/UserName';
import UserAge from './components/UserAge';
import UserAddress from './components/UserAddress';
import UserNameChange from './components/UserNameChange';
import { UserData } from './types';

function App() {

  const [user, setUser] = useState<UserData>({
    name: '',
    age: 0,
    address: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.currentTarget.value;

    setUser({...user, name: value});
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();

      const userInfo = data.results[0];

      setUser((prev) => {
        return {
          ...prev,
          name: userInfo.name.first,
          age: userInfo.dob.age,
          address: userInfo.location.street.name
        }
      })
    }

    getData();
  }, [])

  return (
    <div className="App">
      <UserName user={user} />
      <UserAge user={user} />
      <UserAddress user={user} />
      <UserNameChange user ={user} onNameChanged={handleChange} />
    </div>
  );
}

export default App;
