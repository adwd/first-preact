import { h, render, Component } from 'preact'
import Router from 'preact-router'
import Header from './components/Header'
import Home from './components/Home'
import News from './components/News'
import * as styles from './style.scss'

class App extends Component<{}, {}> {
  render() {
    const date = new Date()
    return (
      <div>
        <Header />
        <div class={styles.container}>
          <Router>
            <Home path="/" />
            <News path="/news" />
          </Router>
        </div>
      </div>
    )
  }
}

render(<App />, document.body)
