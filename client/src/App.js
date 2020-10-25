import React from 'react';
import './App.css';
import IntervalController from './components/IntervalController.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      intervals: {
        break: 5,
        session: 25
      }
    }
    this.intervalTypes = Object.keys(this.state.intervals);
  }
  
  
  render(){
    return <div>
      <h1>25 + 5 Clock</h1>
      {this.intervalTypes.map(type => <IntervalController type={type} length={this.state.intervals[type]}/>)}
      <Footer />
    </div>;
  }
}

export default App;