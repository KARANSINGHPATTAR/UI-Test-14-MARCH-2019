import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from "./team";
import TeamInfo from "./teaminfo";
import EditInfo from "./editinfo";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      index:'',
      index2:''
    } 
}  

getIndex=(i)=>{
  this.setState({index:i})
}

getIndex2=(i)=>{
  this.setState({index2:i})
}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/"  render={(props)=><Team sendIndex={this.getIndex}/> } exact/>

          <Route path="/teaminfo"  render={(props)=>
            <TeamInfo {...props} fetchIndex={this.state.index} sendIndex={this.getIndex2}/> } exact/>

          <Route path="/editinfo"  render={(props)=>
            <EditInfo {...props} fetchIndex={this.state.index} fetchIndex2={this.state.index2}/> } exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
