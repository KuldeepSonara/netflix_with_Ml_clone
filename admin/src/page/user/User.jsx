import "./User.scss";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid }from "@mui/icons-material";

export const User = () => {
    const IMG = "https://i.pinimg.com/564x/29/ca/0e/29ca0e9c19284d3131d815f9c262efeb.jpg"
  return (
    <div className="user">
        <div className="userTitleConstainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={IMG} alt="" className="userShowImg" />
                    <div className="usershowTopTitle">
                        <span className="userShowUsernName">Kuldeep Sonara</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowButtom">
                    <span className="userShowTitle">Account Detalis</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">Kuldeep_Sonara.24</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">kuldeepsonar5@kkal.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                            type="text" 
                            placeholder="Kuldeep_Sonara.24" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input
                            type="text"
                            placeholder="Anna Becker"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input
                            type="text"
                            placeholder="kuldeepsonar5@kkal.com"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input
                            type="text"
                            placeholder="+1 123 456 67"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input
                            type="text"
                            placeholder="New York | USA"
                            className="userUpdateInput"
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={IMG} alt="" className="userUpdateImg" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
