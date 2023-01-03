import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import User from "../../components/User";

import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="line"></div>
        <div className="main">
          <User />
        </div>
      </div>
    );
  }
}
