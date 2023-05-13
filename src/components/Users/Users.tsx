import React from 'react';
import styles from "./users.module.css";
import {UserType} from "../../Redux/UsersReducer";
import userPhoto from "../../images/user.png"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (numberPage: number) => void
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // console.log("pagesCount" + pagesCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {/*<Stack spacing={2}>*/}
            {/*    <Pagination count={pagesCount}  o shape="rounded"/>*/}
            {/*    /!*<Pagination count={10} variant="outlined" shape="rounded" />*!/*/}
            {/*</Stack>*/}
            <div className={styles.pagination}>
                {pages.map((p, i) => {
                    return (
                        <span key={i}
                              className={props.currentPage === p ?
                                  styles.selectedPage : styles.pageItem}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p}</span>
                    )
                })
                }
            </div>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={styles.wrapper}>
                      <span>
                          <div>
                              <NavLink to={'/profile/'+u.id}>
                                  <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                       className={styles.usersPhoto}/>
                              </NavLink>

                          </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials: true,
                                      headers: {
                                          "API-KEY":"6374f075-bf86-4bb0-8373-5c8db4a2da08"}})
                                          .then(response => {
                                              if(response.data.resultCode===0) {
                                                  props.unfollow(u.id)
                                              }
                                          })

                                  }}>Unfollow</button>
                                  : <button onClick={() => {
                                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials: true,headers: {
                                              "API-KEY":"6374f075-bf86-4bb0-8373-5c8db4a2da08"}})
                                          .then(response => {
                                             if(response.data.resultCode===0) {
                                                 props.follow(u.id)
                                             }
                                          })

                                  }}>Follow</button>}
                          </div>
                      </span>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    )
}