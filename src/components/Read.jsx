import React from 'react'

const  Read = (props) => {
   const users = props.users;
   const setUsers = props.setUsers;
    const deleteHander = (id) => {
        const filterUsers = users.filter((user) => user.id != id)
        setUsers(filterUsers)

    };


    const userrender = users.map((user)=> {
        return (
            <li>

                <span>{user.name}</span>
                <span onClick={() => deleteHander(user.id)} >DeleteUser</span>

            </li>
        )
    });




  return (
        <div>
            <h1>Read User</h1>
            <ol>{users.length > 0 ? userrender : "no data found!"}</ol>
        </div>
  )
}

export default Read