import React from "react";
import {AppStateType} from "../State/redux-store";
import {
    followSucAC, getUsersThunkCreator,
    setCurrentPageAC,
    setTotalUsersCountAC,
     toggleFollowingProgressAC, unfollowSucAC} from "../State/friendsReduser";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../Staff/preloader";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching:boolean,
    followInProgress:number[]

}

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
    pageSize: number,
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    toggleFollowingProgress: (isFetching: boolean,id:number) =>void,
    followInProgress: number[],
    getUsers: (currentPage: number, pageSize: number) => void
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


class UsersContainer extends React.Component<FriendsPropsType> {

    componentDidMount()

    {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
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
    follow: followSucAC,
    unfollow: unfollowSucAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setCurrentPage: setCurrentPageAC,
    toggleFollowingProgress:toggleFollowingProgressAC,
    getUsers:getUsersThunkCreator
})(UsersContainer)
