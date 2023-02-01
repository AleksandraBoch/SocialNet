import React from "react";
import s from './friends.module.css'
import axios from'axios'
import userPhoto from '../../icons/userPhoto.png'


export type UserType={
    id: number,
    photo: string
    fullName: string,
    location: {
        country: string
        city: string
},
    follow:boolean
}

type FriendsPropsType ={
    users:UserType[],
    follow:(id:number)=>void,
    unfollow:(id:number)=>void
    setUsers:(e:Array<UserType>)=>void
}


class Friends extends React.Component<FriendsPropsType> {

    componentDidMount() {


    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })

}}

render() {
    return (
    <div>

    <button onClick={getUsers}>Get Users</button>
    <div>


        {props.users.map(f =>
        <div key={f.id}>
          <span>
           <span>
               <div className={s.avatar}>
                   <img src={userPhoto} />
               </div>
               <div>{
                   f.follow?<button onClick={()=>{props.follow(f.id)}}>Follow</button>:
                       <button onClick={()=>{props.unfollow(f.id)}}>Unfollow</button>
               }</div>

           </span>
<span>
    <div>{f.fullName}</div>
    <div>{f.location.city}</div>
    <div>{f.location.country}</div>
</span>
        </span>
        </div>
        )}


    </div></div>
)}
export default Friends