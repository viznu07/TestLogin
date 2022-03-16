import React from "react";
import { LoginSuccess } from "../../router/access";
import { LocalStorageKeys } from "../../utils";
import { Login4 } from "./login4";
import { withRouter } from 'react-router-dom';

class Login4Parent extends React.Component {

    componentDidMount(){
        if(localStorage.getItem(LocalStorageKeys.authToken)){
            this.props.history.push(LoginSuccess())
        }
    }

    render() {
        return <Login4 />;
    }
}

export default withRouter(Login4Parent);
