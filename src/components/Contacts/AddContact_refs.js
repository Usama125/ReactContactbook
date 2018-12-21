import React, { Component } from 'react'

class AddContact extends Component {

  constructor(props){
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.contactInput = React.createRef();
  }

  onSubmitHandler = (e) => {
    e.preventDefault();  

    const contact = {
        name: this.nameInput.current.value,
        email: this.emailInput.current.value,
        contact: this.contactInput.current.value
    }

    console.log(contact);
  }

  static defaultProps = {
      name: 'Usama Mughal',
      email: 'usamamughal2007@gmail.com',
      contact: '03157721671'
  }

  render() {
    
    const { name , email , contact } = this.props;
    
    return (
      <div className="card mb-3">
        <div className="card-header">
            Add Contact
        </div>

        <div className="card-body">
            <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control form-control-lg"
                    placeholder="Enter Name..." defaultValue={name} 
                    ref={this.nameInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="text" name="email" className="form-control form-control-lg"
                    placeholder="Enter Email..." defaultValue={email} 
                    ref={this.emailInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Contact</label>
                    <input type="text" name="contact" className="form-control form-control-lg"
                    placeholder="Enter Contact..." defaultValue={contact} 
                    ref={this.contactInput}/>
                </div>
                <input type="submit" value="Add Contact" className="btn btn-danger btn-block"/>
            </form>
        </div>
      </div>
    )
  }
}

export default AddContact;