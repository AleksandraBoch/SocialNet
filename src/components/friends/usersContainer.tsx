import React from "react";
import {AppStateType} from "../State/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUSersCount,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../State/friendsReduser";
import {connect} from "react-redux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Staff/preloader";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching:boolean
}

type MapDispatchPropsType = {
    follow: (userID: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    toggleIsFetching:(isFetching:boolean)=>void
}

export type UserType = {
    id: number,
    photo: string,
    name: string,
    location: {
        country: string
        city: string
    },
    follow: boolean
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
    isFetching:boolean,
    toggleIsFetching:(isFetching:boolean)=>void
}

const mapStateProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching:state.friendsPage.isFetching
    }

}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUSersCount(totalUsersCount))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toggleIsFetching:(isFetching:boolean)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}


class UsersContainer extends React.Component<FriendsPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
        then(response => {
            this.props.toggleIsFetching(false)
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
                />
            </>
        )
    }
}


export const UserContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setTotalUsersCount: setTotalUSersCount,
    setCurrentPage: setCurrentPageAC,
    toggleIsFetching:toggleIsFetchingAC
})(UsersContainer)
