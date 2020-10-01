import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Settings from "./components/Settings";
import Message from "./components/Message";

const Menu =()=>{
    return <div className="nav flex-column nav-pills" aria-orientation="vertical">
        <NavLink className="nav-Link" to="profile">Профиль</NavLink>
        <NavLink className="nav-Link" to="message">Сообщения</NavLink>
        <NavLink className="nav-Link" to="settings">Настройки</NavLink>
        <NavLink className="nav-Link" to="friends">Мои друзья</NavLink>
    </div>
}
function App(props) {
  return (
      <div className="container-fluid">
          <BrowserRouter>
              <div className="row">
                  <div className="col-sm-3">
                    <Menu/>
                  </div>
                  <div className="col-sm-9">
                          <Route path="/profile" render={()=><Profile function={props.functions.key_getUser}/>}/>
                          <Route path="/message" component={Message}/>
                          <Route path="/settings"component={Settings}/>
                          <Route path="/friends" render={()=><Friends function={props.functions.key_getUsers}/>}/>
                  </div>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
