// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onClickButton = () => {
    this.setState(prevstate => ({isSubscribe: !prevstate.isSubscribe}))
  }

  renderButton = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return 'Subscribe'
    }
    return 'Subscribed'
  }

  render() {
    const text = this.renderButton()
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy Learning</p>
          <button className="button" type="button" onClick={this.onClickButton}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
