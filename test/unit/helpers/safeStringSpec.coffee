SpurString = require "../../../src/SpurString"

describe "helpers.safeString", ->

  it "with null", ->
    expect(SpurString.safeString(null)).to.equal("")

  it "with undefined", ->
    expect(SpurString.safeString()).to.equal("")

  it "with valid string", ->
    expect(SpurString.safeString("i'm valid")).to.equal("i'm valid")

  it "with int", ->
    expect(SpurString.safeString(1)).to.equal("1")

  it "with float", ->
    expect(SpurString.safeString(1.23)).to.equal("1.23")

  it "with date", ->
    expected = new Date(2015, 5, 10).toString()
    expect(SpurString.safeString(new Date(2015, 5, 10))).to.equal(expected)

  it "with object", ->
    expect(SpurString.safeString({prop1: 123, prop2: 321})).to.equal("[object Object]")
