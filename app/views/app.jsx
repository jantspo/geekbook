import React from 'react'
import { render } from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import Login from './login'
import '~/app/assets/styles/app'

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className='container'>
        Hello World
        { children }
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
        <Route path="login" component={ Login }></Route>
    </Route>
  </Router>
), document.getElementById('react'));
