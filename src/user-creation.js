import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './user-creation.css';
import { GlobalStyle, Fieldset, Button, Checkbox, TitleBar, ThemeProvider, table } from '@react95/core';
import '@react95/icons/icons.css';

const CreateNewUser = () => {

    const [username, setUsername] = useState('John'); // set the default username to "John"
    //this is the wrong way to do this, but keeping this until MongoDB is set up.
    const [fName, setFName] = useState('John');
    const [lName, setLName] = useState('John');
    const [phone, setPhone] = useState('555'); 
    const [email, setEmail] = useState('John@john.com'); 
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
      };

    return (
        <>
        <ThemeProvider>
            <GlobalStyle></GlobalStyle>
            <TitleBar></TitleBar>
            <Fieldset>
          <div className="card">
            <div className="card-head">
              <h1>Create New User</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <label htmlFor="UserName">UserName:</label>
                <br />
                <input
                  type="text"
                  id="UserName"
                  name="UserName"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="FName">First Name:</label>
                <br />
                <input
                  type="text"
                  id="search"
                  name="FName"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
                <br />
                <label htmlFor="LName">Last Name:</label>
                <br />
                <input
                  type="text"
                  id="search"
                  name="LName"
                  onChange={(e) => setLName(e.target.value)}
                />
                <br />
                <label htmlFor="Address">Address:</label>
                <br />
                <input
                  type="text"
                  id="search"
                  name="Address"
                />
                <br />
                <label htmlFor="Phone">Phone:</label>
                <br />
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <label htmlFor="Email">Email:</label>
                <br />
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          </Fieldset>
          {submitted && (
            <div className="card">
              <div className="card-body">
                <h1>This is the information for {username}!</h1>
                <p>This will be converted to a database object later!</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Full Name:</td>
                      <td>{fName} {lName}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>{phone}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          </ThemeProvider>
        </>
      );
 
}

export default CreateNewUser;