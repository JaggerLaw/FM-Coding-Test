import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
    <div>
        <form>
            <div>
        <div>
            <label>First Name</label>
            <br/>
          <input type="text" name="name"></input>
        </div>
        <div>
            <label>Last Name</label>
            <br/>
          <input type="text" name="name"></input>
        </div>
        <div>
            <label>Date of Birth</label>
            <br/>
          <input type="date" name="name"></input>
        </div>
        <div>
            <label>Country of Birth</label>
            <br/>
          <input type="text" name="name"></input>
        </div>
        <div>
            <label>Driver's License Number</label>
            <br/>
          <input type="text" name="name"></input>
        </div>
        <div>
            <label>Driver's License Date</label>
            <br/>
          <input type="date" name="name"></input>
        </div>
        <div>
            <label>Upload Driver's License Photo</label>
            <br/>
          <input type="file" name="name" accept="image/png, image/jpeg"></input>
        </div>
        </div>
      </form>
    </div>
    )
  }
}

export default Form;
