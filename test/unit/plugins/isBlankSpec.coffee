SpurString = require "../../../src/SpurString"

describe "plugins.isBlank", ->

  it "should be blank", ->

    assert(SpurString.isBlank(''))
    assert(SpurString.isBlank(' '))
    assert(SpurString.isBlank('\n'))
    assert(SpurString.isBlank(''))
    assert(SpurString.isBlank(null))
    assert(SpurString.isBlank(undefined))

  it "should not be blank", ->

    assert(!SpurString.isBlank('a'))
    assert(!SpurString.isBlank('0'))
    assert(!SpurString.isBlank(0))
