import { h, render, Component } from 'preact'

export default class Clock extends Component {
  render({ time }) {
    console.log(this.props, this.state)
    return (
      <div>
        <p>time is</p>
        <span>{time}</span>
      </div>
    )
  }
}
