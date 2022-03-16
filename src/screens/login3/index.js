import React from "react";
import { LoginSuccess } from "../../router/access";
import { LocalStorageKeys } from "../../utils";
import { Login3 } from "./login3";
import { withRouter } from 'react-router-dom';

class Login3Parent extends React.Component {

    componentDidMount(){
        if(localStorage.getItem(LocalStorageKeys.authToken)){
            this.props.history.push(LoginSuccess())
        }
    }

    render() {
        return <Login3 />;
    }
}

export default withRouter(Login3Parent);
