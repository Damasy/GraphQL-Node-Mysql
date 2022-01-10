import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_PASSWORD } from '../Graphql/Mutations';

function UpdatePassword() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('')

  const [updatePassword, {error}] = useMutation(UPDATE_PASSWORD);
  if(error) return (<h1>Error Happend!!</h1>)
  return (
    <div className='createUser'>
      <h2>Update password</h2>
      <input type="text" placeholder='username'
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <input type="text" placeholder='current password'
        onChange={(e) => {
          setOldPassword(e.target.value)
        }}
      />
      <input type="text" placeholder='new password'
        onChange={(e) => {
          setNewPassword(e.target.value)
        }}
      />
      <button onClick={(e) => updatePassword({
        variables: {
          username,
          oldPassword: oldPassword,
          newPassword: newPassword
        }
      })}>Update Password</button>
    </div>
  )
}

export default UpdatePassword
