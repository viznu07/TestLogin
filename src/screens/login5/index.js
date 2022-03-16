import React from "react";
import { LoginSuccess } from "../../router/access";
import { LocalStorageKeys } from "../../utils";
import { Login5 } from "./login5";
import { withRouter } from 'react-router-dom';

class Login5Parent extends React.Component {

    componentDidMount(){
        if(localStorage.getItem(LocalStorageKeys.authToken)){
            this.props.history.push(LoginSuccess())
        }
    }

    render() {
        return <Login5 />;
    }
}

export default withRouter(Login5Parent);
