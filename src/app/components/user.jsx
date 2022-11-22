import React from "react";
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User =(props) => {
    const {
        _id,
        bookmark,
        onToggleBookmark, 
    }= props
    return(
        <>
        <td>{(props.user).name}</td>
        <td>
         <Qualitie aray={props.user}/>
        </td>
        <td>{(props.user).profession.name}</td>
        <td>{(props.user).completedMeetings}</td>
        <td>{(props.user).rate} /5</td>
        <td>
        <BookMark bookmark2={bookmark} onClick={() => onToggleBookmark(_id)}/>
        </td>
        </>
)
}


export default User