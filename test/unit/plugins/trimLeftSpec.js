import SpurString from "../../../src/SpurString"

describe("plugins.trimLeft", () => {
  it("should trim", () => {
    expect(SpurString.trimLeft("       foo bar")).to.equal("foo bar")
    expect(SpurString.trimLeft("       foo bar ")).to.equal("foo bar ")
  })
})
