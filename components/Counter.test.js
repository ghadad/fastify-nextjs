/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, waitForElement } from 'react-testing-library'

import Counter from './Counter.jsx'

const renderComponent = ({ startingCount }) => (
  render(<Counter startingCount={startingCount} />)
)

describe('With React Testing Library', () => {
  it('renders initial count', async () => {
    const { getByText } = renderComponent({ startingCount: 5 })
    await waitForElement(() => getByText(/5/))
  })
  it('increments count', async () => {
    const { getByText } = renderComponent({ startingCount: 0 })
    await waitForElement(() => getByText('+'))
    fireEvent.click(getByText('+'))
    await waitForElement(() => getByText(/1/))
  })

  it('decrements count', async () => {
    const { getByText } = renderComponent({ startingCount: 3 })
    await waitForElement(() => getByText('-'))
    fireEvent.click(getByText('-'))
    await waitForElement(() => getByText(/2/))
  })
})

describe('With Snapshot Testing', () => {
  it('Counter shows up', () => {
    const component = renderer.create(<Counter />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
