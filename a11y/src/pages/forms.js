import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div className="Form">
                <div className="header">
                    <h1>Sign Up</h1>
                    <h2>Please fill up this form to create an account</h2>
                </div>
                <div className="form1">
                <form id="form1">
  <p>
    <label for="firstname">First Name:</label>
    <input type="text" id="firstname" name="firstname"></input>
  </p>
  <p>
    <label for="lastname">Last Name:</label>
    <input type="text" id="lastname" name="lastname"></input>
  </p>
  <p>
    <label for="email"> Email: </label>
    <input type="text" id="email" name="email"></input>
  </p>
  <p>
  <label for="password"> Password: </label>
   <input type="text" id="password" name="password"></input>
  </p>
  <p>
  <label for="cpassword"> Confirm Password: </label>
  <input type="text" id="cpassword"  name="cpassword"></input>
  </p>
<button type="submit" form="form1" value="submit" aria-label="sign up button">Sign Up</button>    
</form>
                </div>
            </div>
        );
    }
}

export default Form;
