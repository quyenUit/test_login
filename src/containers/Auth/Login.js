import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.css";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "quyenuit",
      password: "12345",
    };
  }
  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
    //console.log(event.target.value);
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = () => {
    alert("quyenuit");
  };

  render() {
    //jsx
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
              />
            </div>

            <div className="col-12 form-group login-input">
              <label>Password:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your password"
                onChange={(event) => {
                  this.handleOnChangePassword(event);
                }}
              />
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Log in
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password</span>
            </div>
            <div className="col-12 text-center mt-5">
              <span className="text-other-login">Or Login with:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //   const mapStateToProps = (state) => {
  //     return {
  //       language: state.app.language,
  //     };
  //   };

  //   const mapDispatchToProps = (dispatch) => {
  //     return {
  //       navigate: (path) => dispatch(push(path)),
  //       adminLoginSuccess: (adminInfo) =>
  //         dispatch(actions.adminLoginSuccess(adminInfo)),
  //       adminLoginFail: () => dispatch(actions.adminLoginFail()),
  //     };
  //   };
}
export default Login;
