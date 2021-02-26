import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
 
    return(
        <div className = "sidebar">
            <div className="sidebar__top">
                <img src="https://thumbs.dreamstime.com/b/autumn-thanksgiving-background-pumpkins-maple-leaves-turquoise-table-above-autumn-thanksgiving-background-pumpkins-160472384.jpg" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.displayName[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,488</p>
            </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareEngineering')}
                {recentItem('design')}
            </div>
        </div>
    )
}

export default Sidebar;