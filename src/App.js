import React from 'react';
import './App.scss';
import DashBoard from './components/dashboard/dashboard'
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><h3>Users Activity</h3></div>
        </header>
        <DashBoard></DashBoard>
      </div>
    );
  }
}

