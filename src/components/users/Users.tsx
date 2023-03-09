import React from "react";
import s from "./friends.module.css";
import userPhoto from "../../icons/userPhoto.png";
import {UserType} from "./usersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";



type UsersType={
    pageSize: number,
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    totalUsersCount: number,
    onPageChanged:(pageNumber:number)=>void,
    currentPage: number
    toggleFollowingProgress:(isFetching:boolean,id:number)=>void,
    followInProgress:number[]
}


export const Users=(props:UsersType)=>{

    let pagesCount=Math.ceil((props.totalUsersCount>54?54:props.totalUsersCount)/props.pageSize)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }
console.log(props.users)
    return(

        <>
            <div>
                {pages.map(el => {
                    return <span onClick={() => {
                        props.onPageChanged(el)
                    }} className={props.currentPage === el?'selectedPage': ''}>{el} </span>
                })}
            </div>

            <div>


                {props.users.map(f =>
                        <div key={f.id}>
          <span>
           <span>
               <div className={s.avatar}>
                   <NavLink to={'./profile/'+f.id}>
                      <img src={f.photo !=null?f.photo :userPhoto} />
                   </NavLink>

               </div>
               <div>{

                   f.followed?
                       <button

                           onClick={()=>{
                           props.toggleFollowingProgress(true,f.id)

                           axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`,{},{withCredentials: true,
                               headers:{
                                   'API-KEY':'04179916-1cd9-4a8d-bea3-202ee52f7094',
                               }
                           }).then(response => {
                           if (response.data.resultCode ==0){props.follow(f.id)}
                               props.toggleFollowingProgress(false,f.id)

                           })

                       props.unfollow(f.id)}}
                       >Unfollow</button>:
                       <button onClick={()=>{
                           props.toggleFollowingProgress(true,f.id)

                           axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`,{withCredentials: true,
                           headers:{
                               'API-KEY':'04179916-1cd9-4a8d-bea3-202ee52f7094',
                           }
                           }).then(response => {
                               if (response.data.resultCode ==0)
                               {props.unfollow(f.id)}

                               props.toggleFollowingProgress(false,f.id)
                           })

                           props.follow(f.id)
                           }}>Follow</button>
               }</div>

           </span>
<span>
    <div>{f.name}</div>
    <div>{f.location?.city}</div>
    <div>{f.location?.country}</div>
</span>
        </span>
                        </div>
                )}


            </div>
        </>


    )

}