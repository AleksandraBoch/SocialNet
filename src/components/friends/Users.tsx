import React from "react";
import s from "./friends.module.css";
import userPhoto from "../../icons/userPhoto.png";
import {UserType} from "./friendsAPI";


type UsersType={
    pageSize: number,
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    totalUsersCount: number,
    onPageChanged:(pageNumber:number)=>void,
    currentPage: number
}


export const Users=(props:UsersType)=>{

    let pagesCount=Math.ceil((props.totalUsersCount>54?54:props.totalUsersCount)/props.pageSize)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }



    return(
        <>
            <div>
                {pages.map(el => {
                    return <span onClick={() => {
                        props.onPageChanged(el)
                    }} className={props.currentPage === el ?'selectedPage': ''}>{el} </span>
                })}
            </div>
            {/*<button onClick={getUsers}>Get Users</button>*/}
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


            </div>
        </>
    )

}