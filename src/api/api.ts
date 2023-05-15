import axios from "axios";

const instance= axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
})
export const usersAPI={
    getUsers(currentPage:number,pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response)=> {
                return  response.data
            })
    },
    getUsers2(currentPage:number,pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response)=> {
                return  response.data
            })
    }
}
export const followAPI={
    follow(id:string){
        return instance.post(`follow/${id}`,{})
            .then((res)=>res.data)
    },
    unfollow(id:string){
        return instance.delete(`follow/${id}`)
            .then((res)=>res.data)
    }
}
export const profileAPI={
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
            .then((res)=>res.data)
    }
}
export const authAPI={
    getAuth(){
        return instance.get(`auth/me`)
            .then((res)=>res.data)
    }
}

