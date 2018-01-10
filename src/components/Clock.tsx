import { h, render, Component } from 'preact'
import * as styles from './Clock.scss'

export default class Clock extends Component<{ date: Date }, {}> {
  render({ date }: { date: Date }) {
    return (
      <div>
        <p>time is</p>
        <span class={styles.clock}>{date.toLocaleTimeString()}</span>
      </div>
    )
  }
}
