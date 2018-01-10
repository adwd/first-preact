import { h, render, Component } from 'preact'
import * as styles from './style.scss'

export default class Header extends Component<{}, {}> {
  render() {
    return (
      <div class={styles.container}>
        <h3>My Preact App</h3>
        <div class={styles.buttons}>
          <a>Home</a>
          <a>Data</a>
        </div>
      </div>
    )
  }
}
