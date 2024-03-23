import React from 'react'
import "./Topbar.scss"
import { NotificationsNoneOutlined, Language, Settings } from '@mui/icons-material';
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topLeft">
              <span className="logo">
                netflix admin
              </span>
            </div>
            <div className="topRight">
              <div className="topbarIconContiner">
              <NotificationsNoneOutlined/>
              <span className="topIconBag">2</span>
              </div>
              <div className="topbarIconContiner">
              <Language/>
              </div>
              <div className="topbarIconContiner">
              <Settings />
              </div>
              <img src="https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar