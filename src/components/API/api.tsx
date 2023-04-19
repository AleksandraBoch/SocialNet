import React from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '04179916-1cd9-4a8d-bea3-202ee52f7094',
    }

})

export const UsersAPI = {
    getUsers: (pageNumber: number, pageSize: number) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`,
        ).then(response => {
            return response.data
        })},
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`)},
    unfollow: (userId: number) => {
        return instance.post(`follow/${userId}`)},

getProfile:(userId: number)=>{
        console.warn('use ProfileApi obj')
   return ProfileAPI.getProfile(userId)
}};

export const ProfileAPI = {
    getProfile:(userId: number)=>{
        return instance.get(`profile/${userId}`)},
    getStatus:(userId:number)=>{
        return instance.get(`status/${userId}`)
    },
    updateStatus:(status:string)=>{
        return instance.put(`status`,{status:status})
    }
}
export const  authAPI={
    me() {return instance.get(`auth/me`,)
}}