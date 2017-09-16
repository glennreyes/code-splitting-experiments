import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loading from './Loading';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    AsyncComponent: () => (
      <span onMouseEnter={this.onMouseOver}>
        Hover here to load async content
      </span>
    ),
  };

  onMouseOver = async () => {
    const module = await import(/* webpackChunkName: "async" */ './AsyncComponent');
    const AsyncComponent = module.default;

    this.setState({ AsyncComponent });
  };

  render() {
    const { AsyncComponent } = this.state;

    return (
      <Router
        basename={
          process.env.NODE_ENV === 'production'
            ? '/code-splitting-example'
            : '/'
        }
      >
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Code Splitting example</h2>
            <nav className="Nav">
              <Link className="Link" to="/">
                Home
              </Link>
              <Link className="Link" to="/profile">
                Profile
              </Link>
            </nav>
          </div>
          <Switch>
            <Route
              exact
              path="/"
              component={Loadable({
                loader: () => import(/* webpackChunkName: "home" */ './Home'),
                loading: Loading,
              })}
            />
            <Route
              path="/profile"
              component={Loadable({
                loader: () =>
                  import(/* webpackChunkName: "profile" */ './Profile'),
                loading: Loading,
              })}
            />
          </Switch>
          <footer>
            <AsyncComponent />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
