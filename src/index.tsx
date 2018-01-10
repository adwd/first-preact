import { h, render, Component } from 'preact'
import Clock from './components/Clock'

class App extends Component<{}, {}> {
  render() {
    const date = new Date()
    return (
      <div>
        <h1>My Preact app</h1>
        <Clock date={date} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
