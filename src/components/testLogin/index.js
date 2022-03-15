import React from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Grid, TextField, Button, Typography } from "@mui/material";
import {Visibility,VisibilityOff} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  log: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 8px 69px #0000001A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    backgroundImage: `url("https://images.unsplash.com/photo-1483354483454-4cd359948304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const TestLogin = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    error: {
        email: "",
        password: "",
      },
  });

  const ValidateEmail = (email) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Boolean(re.test(email));
  };

  const handleChange = (key,value) => {
    if (key === "email") {
        ValidateEmail(value);
     }
    let error = values.error;
    error[key] = "";
    setValues({ ...values, [key]: value });
  };

  const isIamValideToLogin = () => {
    let isValid = true;
    let error = values.error;

    if (values.email === "") {
      isValid = false;
      error.email = "Enter Email";
    }
    if (values.password === "") {
      isValid = false;
      error.password = "Enter Password";
    }
    if (values.email !== "" && values.password !== "") {
      isValid = true;
    }
    if(ValidateEmail()===false){
        isValid = false;
        error.email = "Invalid Email";
    }
    setValues({ ...values, error });
    return isValid;
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const onSendLoginBtnClicked = () => {
    if (isIamValideToLogin()) {
       alert('Login In!!!')
    } else {
      return false;
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.container}
        style={{ width: "520px", height: "520px", flexDirection: "column" }}
        spacing={2}
      >
        <Grid item>
          <Avatar sx={{ width: 76, height: 76 }} />
        </Grid>
        <Grid item>
        <Typography variant="h4">Login</Typography>
        </Grid>
        <Grid item style={{ flexDirection: "column", display: "flex",width:"80%"}}>
          <label>Email ID</label>
          <TextField 
          value={values.email_id}
          onChange={(e)=>handleChange('email',e.target.value)}
          />
          {values.error.email !== "" &&
          <Typography style={{fontSize:"10px",color:"red"}}>{values.error.email}</Typography>
          }
        </Grid>
        <Grid item style={{ flexDirection: "column", display: "flex",width:"80%" }}>
          <label>Password</label>
          <TextField
            type= {values.showPassword ? 'text' :'password' }
            value={values.password}
            onChange={(e)=>handleChange('password',e.target.value)}
            InputProps={{
              endAdornment: 
              values.showPassword ? (
                <VisibilityOff onClick={handleClickShowPassword}/>
              ) : (
                <Visibility onClick={handleClickShowPassword}/>
              ),
            }}
          />
           {values.error.password !== "" &&
          <Typography style={{fontSize:"10px",color:"red"}}>{values.error.password}</Typography>
          }
        </Grid>
        <Grid item>
          <Typography
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Forgot Password?
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" onClick={onSendLoginBtnClicked}>
            Log In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
