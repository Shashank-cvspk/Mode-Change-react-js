// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: true}

  onClickButton = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  render() {
    const {lightMode} = this.state
    const text = lightMode ? 'Light Mode' : 'Dark Mode'
    const modeClassName = lightMode ? 'light-mode' : 'dark-mode'
    return (
      <div className={`container ${modeClassName}`}>
        <h1>Click to Change Mode</h1>
        <button type="button" onClick={this.onClickButton}>
          {text}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
