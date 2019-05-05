import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import JSX from './components/JSX';
import Props from './components/FunctionalProps';
import ClassProps from './components/ClassProps';
import Message from './components/ClassStateExample';
import Counter from './components/SetStateExample';
import FunctionalEventHandling from './components/FunctionalEventHandling';
import ClassEventHandling from './components/ClassEventHandling';
import BindingEvent from './components/BindingEvent';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import NameList from './components/NameList';

class App extends Component {
  render() {
    return (
      <div className="App">
    {/*     <Greet></Greet>
        <Welcome></Welcome>
        <JSX></JSX>
         <Props name="Bruce" heroName="Batman">
            <p>This is children props</p>
         </Props>
         <Props name="Clark" heroName="Superman"/>
         <Props name="Diana" heroName="Wonder woman"/>
         <ClassProps name="Bruce" heroName="Batman"/>
         <ClassProps name="Clark" heroName="Superman"/>
         <ClassProps name="Diana" heroName="Wonder woman"/> */}
          {/* <Message/> */}
          {/* <Counter/> */}
          {/* <FunctionalEventHandling></FunctionalEventHandling>
          <ClassEventHandling></ClassEventHandling> */}
          {/* <BindingEvent></BindingEvent> */}
          {/* <ParentComponent></ParentComponent> */}
          {/* <ConditionalRendering></ConditionalRendering> */}
          {/* <ListRendering></ListRendering> */}
          <NameList></NameList>
      </div>
    );
  }
}

export default App;
