import React from "react";
import { LoginSuccess } from "../../router/access";
import { LocalStorageKeys } from "../../utils";
import { Login2 } from "./login2";
import { withRouter } from 'react-router-dom';

class Login2Parent extends React.Component {

    componentDidMount(){
        if(localStorage.getItem(LocalStorageKeys.authToken)){
            this.props.history.push(LoginSuccess())
        }
    }

    render() {
        return <Login2 />;
    }
}

export default withRouter(Login2Parent);
