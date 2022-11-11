import React, { useState } from 'react'
import api from '../api'
const Users = () => {
   const [users, setUsers] = useState(api.users.fetchAll()) //вызывает всех юзеров
   const handleDelete = (userId) => {
      setUsers((prevState) => prevState.filter((user) => user._id !== userId))
      console.log('человек')
   }
   const renderPhrase = (number) => {
      if (number == 0) {
         return (
            <span className="badge bg-danger">Никто с тобой не тусанет</span>
         )
      } else if (number > 1 && number < 5) {
         return (
            <span className="badge bg-primary">
               {number} человека тусанут с тобой сегодня
            </span>
         )
      } else {
         return (
            <span className="badge bg-primary">
               {number} человек тусанет с тобой сегодня
            </span>
         )
      }
   }
   const renderTable = (number) => {
      return (
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">Имя</th>
                  <th scope="col">Качества</th>
                  <th scope="col">Профессия</th>
                  <th scope="col">Встретился раз</th>
                  <th scope="col">Оценка</th>
                  <th scope="col"> </th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr key={user._id}>
                     <td>{user.name}</td>
                     <td>
                        {user.qualities.map((obj) => (
                           <span key={obj._id}>
                              <span className={`badge bg-${obj.color}`}>
                                 {obj.name}
                              </span>
                              <> </>
                           </span>
                        ))}
                     </td>
                     <td>{user.profession.name}</td>
                     <td>{user.completedMeetings}</td>
                     <td>{`${user.rate}/5`}</td>
                     <td>
                        <button
                           type="button"
                           className="btn btn-danger"
                           onClick={() => handleDelete(user._id)}
                        >
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      )
   }

   return (
      <>
         <h2>{renderPhrase(users.length)}</h2>
         {users.length !== 0 && renderTable()}
      </>
   )
}

export default Users
