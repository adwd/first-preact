import { h, render, Component } from 'preact'
import * as styles from './style.scss'

export default class Clock extends Component<{ date: Date }, {}> {
  render({ date }: { date: Date }) {
    return (
      <div>
        <span class={styles.clock}>{date.toLocaleTimeString()}</span>
      </div>
    )
  }
}
