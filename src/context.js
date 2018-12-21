import React, {Component} from 'react';
import Axios from 'axios';

const Context = React.createContext();

const reducer = (state,action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
        return {
            ...state,
            contacts:state.contacts.filter(contact => contact.id != action.payload)
        };
        case 'ADD_CONTACT':
        return {
            ...state, 
            contacts: [action.payload, ...state.contacts]
        };
        case 'UPDATE_CONTACT':
        return {
            ...state,
            contacts: state.contacts.map(contact => contact.id === action.payload.id ? 
                ( contact = action.payload ) : contact)
        }
        default:
        return state;
    }
}

export class Provider extends Component{
    state = {
        contacts:[],
        dispatch: action => this.setState(state=>reducer(state,action))
    }

    async componentDidMount(){
        // First we have to install Axios :- npm i axios
        const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
            response.data.map(data => {
                const { id , name , email , phone } = data;
                const newContact = {
                    id,
                    name,
                    email,
                    contact:phone
                }
                this.setState({
                    contacts: [...this.state.contacts, newContact]
                  })
            });
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;