import React, { Component } from "react";
import { userService } from '../auth/auth-service';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          password: "",
          email: "",
          error: '',
        };
      }
    handleChange=(e)=> {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password} = this.state;

        if (!(email && password)) {
            return;
        }
        userService.login(email, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/orderlist" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );

        }
  
    render() {
        const { email, password } = this.state;
        return (
        <div className="login_wrapper">
           <div className="login_container">
                <div className="middle">
                <div className="text_container">
                  <h2>Login</h2>
                </div>
                <form name="form" onSubmit={this.handleSubmit} className="login">
                    <div className="form-group">
                        <input type="text" className="form-control" name="email"  value={email} onChange={this.handleChange} 
                        placeholder="Enter Email" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password"  value={password} onChange={this.handleChange} 
                        placeholder="Enter Password" required/>
                    </div>
                    <button className="button-login" type="submit"> Login</button>
                      <a href="/">click to homepage</a>
                </form>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Login;