import React, { Component } from 'react'

class Login extends Component {

    state = {
        email: "",
        password: "",
        emailValidate: false,
        passwordValidate: false
    }


    onChangeHandler = async event => {
        let name=event.target.name;
        let value=event.target.value;
        // console.log(name + value);
        await this.setState({
         [name]  : value
        });

        if(name === 'email'){
            this.validateEmail(value);
        }else
        {
            this.validatePassword(value);
        }
   } 

   validateEmail(value){
        console.log("called from email validator" + value);
        if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)){
            this.setState({
                emailValidate: true
            });
        }else
        {
            this.setState({
                emailValidate: false
            });
        }
   }

   validatePassword(value){
       console.log("called from password validator" + value);
       if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value)){
            this.setState({
                passwordValidate: true
            });
        }else
        {
            this.setState({
                passwordValidate: false
            });
        } 
    }
    


  render() {
    return (
      <div className="container">
      <br/>
        <div className="card card-body mb-3">
            <h3>Login</h3>
            <form className="form-group">
                <input className="form-control" type="text" value={this.state.email} name="email" onChange={this.onChangeHandler.bind(this)} placeholder="Enter Email"/>
                <span style={{color:'red', fontWeight:'bold',fontSize:'12px'}}> { this.state.emailValidate ? null : " Invalid Email"}</span>
                <input className="form-control" type="password" value={this.state.password} name="password" onChange={this.onChangeHandler.bind(this)} placeholder="Enter Password"/>
                <span style={{color:'red', fontWeight:'bold',fontSize:'12px'}}>{this.state.passwordValidate ? null : "Invalid Password"}</span>
                {this.state.emailValidate  && this.state.passwordValidate ? 
                <input className="form-control btn btn-primary" type="submit" value="Submit"/> : 
                <input className="form-control btn btn-primary" type="submit" value="Submit" disabled/>}
            </form> 
        </div>   
      </div>
    )
  }
}

export default Login;