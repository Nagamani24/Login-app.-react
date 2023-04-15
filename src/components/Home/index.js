// Write your code here

import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClick = () =>
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClick} />
          ) : (
            <Login login={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
