import React,{useState} from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Grid, TextField, Button, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { Routes } from "../../router/routes";

const useStyles = makeStyles((theme) => ({
  mainroot: {
    display: "flex",
    flexDirection: "row",
    overflowX: "hidden",
  },
  container: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "hidden",
  },
  image: {
    backgroundImage: `url("https://images.unsplash.com/photo-1483354483454-4cd359948304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "column",
    display: "flex",
  },
  underline: {
    textDecoration: "underline",
    cursor: "pointer",
  },
  forgetPassword: {
    float: "right",
    fontSize: "12px",
    textDecoration:"underline",
    cursor:"pointer",
    marginTop: "10px",
  },
}));

export const Login2 = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    error: {
      email: "",
      password: "",
    },
  });

  const ValidateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (key, value) => {
    if (key === "email") {
      if (ValidateEmail(value) === true) {
        let error = values.error;
        error[key] = "";
        setValues({ ...values, [key]: value });
      } else {
        let error = values.error;
        error[key] = "Invalid Email";
        setValues({ ...values, [key]: "" });
      }
    } else {
      let error = values.error;
      error[key] = "";
      setValues({ ...values, [key]: value });
    }
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
      history.push(Routes.home);
    } else {
      return false;
    }
  };

  return (
    <div className={classes.mainroot}>
      <Grid container xs={4} sm={6} md={6} lg={7} className={classes.image}></Grid>
      <Grid
        container
        xs={9}
        sm={7}
        md={6}
        spacing={0.99}
        lg={5}
        className={classes.container}
        style={{ flexDirection: "column" }}
      >
        <Grid item>
          <Avatar sx={{ width: 76, height: 76 }} />
        </Grid>
        <Grid item>
          <Typography variant="h4">Login</Typography>
        </Grid>
        <Grid item style={{ width: "80%" }}>
          <div className={classes.item}>
            <label>Email ID</label>
            <TextField
              value={values.email_id}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {values.error.email !== "" && (
              <Typography style={{ fontSize: "10px", color: "red" }}>
                {values.error.email}
              </Typography>
            )}
          </div>
        </Grid>
        <Grid item style={{ width: "80%" }}>
          <div className={classes.item}>
            <label>Password</label>
            <TextField
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={(e) => handleChange("password", e.target.value)}
              InputProps={{
                endAdornment: values.showPassword ? (
                  <VisibilityOff
                    onClick={handleClickShowPassword}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <Visibility
                    onClick={handleClickShowPassword}
                    style={{ cursor: "pointer" }}
                  />
                ),
              }}
            />
            {values.error.password !== "" && (
              <Typography style={{ fontSize: "10px", color: "red" }}>
                {values.error.password}
              </Typography>
            )}
          </div>
            <span
              className={classes.forgetPassword}
            >
              <Typography variant="subtitle2">
                 Forget your password?
              </Typography>
            </span>
        </Grid>
        <Grid item style={{ width: "80%" }}>
          <div className={classes.item}>
            <Button
              variant="contained"
              size="large"
              onClick={onSendLoginBtnClicked}
            >
              LogIn
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
