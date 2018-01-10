import { h, render, Component } from 'preact'
import Clock from '../Clock'
import * as styles from './style.scss'

export default class Home extends Component<{}, {}> {
  render() {
    const date = new Date()
    return (
      <div class={styles.container}>
        <h1>Home</h1>
        <Clock date={date} />
      </div>
    )
  }
}
