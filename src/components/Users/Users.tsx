import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from "./users.module.css"
import {v1} from "uuid";
import axios from "axios";
import userPhoto from "../../images/user.png"

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            // debugger
            props.setUsers(response.data.items);
        })

    }
    return (
        <div>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={styles.wrapper}>
                      <span>
                          <div>
                              <img src={u.photos.small !=null? u.photos.small: userPhoto} className={styles.usersPhoto}/>
                          </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      props.unfollow(u.id)
                                  }}>Unfollow</button>
                                  : <button onClick={() => {
                                      props.follow(u.id)
                                  }}>Follow</button>}
                          </div>
                      </span>
                        <div className={styles.items}>
                          <div   className={styles.item}>
                          <div>{u.name}</div>
                          <div>{u.status}</div>
                      </div>
                            <div >
                          <div>{"u.location.country"}</div>
                          <div>{"u.location.city"}</div>
                          </div>
                        </div>

                    </div>)
            })
            }
        </div>
    );
};


