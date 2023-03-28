import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from "./users.module.css"
import {v1} from "uuid";

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: "https://avavatar.ru/images/full/16/r9r0CWWXfXc114Vn.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "Boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: v1(),
                photoUrl: "https://i.pinimg.com/736x/a0/4c/fd/a04cfd0201dfffcfab55eeb3ce7fb445.jpg",
                followed: true,
                fullName: "Kate",
                status: "Specialist",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: v1(),
                photoUrl: "https://i.pinimg.com/736x/ad/96/d7/ad96d7bea09619a1d80f81a17879126a.jpg",
                followed: true,
                fullName: "Valera",
                status: "Trainee",
                location: {city: "Kiev", country: "Ukraine"}
            }])
    }

    return (
        <div>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={styles.wrapper}>
                      <span>
                          <div>
                              <img src={u.photoUrl} className={styles.usersPhoto}/>
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
                          <div>{u.fullName}</div>
                          <div>{u.status}</div>
                      </div>
                            <div >
                          <div>{u.location.country}</div>
                          <div>{u.location.city}</div>
                          </div>
                        </div>

                    </div>)
            })
            }
        </div>
    );
};


