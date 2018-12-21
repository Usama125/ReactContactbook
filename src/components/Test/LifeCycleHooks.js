import React, { Component } from 'react'

class LifeCycleHooks extends Component {
  
    componentDidMount(){
        console.log('Called right after component created, Before render method');
    }

    componentWillMount(){
        console.log('Called before fully component created');
    }
  
    componentDidUpdate(){
        console.log('Called when any props or states of a component changes');
    }
    
    componentWillUpdate(){
        console.log('Called before any change into the states and props of a component');
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log('Called before any new props come into the component');
    }

    // Above "having wills" component hooks are deprecated but we can use 
    // them using below keyword before hook "UNSAFE_"
    // Example :- UNSAFE_componentWillReceiveProps(){}

    // getSnapshotBeforeUpdate(prevProps ,prevState){
    //     console.log('It will give previous states of states and props before update in a component');
    // }

    render() {
    return (
      <div>
        <h1 className="display-4">
            <span className="text-danger">Life Cycle Hooks </span> 
            Test Component
        </h1>
        <p className="lead"> <i className="fas fa-arrow-right text-danger"></i> Look into console for output</p>
      </div>
    )
  }
}

export default LifeCycleHooks;