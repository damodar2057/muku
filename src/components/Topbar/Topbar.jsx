import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar= () => {
  return (
    <div className="topbar">
        <div className="topbar-wrapper">
            <div className="top-left">
                <span className="logo">DamuAdmin</span>
            </div>
            <div className="top-right">
                <div className="topbarIconContainer">
                <NotificationsIcon />
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <LanguageIcon />
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <SettingsIcon />
                </div>
                <img className="topAvatar" src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-1065084.jpg&fm=jpg&_gl=1*f6mlyf*_ga*MTA0MzgxNDg4Ni4xNjY3OTc2Mzk2*_ga_8JE65Q40S6*MTY2Nzk3NjQwNC4xLjEuMTY2Nzk3NjY4MS4wLjAuMA.."
                    alt="" />


            </div>
        </div>
    </div>
 
    )
}

export default Topbar