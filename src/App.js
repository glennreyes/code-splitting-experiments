import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    AsyncComponent: () => <span>Nothing loaded</span>,
  }

  onMouseOver = async () => {
    const module =  await import('./AsyncComponent');
    const AsyncComponent = module.default;

    this.setState({ AsyncComponent });
  }

  render() {
    const { AsyncComponent } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onMouseOver={this.onMouseOver}>Hover here to load the async component</h2>
        </div>
        <p>
          <AsyncComponent />
        </p>
      </div>
    );
  }
}

export default App;
