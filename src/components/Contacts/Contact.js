import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer }from '../../context';
import Axios from 'axios';

class Contact extends Component {

    state = {
        showContactDetails: false
    };

    showContact = () =>{
        this.setState({
            showContactDetails : !this.state.showContactDetails
        });        
    }

    onDeleteHandler = async (id , dispatch) =>{
        try {
            await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({ type:"DELETE_CONTACT", payload: id });    
        } catch (exception) {
            dispatch({ type:"DELETE_CONTACT", payload: id });
        }
    }

  render() {
    
    const { id , name , email , contact } = this.props.contact;

    return(
        <Consumer>
            {value => {
                const { dispatch } = value;
                return (
                    <div className="card card-body mb-3">
                        <h3>{ name } <i onClick={this.showContact} style={{cursor:'pointer'}} className="fas fa-sort-down"></i>
                            <i onClick={this.onDeleteHandler.bind(this,id,dispatch)} className="fas fa-times" style={{float:'right',color:'red',cursor:'pointer'}}></i>
                            <Link to={`/contact/edit/${id}`}>
                               <i className="fas fa-pencil-alt" style={{
                                   float:'right',
                                   color:'black',
                                   fontSize:'20px',
                                   marginRight:'1rem',
                                   marginTop:'4px'}}></i> 
                            </Link>
                        </h3>
                        {this.state.showContactDetails ? <ul className="list-group">
                            <li className="list-group-item">Email: { email }</li>
                            <li className="list-group-item">Contact: { contact }</li>
                        </ul> : null}
                        
                    </div>              
                )
            }}
        </Consumer>
    )
  }
}

Contact.prototypes = {
}

export default Contact;