import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { DELETE_USER } from '../Graphql/Mutations';
import { GET_ALL_USERS } from '../Graphql/Quaries'

function ListOfUsers({ newPassword }: any) {
  const {data, error} = useQuery(GET_ALL_USERS)

  const [deleteUser] = useMutation(DELETE_USER)

  if(error) return (<h1>Error Happened!</h1>);

  return (
    <div>
      <h2>List of users</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>username</th>
            <th>password</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.getAllUsers.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button className='btn btn-danger' onClick={() => deleteUser({
                  variables: {id: user.id}
                })}>Delete</button>
              </td>
            </tr>
          ))}
          {
            (data && !data.getAllUsers.length) &&
            (<tr>
              <td className='text-center' colSpan={5}>
                <strong>No Data Found</strong>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListOfUsers
