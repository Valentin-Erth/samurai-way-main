import React, {ChangeEvent} from 'react';
import styles from "./users.module.css";
import {UserType} from "../../Redux/UsersReducer";
import userPhoto from "../../images/user.png"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (numberPage: number) => void
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: Array<string>

}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // console.log("pagesCount" + pagesCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onChangeCallback = (e:ChangeEvent<unknown>, page:number) => {
        // console.log(page)
        props.onPageChanged(page)
    }

    return (
        <div>
            <Pagination count={pagesCount} page={props.currentPage} onChange={onChangeCallback} shape="circular"
                        color={"primary"}/>

            {/*<div className={styles.pagination}>*/}
            {/*    {pages.map((p, i) => {*/}
            {/*        return (*/}
            {/*            <span key={i}*/}
            {/*                  className={props.currentPage === p ?*/}
            {/*                      styles.selectedPage : styles.pageItem}*/}
            {/*                  onClick={(e) => {*/}
            {/*                      props.onPageChanged(p)*/}
            {/*                  }}>{p}</span>*/}
            {/*        )*/}
            {/*    })*/}
            {/*    }*/}
            {/*</div>*/}
            {props.users.map(u => {
                return (
                    <div key={u.id} className={styles.wrapper}>
                      <span>
                          <div>
                              <NavLink to={'/profile/' + u.id}>
                                  <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                       className={styles.usersPhoto}/>
                              </NavLink>

                          </div>
                          <div>
                              {u.followed
                                  ?
                                  <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                      props.toggleFollowingProgress(true, u.id)
                                      followAPI.unfollow(u.id)
                                          .then(data => {
                                              // debugger
                                              if (data.resultCode === 0) {
                                                  props.unfollow(u.id)
                                              }
                                              props.toggleFollowingProgress(false, u.id)
                                          })

                                  }}>Unfollow</button>
                                  :
                                  <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                      props.toggleFollowingProgress(true, u.id)
                                      followAPI.follow(u.id)
                                          .then(data => {
                                              if (data.resultCode === 0) {
                                                  props.follow(u.id)
                                              }
                                              props.toggleFollowingProgress(false, u.id)
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