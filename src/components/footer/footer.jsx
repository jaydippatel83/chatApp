import { Component } from "react";
import React from "react";
import AddUser from "../userlist/adduser";
import MsgBox from "../chatbox/msgbox";

class Footer extends Component {
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 p-0 m-0">
                        <AddUser />
                    </div>
                    <div className="col-9  p-0 m-0">
                        <MsgBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;