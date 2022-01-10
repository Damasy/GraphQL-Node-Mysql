import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_USER } from '../Graphql/Mutations';

function CreateUser() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, {error}] = useMutation(CREATE_USER);

  if(error) return (<h1>Error Happened</h1>)
  return (
    <div className='createUser'>
      <h2>Create user</h2>
      <input type="text" placeholder='name'
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <input type="text" placeholder='username'
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <input type="text" placeholder='password'
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button onClick={(e) => createUser({
        variables: {name, username, password}
      })}>Create User</button>
    </div>
  )
}

export default CreateUser
