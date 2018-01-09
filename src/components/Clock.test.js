import { h, Component } from 'preact'
import Clock from './Clock'
import { shallow } from 'preact-render-spy'

describe('Clock', () => {
  test('renders clock', () => {
    const date = new Date(2018, 1, 1, 11, 12, 13, 14)
    const context = shallow(<Clock date={date} />)
    expect(context.find('p').text()).toBe('time is')
    expect(context.find('span').text()).toBe('11:12:13')
  })
})
