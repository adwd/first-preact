import { h, render, Component } from 'preact'

export default class Clock extends Component {
  render({ date }) {
    return (
      <div>
        <p>time is</p>
        <span>{date.toLocaleTimeString()}</span>
      </div>
    )
  }
}
