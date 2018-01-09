import { h, render, Component } from 'preact'

class Clock extends Component {
  render() {
    let time = new Date().toLocaleTimeString()
    return (
      <div>
        <p>time is</p>
        <span>{time}</span>
      </div>
    )
  }
}

render(<Clock />, document.getElementById('root'))
