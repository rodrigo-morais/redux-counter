'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { INCREMENT, DECREMENT } from '../../app/actions'
import counter from '../../app/app'

describe('Counter', () => {
  it("should return counter as 1 when the actual value is 0 and it is incremented", () => {
    let stateBefore = counter.getState(),
        expected = 1

    deepFreeze(counter)

    counter.dispatch({ type: INCREMENT })

    expect(expected).to.be.equal(counter.getState())
  })

  it("should return the counter actual value when the action type is blank", () => {
    let stateBefore = counter.getState(),
        expected = counter.getState()

    deepFreeze(counter)

    counter.dispatch({ type: '' })

    expect(expected).to.be.equal(counter.getState())
  })

  it("should return counter as 2 when the actual value is 1 and it is incremented", () => {
    let stateBefore = counter.getState(),
        expected = 2

    deepFreeze(counter)

    counter.dispatch({ type: INCREMENT })

    expect(expected).to.be.equal(counter.getState())
  })

  it("should return counter as 1 when the actual value is 2 and it is decremented", () => {
    let stateBefore = counter.getState(),
        expected = 1

    deepFreeze(counter)

    counter.dispatch({ type: DECREMENT })

    expect(expected).to.be.equal(counter.getState())
  })

  it("should return counter as 0 when the actual value is 1 and it is decremented", () => {
    let stateBefore = counter.getState(),
        expected = 0

    deepFreeze(counter)

    counter.dispatch({ type: DECREMENT })

    expect(expected).to.be.equal(counter.getState())
  })
})