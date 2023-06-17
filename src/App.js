import React from 'react';
import './App.css';
import mounir from './assets/mounir.jpg'
import ClassCounter from './components/ClassCounter';
import Life from './components/Life';

class App extends React.Component {
 
  state={
    "fullName": "Mounir CHTIOUI",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    "imgSrc": {mounir}, 
    "profession": "IT dev", 
    "show": false ,
    "cpt": 1
  };
  
 
 render(){
  var handleShow =()=>{this.setState({show:!this.state.show})};
  return (
    <div className="App">
      
      <ClassCounter />
       <h1>Hello {this.state.fullName}!?</h1>
        <button onClick={handleShow} >ClickMe</button>
        <p>{this.state.show? 
        <div><Life />
        <i>{this.state.bio}</i></div>
        : 
        <img src={mounir} alt="mounir" style={{width : "50px" }} />
      }</p>
        
    </div>
  );
 };
  
}

export default App;
