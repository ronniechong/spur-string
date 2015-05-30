SpurString = require "../../../src/SpurString"

describe "helpers.defaultToWhiteSpace", ->

  it "with null", ->
    expect(SpurString.defaultToWhiteSpace(null)).to.equal("\\s")

  it "with undefined", ->
    expect(SpurString.defaultToWhiteSpace()).to.equal("\\s")

  it "with expression", ->
    expression = /hello(?!\shell)/
    expect(SpurString.defaultToWhiteSpace(expression)).to.equal("hello(?!\\shell)")

  it "with basic strings", ->
    expect(SpurString.defaultToWhiteSpace("xcvx vxc vzx v")).to.equal("[xcvx vxc vzx v]")
