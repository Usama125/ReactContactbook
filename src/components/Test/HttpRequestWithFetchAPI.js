import React, { Component } from 'react'

class HttpRequestWithFetchAPI extends Component {
  
  state = {
      title: '',
      body:''
  }  

  // Below we are going to use API requests with Fetch API 
  // But a better way to use API's to use with Axios and 
  // We have done this with the project so we have get 
  // all contact information of users from an API in context.js file  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => this.setState({
        title: data.title,
        body: data.body
    }))
  }

  render() {
    
    const { title , body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default HttpRequestWithFetchAPI;