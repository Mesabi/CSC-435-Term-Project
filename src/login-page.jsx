import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './login-page.css';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: implement your login logic here

    setUsername('');
    setPassword('');
  };

  return (
    <><div class="container">
      <div class="row">
        <div class="col-sm-1">
        </div>
        <div class="col-sm-9">
        <div class="panel panel-default">
        <div class="panel-body">
          <div className="login-page">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
              </label>
              <br></br>
              <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
              </label>
              <br></br>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;