//Vendor Libraries
import React from 'react'

export default class Registration extends React.Component{
  render(){
    return(
      <div className="registrationForm">
        <form onSubmit={ this.login } className="registration-form">
          <div className="form-inline form-group">
            <input type="text" name="first_name" className="form-control" placeholder="First Name"/>
            <input type="text" name="last_name" className="form-control" placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="your@email.com"/>
          </div>
          <div className="form-group">
            <input type="email" name="email_confirm" placeholder="confirm email"/>
          </div>
          <div className="form-group">
            <input type="text" name="password" placeholder="password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}