import logo from './logo.svg';
import './App.css';
import AddUser from './Users/AddUser';
import UserList from './Users/UserList';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const addNewUser = (uName,uAge) =>{
    setData((prevUsersList) =>{
      return [
        ...prevUsersList,
        { name: uName, age: uAge},
      ];
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addNewUser}/>
      <UserList users={data} />
    </div>
  );
}

export default App;
