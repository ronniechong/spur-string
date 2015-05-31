SpurString = require "../../../src/SpurString"

describe "helpers.escapeRegExp", ->

  it "with lookahead", ->
    @expression = /hello(?=\sworld)/
    expect(SpurString.escapeRegExp(@expression.source)).to.equal("hello\\(\\?\\=\\\\sworld\\)")

  it "with negative lookahead", ->
    @expression = /hello(?!\shell)/
    expect(SpurString.escapeRegExp(@expression.source)).to.equal("hello\\(\\?\\!\\\\shell\\)")
