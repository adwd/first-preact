import { h, render, Component } from 'preact'
import Clock from './components/Clock'

class App extends Component {
  render() {
    let time = new Date().toLocaleTimeString()
    return (
      <div>
        <h1>My Preact app</h1>
        <Clock time={time} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
