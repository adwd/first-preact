import { h, Component } from 'preact'
import { shallow } from 'preact-render-spy'

import Clock from './index'

describe('Clock', () => {
  test('renders clock', () => {
    const date = new Date(2018, 1, 1, 11, 12, 13, 14)
    const context = shallow(<Clock date={date} />)
    expect(context.find('span').text()).toBe('11:12:13')
  })

  test('renders correctly', () => {
    const date = new Date(2018, 1, 1, 11, 12, 13, 14)
    const tree = shallow(<Clock date={date} />)

    expect(tree).toMatchSnapshot()
  })
})
