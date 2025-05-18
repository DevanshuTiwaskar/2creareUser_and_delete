import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

function App() {
   

      let [users, setUsers] = useState([])///[] becouse we are starting with empty list


  return (
    <>
     <Create users={users} setUsers={setUsers}/>
     <Read users={users} setUsers={setUsers}/>
    </>
  )
}

export default App