import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css'
import Greet  from './components/Greet'
import Welcome from './components/Welcome'
//import Hello from './components/Hello'
//import Message from './components/Message'
import Counter from'./components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

class App extends Component {
  render() {
  return (
    <div className="App">
      < NameList />
      <UserGreeting />
      <ParentComponent/>
     <FunctionClick/>
     <ClassClick />
     <EventBind />
     {/* <Greet name = "Gowthami" heroName = "Prabhas" >
        <p>This is a children props.</p>
      </Greet>
      <Greet name = "Mohan" heroName = "Mahesh">
        <button>Action</button>
  </Greet>*/}
      <Greet name = "Chenchaiah" heroName = "Chiru"/>
      
    <Welcome name = "Gowthami" heroName = "Prabhas"></Welcome>
    {/*  <Welcome name = "Mohan" heroName = "Mahesh"></Welcome>
     <Welcome name = "Chenchaiah" heroName = "Chiru"></Welcome>
      {/*<Hello/>
      <Message/>*/}
      <Counter/>
    </div>
  );
}
}
export default App;
