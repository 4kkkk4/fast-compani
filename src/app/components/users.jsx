import React from "react";
import User from './user'

const Users = (props) => {
   const {users, ...rest} = props
   return(
      (props.users).map((user) => (
          <tr key={user._id}>
            <User 
            user= {user}  
            {...user} {...rest}
            />
             <td>
                <button
                   onClick={() => props.funcDel(user._id)}
                   className="btn btn-danger"
                >
                   delete
                </button>
             </td>
          </tr>
       ))
)
};



export default Users;

