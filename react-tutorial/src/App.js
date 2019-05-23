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
import CSSStylesheet from './components/CSSStylesheet';
import InlineStyle from './components/InlineStyle';
import './css/appStyle.css';
import styles from './css/appStyle.module.css'
import From from './components/forms/From';
import LifecycleA from './components/forms/LifecycleA';

class App extends Component {
  render() {
    return (
      <div className="App">

      <LifecycleA></LifecycleA>


      {/* <From></From> */}
      
      {/* Styling with CSS */}
      {/* <CSSStylesheet primary={true}></CSSStylesheet> */}
      {/* <InlineStyle></InlineStyle> 
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

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
          {/* <NameList></NameList> */}
      </div>
    );
  }
}

export default App;
