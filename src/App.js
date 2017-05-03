import React, { Component } from 'react';

class App extends Component {
  state = {
    AsyncComponent: () => null,
  }

  onMouseOver = () => {
    import('./Newsfeed')
      .then(module => module.default)
      .then(AsyncComponent => this.setState(
        () => ({ AsyncComponent })
      ));
  }

  render() {
    const { AsyncComponent } = this.state;
    return (
      <div >
        <div onMouseOver={this.onMouseOver}>Hello!</div>
        <AsyncComponent />
      </div>
    );
  }
}

export default App;
