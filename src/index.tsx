import { h, render, Component } from 'preact'
import Router from 'preact-router'
import Header from './components/Header'
import Home from './components/Home'
import News from './components/News'
import * as styles from './style.scss'

class App extends Component<{}, {}> {
  render() {
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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
