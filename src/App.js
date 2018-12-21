import React, { Component } from 'react';
import { HashRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Test from './components/Test/LifeCycleHooks';
import { Provider } from './context';
import AddContact from './components/Contacts/AddContact';
import About from './components/Pages/About';
import HttpRequestWithFetchAPI from './components/Test/HttpRequestWithFetchAPI';
import PageNotFound from './components/Pages/PageNotFound';
import LifeCycleHooks from './components/Test/LifeCycleHooks';
import EditContact from './components/Contacts/EditContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header siteName="Sample App"/>
            <div className="container">
              <Switch>
                {/* Passing Params to from url to component with router */}
                <Route path="/about/:id/:name" component={About} />
                <Route path="/about" component={About} />
                <Route exact path="/" component={Contacts} />
                <Route path="/contact/add" component={AddContact} />
                <Route path="/test/lifeCycleHooks" component={LifeCycleHooks} />
                <Route path="/test/httpRequestWithFetchAPI" component={HttpRequestWithFetchAPI} />
                <Route path="/contact/edit/:id" component={EditContact} />
                <Route component={PageNotFound} />
              </Switch>
              {/* <Login/> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
