import React from 'react';
import img from '../images/img.jpg'

export const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src={img} alt="img" />
            </div>
            <div>
                ava+description
            </div>
            <div>
                My Post
                <div>
                    New Post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}