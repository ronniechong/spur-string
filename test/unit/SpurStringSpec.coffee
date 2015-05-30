SpurString = require "../../src/SpurString"
_ = require "lodash"

describe "SpurString", ->

  it "should load plugins", ->
    console.log "Plugins: ", SpurString.plugins
    expect(SpurString.plugins.length).to.equal(6)
