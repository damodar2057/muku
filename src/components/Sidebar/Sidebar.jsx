import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ReportIcon from '@mui/icons-material/Report'
// import {
//     LineStyle,
//     Timeline,
//     TrendingUp,
//     PermIdentity,
//     Storefront,
//     AttachMoney,
//     BarChart,
//     MailOutline,
//     DynamicFeed,
//     ChatBubbleOutline,
//     WorkOutline,
//     Report,
//   } from "@material-ui/icons";
const Sidebar = () => {
  return (
   <div className="sidebar">
    <div className="sidebarWrapper">

        <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>

        <ul className="sidebarList">
            <li className="sidebarListItem">
                <LineStyleIcon className="sidebarIcon"/>
            Home
            </li>
            <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon"/>
            Analytics
            </li>
            <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon"/>
            Sales
            </li>
        </ul>
        <h3 className="sidebarTitle">Quick Menu
        </h3>

        <ul className="sidebarList">
            <li className="sidebarListItem">
                <PermIdentityIcon />
            Users
            </li>
            <li className="sidebarListItem">
                <StorefrontIcon />
         Products
            </li>
            <li className="sidebarListItem">
                <AttachMoneyIcon />
            Transcation
            </li>
            <li className="sidebarListItem">
                <BarChartIcon />
            Reports
            </li>
        </ul>
        <h3 className="sidebarTitle">Notifications</h3>

        <ul className="sidebarList">
            <li className="sidebarListItem">
                <MailOutlineIcon />
            Mail
            </li>
            <li className="sidebarListItem">
                <DynamicFeedIcon />
            Feedback
            </li>
            <li className="sidebarListItem">
                <ChatBubbleOutlineIcon />
            Messages
            </li>
        </ul>
        <h3 className="sidebarTitle">Staff</h3>

        <ul className="sidebarList">
            <li className="sidebarListItem">
                <WorkOutlineIcon />
            Manage
            </li>
            <li className="sidebarListItem">
                <TimelineIcon />
            Analytics
            </li>
            <li className="sidebarListItem">
                <ReportIcon />
            Reports
            </li>
        </ul>
        </div>
    </div>
   </div>

    )
}

export default Sidebar