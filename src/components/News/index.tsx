import { h, render, Component } from 'preact'
import * as styles from './style.scss'

export default class News extends Component<{}, { news: Array<any> }> {
  constructor() {
    super()

    this.state = {
      news: [
        { title: 'React is nice' },
        { title: 'Preact is nice' },
        { title: '...' },
      ],
    }
  }

  render() {
    return (
      <div>
        <h1>News</h1>
        <ul>
          {this.state.news.map(n => (
            <li>
              <h4>{n.title}</h4>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
