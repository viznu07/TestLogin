import React from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { LocalStorageKeys } from "../../utils";
import { useHistory } from "react-router-dom";
import { Routes } from "../../router/routes";
import { TestLogin } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TestLogin/>
    </div>
  );
};
