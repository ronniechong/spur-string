SpurString = require "../../../src/SpurString"

describe "plugins.startsWith", ->

  it "with match", ->
    expect(SpurString.startsWith("http://www.opentable.com", "http")).to.equal(true)

  it "with match in position", ->
    expect(SpurString.startsWith("http://www.opentable.com", "opentable", 11)).to.equal(true)

  it "with match in position 0 converted from negative position", ->
    expect(SpurString.startsWith("http://www.opentable.com", "http", -11)).to.equal(true)

  it "without match", ->
    expect(SpurString.startsWith("http://www.opentable.com", "https")).to.equal(false)

  it "without match in position", ->
    expect(SpurString.startsWith("http://www.opentable.com", "https", 11)).to.equal(false)
