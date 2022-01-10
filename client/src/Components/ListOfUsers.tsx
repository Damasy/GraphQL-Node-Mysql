import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Quaries'

function ListOfUsers() {
  const {data, error} = useQuery(GET_ALL_USERS)
  console.log(data)
  if(error) return (<h1>Error Happened!</h1>)

  return (
    <div>
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
                  <button className='btn btn-danger'>Delete</button>
                  <button className='btn btn-primary'>Change Password</button>
                </td>
              </tr>
            ))}
            {
              !data &&
              (<tr>
                <td colSpan={5}>No Data Found</td>
              </tr>)
            }
          </tbody>
        </table>
    </div>
  )
}

export default ListOfUsers
