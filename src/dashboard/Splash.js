import React, {Component} from 'react';
import BikeLogIndex from './BikeLogIndex';

const Splash = (props) => {
    return(
        <div>
            <br/>
            <BikeLogIndex token={props.token} />
        </div>
    )
}

export default Splash;