import { h, render, Component } from 'preact'
import * as styles from './style.scss'

export default class Header extends Component<{}, {}> {
  render() {
    return (
      <div class={styles.container}>
        <h3>My Preact App</h3>
        <div class={styles.buttons}>
          <a href="/">Home</a>
          <a href="/news">News</a>
        </div>
      </div>
    )
  }
}
