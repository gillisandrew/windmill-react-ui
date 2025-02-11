import React from 'react'
import { mount } from 'enzyme'
import HelperText from '../src/HelperText'

describe('HelperText', () => {
  it('should render without crashing', () => {
    mount(<HelperText>Lorem ipsum</HelperText>)
  })

  it('should render with base styles', () => {
    const expected = 'text-xs'
    const wrapper = mount(<HelperText />)

    expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with valid styles', () => {
    const expected = 'text-green-600 dark:text-green-400'
    const wrapper = mount(<HelperText valid />)

    expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected)
  })

  it('should render with invalid styles', () => {
    const expected = 'text-red-600 dark:text-red-400'
    const wrapper = mount(<HelperText valid={false} />)

    expect(wrapper.find(HelperText).getDOMNode().getAttribute('class')).toContain(expected)
  })
})
