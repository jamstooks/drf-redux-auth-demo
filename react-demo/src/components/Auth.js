import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

import "./Auth.css";

const styles = theme => ({
  card: {
    maxWidth: 275,
    margin: "auto"
  },
  chip: {
    margin: theme.spacing.unit
  },
  textField: {
    //   marginLeft: theme.spacing.unit,
    //   marginRight: theme.spacing.unit,
    //   width: 200,
  },
  container: {}
});

class Auth extends React.Component {
  handleLoginClick = event => {
    const username = this.username;
    const password = this.password;
    const creds = {
      username: username.value.trim(),
      password: password.value.trim()
    };
    this.props.loginUser(creds);
  };

  handleLogoutClick = event => {
    this.props.logoutUser();
  };

  getErrors = key => {
    let errorList = [];
    if (
      this.props.auth.errorMessage === undefined ||
      this.props.auth.errorMessage === null ||
      !(key in this.props.auth.errorMessage)
    ) {
      return "";
    }

    let errorArray = this.props.auth.errorMessage[key];

    errorArray.forEach(m => {
      errorList.push(
        <Typography className="error" gutterBottom>
          {m}
        </Typography>
      );
    });
    return errorList;
  };

  render() {
    const { classes } = this.props;
    let loading = (
      <div className="progress">
        <CircularProgress className="progress" color="secondary" size={40} />
      </div>
    );

    let login = (
      <form className={classes.container} noValidate autoComplete="off">
        {this.getErrors("non_field_errors")}
        <TextField
          inputRef={x => (this.username = x)}
          id="username"
          label="Username"
          autoComplete="off"
          className={classes.textField}
        />

        {this.getErrors("username")}
        <TextField
          inputRef={x => (this.password = x)}
          id="password"
          label="Password"
          autoComplete="off"
          className={classes.textField}
          type="password"
        />

        {this.getErrors("password")}
      </form>
    );
    let loginButton = (
      <Button onClick={event => this.handleLoginClick(event)}>Login</Button>
    );

    let logoutContent = (
      <Chip
        avatar={
          <Avatar>
            <Icon>account_circle</Icon>
          </Avatar>
        }
        label={this.props.auth.username}
        className={classes.chip}
      />
    );
    let logoutButton = (
      <Button onClick={event => this.handleLogoutClick(event)}>Logout</Button>
    );

    let authContent = this.props.auth.isAuthenticated ? logoutContent : login;
    let authAction = this.props.auth.isAuthenticated
      ? logoutButton
      : loginButton;
    if (this.props.auth.isFetching) {
      authContent = loading;
      authAction = "";
    }

    let subtitle = this.props.auth.isAuthenticated
      ? "Woot woot! You're logged in!"
      : "Hint: reactuser:reactpass";

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            <a href="https://github.com/jamstooks/drf-redux-auth">
              drf-redux-auth
            </a>
            <Icon className="lock-icon">lock</Icon>
          </Typography>
          <Typography className={classes.title} color="textSecondary">
            {subtitle}
          </Typography>
          {authContent}
        </CardContent>
        <CardActions>{authAction}</CardActions>
      </Card>
    );
  }
}

Auth.propTypes = {
  /**
   * the full auth state object for the sake of demo simplicity
   */
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequred,
  logoutUser: PropTypes.func.isRequired
};

export default withStyles(styles)(Auth);
