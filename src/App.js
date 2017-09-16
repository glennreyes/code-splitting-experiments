import React, { Component } from 'react';

class App extends Component {
  state = {
    components: [],
  };

  async componentDidMount() {
    const components = await Promise.all([
      import('./Home').then(m => m.default),
      import('./Profile').then(m => m.default),
    ]);

    this.setState({ components });
  }

  render() {
    return (
      <div>
        {this.state.components.map((AsyncComponent, index) => (
          <AsyncComponent key={index} />
        ))}
      </div>
    );
  }
}

export default App;
