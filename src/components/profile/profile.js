import React from 'react';
import './profile.scss';
import AvatarImage from '../../avatar.png';

const Profile = () =>{
    return(
        <div className="profile-section">
            <img src={AvatarImage} alt=""/>
            <h1>@ccao2776</h1>
            <h1> PROFILE HERE</h1>
        </div>
    );
}

export default Profile;