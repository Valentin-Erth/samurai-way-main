import React from 'react';
import preloader from "../../../images/preloader-4.gif";

export const Preloader = () => {
    return (
        <div>
            <img style={{width:"80px", height:"80px"}} src={preloader}/>
        </div>
    );
};

