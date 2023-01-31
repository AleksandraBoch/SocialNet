import React from "react";
// import {FriendsPropsType, UserType} from "./friends";
// import axios from 'axios';
// import classes from "*.module.css";
// import userPhoto from '../../icons/userPhoto.png'
//
// type UsersSafeType={
//     users:UserType[],
//     follow: (id: number) => void,
//     unfollow: (id: number) => void
//     setUsers: (e: Array<FriendsPropsType>) => void
//
// }
// const UsersSafe=(props:UsersSafeType)=>{
//     const getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//     return(
//         <div>
// <button onClick={getUsers}>Get Users</button>
//             {
//                 props.users.map(el =>
//                     <div key={el.id}>
//                     <span>
//                         <div>
//                                <img className={classes.photo}
//                                     src={el.photo.small !== null ? el.photo.small : userPhoto}
//                                     alt={'photo'}/>
//                         </div>
//                         <div>
//                             {
//                                 el.follow ?
//                                     <button onClick={() => {
//                                         props.unfollow(el.id)
//                                     }}>Unfollow</button>
//                                     :
//                                     <button onClick={() => {
//                                         props.follow(el.id)
//                                     }}>Follow</button>
//                             }
//                         </div>
//                     </span>
//
//                         <span>
//                         <span>
//                             <div>{el.fullName}</div>
//                         </span>
//                         <span>
//                             <div>{"el.location.country"}</div>
//                             <div>{"el.location.city"}</div>
//                         </span>
//                     </span>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }
//
// export default UsersSafe;