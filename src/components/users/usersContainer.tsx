import React from "react";
import {AppStateType} from "../State/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUSersCount,
    setUsersAC, toggleFollowingProgressAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../State/friendsReduser";
import {connect} from "react-redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Staff/preloader";
import {getUsers} from "../API/api";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching:boolean,
    followInProgress:number[]

}

// type MapDispatchPropsType = {
//     follow: (userID: number) => void,
//     unfollow: (userId: number) => void,
//     setUsers: (users: Array<UserType>) => void,
//     setTotalUsersCount: (totalUsersCount: number) => void,
//     setCurrentPage: (pageNumber: number) => void,
//     toggleIsFetching:(isFetching:boolean)=>void,
//     toggleFollowingProgress:(isFetching:boolean)=>void
// }

export type UserType = {
    id: number,
    photo: string,
    name: string,
    location: {
        country: string
        city: string
    },
    followed: boolean
}

export type FriendsPropsType = {
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void
    setUsers: (e: Array<UserType>) => void
    pageSize: number,
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean,id:number) =>void,
    followInProgress: number[]
}
const mapStateProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching:state.friendsPage.isFetching,
        followInProgress:state.friendsPage.followInProgress,
    }

}

//


class UsersContainer extends React.Component<FriendsPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true}).
        then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
      getUsers(this.props.pageSize,this.props.currentPage).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <>
                {this.props.isFetching? <Preloader/>:null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followInProgress={this.props.followInProgress}
                />
            </>
        )
    }
}


export const UserContainer = connect(mapStateProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setTotalUsersCount: setTotalUSersCount,
    setCurrentPage: setCurrentPageAC,
    toggleIsFetching:toggleIsFetchingAC,
    toggleFollowingProgress:toggleFollowingProgressAC
})(UsersContainer)
