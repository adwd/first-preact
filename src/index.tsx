import { h, render, Component } from 'preact'
import Header from './components/Header'
import Home from './components/Home'
import './style.scss'

class App extends Component<{}, {}> {
  render() {
    const date = new Date()
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

render(<App />, document.body)
