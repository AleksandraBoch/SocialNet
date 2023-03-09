import React from "react";
import axios from "axios";

const instance=axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers:{
        'API-KEY':'04179916-1cd9-4a8d-bea3-202ee52f7094',
    }

})



export const getUsers=(pageNumber:number,pageSize:number)=>{
    return   instance.get(`users?page=${pageNumber}&count=${pageSize}`,
        {})
}

// export const unfollow=()=>{return
//     instance.post(`follow/${f.id}`,{})
//
// }
export const follow=()=>{

}