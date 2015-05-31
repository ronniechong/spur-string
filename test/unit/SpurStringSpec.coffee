SpurString = require "../../src/SpurString"
SpurStringIntegration = require "../../"

describe "SpurString", ->

  beforeEach ->
    @expectedPlugins = 13

  it "should load plugins", ->
    console.log "Plugins: ", SpurString.plugins.join(", ")
    expect(SpurString.plugins.length).to.equal @expectedPlugins

  it "should load plugins through index.js", ->
    expect(SpurStringIntegration.plugins.length).to.equal @expectedPlugins
