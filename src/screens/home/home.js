import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { LocalStorageKeys } from '../../utils';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../router/routes';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: "20%"
    }
}))

export const Home = props => {

    const history = useHistory();
    const classes = useStyles();

    const onLogOut = () => {
        history.push(Routes.login);
    }
    
    const onLogOut2 = () => {
        history.push(Routes.login2);
    }

    const onLogOut3 = () => {
        history.push(Routes.login3);
    }

    const onLogOut4 = () => {
        history.push(Routes.login4);
    }

    return <div className={classes.root}>
        <Button
            variant={"contained"}
            color={"primary"}
            onClick={onLogOut}
        >
            Login Screen 1
        </Button>
        <Button
            variant={"contained"}
            color={"primary"}
            onClick={onLogOut2}
        >
            Login Screen 2
        </Button>
        <Button
            variant={"contained"}
            color={"primary"}
            onClick={onLogOut3}
        >
            Login Screen 3
        </Button>
        <Button
            variant={"contained"}
            color={"primary"}
            onClick={onLogOut4}
        >
            Login Screen 4
        </Button>
    </div>
}