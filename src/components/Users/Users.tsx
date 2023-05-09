import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from "./users.module.css"
import axios from "axios";
import userPhoto from "../../images/user.png"

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log(response.data.totalCount)
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        console.log("pagesCount" + pagesCount)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>

                    {pages.map((p, i) => {
                        return (
                            <span key={i} className={this.props.currentPage === p ?
                                styles.selectedPage : styles.numberPage}
                                  onClick={(event) => {
                                      this.onPageChanged(p)
                                  }}>{p}</span>
                        )
                    })
                    }

                </div>
                {this.props.users.map(u => {
                    return (
                        <div key={u.id} className={styles.wrapper}>
                      <span>
                          <div>
                              <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                   className={styles.usersPhoto}/>
                          </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      this.props.unfollow(u.id)
                                  }}>Unfollow</button>
                                  : <button onClick={() => {
                                      this.props.follow(u.id)
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
                })
                }
            </div>
        );
    }
}