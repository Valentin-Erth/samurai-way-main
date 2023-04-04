import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from "./users.module.css"
import axios from "axios";
import userPhoto from "../../images/user.png"

export class Users extends React.Component<UsersPropsType> {
    constructor(props:any) {
        super(props);
        alert("New")
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <div>
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