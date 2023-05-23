import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
    follow(id: string) {
        return instance.post(`follow/${id}`, {})
            .then((res) => res.data)
    },
    unfollow(id: string) {
        return instance.delete(`follow/${id}`)
            .then((res) => res.data)
    },
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then((res) => res.data)
    },
    getStatus(userId: string) {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status`, {status: status})
    }
}
export const authAPI = {
    getAuthMe() {
        return instance.get<ResponseType<dataAuthResponseType>>(`auth/me`)
            .then((res) => res.data)
    }
}

//types
export type ResponseType<T={}>={
    resultCode: number
    messages: Array<string>,
    data: T
}
type dataAuthResponseType={
    id:number
    email: string
    login: string
}