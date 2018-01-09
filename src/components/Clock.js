import { h, render, Component } from 'preact'
import styles from './Clock.scss'

export default class Clock extends Component {
  render({ date }) {
    return (
      <div>
        <p>time is</p>
        <span class={styles.clock}>{date.toLocaleTimeString()}</span>
      </div>
    )
  }
}
