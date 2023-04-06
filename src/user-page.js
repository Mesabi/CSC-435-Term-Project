import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './login-page.css';

const UserPage = () => {
    const [username, setUsername] = useState('John'); // set the default username to "John"
    //this is the wrong way to do this, but keeping this until MongoDB is set up.
    const [name, setName] = useState('John');
    const [phone, setPhone] = useState('555'); 
    const [email, setEmail] = useState('John@john.com'); 

    // Fetch user data from MongoDB based on the provided username

    return (

<><div>
      <div style={{ float: 'left', paddingRight: '20px' }}>
      <img src="logo192.png" alt="Description of the image" width="100" height="100"/>
      <div className="card">
      <div className="card-head">
        <h1>Actions</h1>
        </div>
        <div className="card-body">
      <div>
        <form>
        <label for="search">Search:</label>
        <br></br>
        <input type="text" id="search" name="search" style={{ width: "100px", height: "30px" }} />
        <button type="submit">Go</button>
        </form>
        <button>My Orders</button>
        <br></br>
        <button>My Wishlist</button>
        <br></br>
        <button>Placeholder</button>
      </div>
      </div>
      </div>
      </div>
      <div>
      <div className="card">
        <div className="card-body">
        <h1>Welcome, {username}!</h1>
        <p>Here are your details:</p>
        <ul>
          <li>Full Name: {name}</li>
          <li>Phone: {phone}</li>
          <li>Email: {email}</li>
        </ul>
      </div>
      </div>
      </div>
 
    </div>
</>
    );





};

export default UserPage;
