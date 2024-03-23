import React from 'react'
import "./Sidebar.scss"
import{AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline} from "@mui/icons-material"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon"/>
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Salas
                </li>
            </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon"/>
                    User
                </li>
                <li className="sidebarListItem">
                    <Storefront className="sidebarIcon"/>
                    Products
                </li>
                <li className="sidebarListItem">
                    <AttachMoney className="sidebarIcon"/>
                    Transactions
                </li>
                <li className="sidebarListItem">
                    <BarChart className="sidebarIcon"/>
                    Report
                </li>
            </ul>
        </div>
      </div> 
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem ">
                    <MailOutline className="sidebarIcon"/>
                    Mail
                </li>
                <li className="sidebarListItem">
                    <DynamicFeed className="sidebarIcon"/>
                    Feedback
                </li>
                <li className="sidebarListItem">
                    <ChatBubbleOutline className="sidebarIcon"/>
                    Maddages
                </li>
            </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">staff</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    Manage
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <Report className="sidebarIcon"/>
                    Reports
                </li>
            </ul>
        </div>
      </div> 
    </div>
  )
}

export default Sidebar
