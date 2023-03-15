import React from "react";
import s from "./friends.module.css";
import userPhoto from "../../icons/userPhoto.png";
import {UserType} from "./usersContainer";
import {NavLink} from "react-router-dom";

type UsersType = {
    pageSize: number,
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    totalUsersCount: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number
    toggleFollowingProgress: (isFetching: boolean, id: number) => void,
    followInProgress: number[]

}


export const Users = (props: UsersType) => {

    let pagesCount = Math.ceil((props.totalUsersCount > 54 ? 54 : props.totalUsersCount) / props.pageSize)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }
    console.log(props.users)
    return (

        <>
            <div>
                {pages.map(el => {
                    return <span onClick={() => {
                        props.onPageChanged(el)
                    }} className={props.currentPage === el ? 'selectedPage' : ''}>{el} </span>
                })}
            </div>

            <div>


                {props.users.map(f =>
                        <div key={f.id}>
          <span>
           <span>
               <div className={s.avatar}>
                   <NavLink to={'./profile/' + f.id}>
                      <img src={f.photo != null ? f.photo : userPhoto}/>
                   </NavLink>

               </div>
               <div>{

                   f.followed ?
                       <button

                           onClick={() => {
                               props.unfollow(f.id)
                               props.unfollow(f.id)
                           }}
                       >Unfollow</button> :
                       <button onClick={() => {
                           props.follow(f.id)
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