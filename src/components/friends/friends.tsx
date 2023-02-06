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
    pageSize:number,
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (TotalUsersCount: number) => void
    totalUsersCount: number,
    currentPage: number
}


class Friends extends React.Component<FriendsPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }



render() {

    let pagesCount=Math.ceil((this.props.totalUsersCount>54?54:this.props.totalUsersCount)/this.props.pageSize)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }

    return (
    <div>
        <div>
            {pages.map(el => {
                return <span onClick={() => {
                    this.onPageChanged(el)
                }} className={this.props.currentPage === el ?'selectedPage': ''}>{el} </span>
            })}
        </div>
    {/*<button onClick={getUsers}>Get Users</button>*/}
    <div>


        {this.props.users.map(f =>
        <div key={f.id}>
          <span>
           <span>
               <div className={s.avatar}>
                   <img src={userPhoto} />
               </div>
               <div>{
                   f.follow?<button onClick={()=>{this.props.follow(f.id)}}>Follow</button>:
                       <button onClick={()=>{this.props.unfollow(f.id)}}>Unfollow</button>
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
)}}

export default Friends