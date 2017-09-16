import React, { Component } from 'react';

class App extends Component {
  state = {
    AsyncComponent: () => <div>Nothing loaded</div>,
  };

  async componentDidMount() {
    const module = await import('./AsyncComponent');
    const AsyncComponent = module.default;

    this.setState({ AsyncComponent });
  }

  render() {
    const { AsyncComponent } = this.state;

    return <AsyncComponent />;
  }
}

export default App;
