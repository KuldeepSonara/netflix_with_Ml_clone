import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./page/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./page/userlist/UserList";
import  {User}  from "./page/user/User";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <div className="continer">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userid" element={<User/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
