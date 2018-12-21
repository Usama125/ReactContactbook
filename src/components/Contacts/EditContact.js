import React, { Component } from 'react'
import { Consumer } from '../../context';
// import uuid from 'uuid';
import FormInputGroups from '../Layouts/FormInputGroups';
import Axios from 'axios';

class EditContact extends Component {

  state = {
      name: '',
      email: '',
      contact: '',
      errors: {}
  }  

  async componentDidMount(){
    const { id } = this.props.match.params;
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const { name , email , phone } = response.data;
    console.log(name,email,phone);
    this.setState({
        name,
        email,
        contact: phone
    });
  }

  onChangeHandler = (e) => this.setState({ [e.target.name] : e.target.value })
  
  onSubmitHandler = async (dispatch,e) => {
    e.preventDefault();

    const { name , email , contact } = this.state;

    if(name === ''){
        this.setState({errors:{name:"Name is required"}});
        return;
    }else
    if(email === ''){
        this.setState({errors:{email:"Email is required"}});
        return;
    }else
    if(contact === ''){
        this.setState({errors:{contact:"Contact is required"}});
        return;
    }

    const newContact = {
        // Auto randomly generating id with thired party node package :- npm i uuid
        // id: uuid(),
        // I have commented it because below Axios request will get id from fake api and add into this object
        name:name,
        email: email,
        contact: contact
    }

    const { id } = this.props.match.params;

    const updatedResponse = await Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact);

    dispatch({
        type:"UPDATE_CONTACT",
        payload: updatedResponse.data
    })

    // Clearing State after form submit
    this.setState({
        name: '',
        email:'',
        contact: '',
        errors:{}
    });

    // Redirecting to home ( Listing Page )
    this.props.history.push('/');
  }

  render() {
    
    const { errors , name , email , contact } = this.state;
    
    return (
        <Consumer>
            {value => {
                const { dispatch } = value;
                return(
                    <div className="card mb-3">
                        <div className="card-header display-4">
                            <span className="text-danger">Edit </span> 
                            Contact
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmitHandler.bind(this,dispatch)}>
                                <FormInputGroups 
                                    label="Name" 
                                    name="name"
                                    placeholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChangeHandler}
                                    error={errors.name}/>
                                <FormInputGroups 
                                    label="Email" 
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email..."
                                    value={email}
                                    error={errors.email}
                                    onChange={this.onChangeHandler}/>
                                <FormInputGroups 
                                    label="Contact" 
                                    name="contact"
                                    placeholder="Enter Contact..."
                                    value={contact}
                                    error={errors.contact}
                                    onChange={this.onChangeHandler}/>
                                <input type="submit" value="Update Contact" className="btn btn-danger btn-block"/>
                            </form>
                        </div>
                    </div>    
                )
            }}
        </Consumer>
    )
  }
}

export default EditContact;