import React from "react";

const Login = () => {
  return (
    <div className="loginPage">
      <form>
        <label>Username</label>
        <input type="text" />
        <br />
        <label>Password</label>
        <input type="password" />
      </form>
    </div>
  );
};

export default Login;
