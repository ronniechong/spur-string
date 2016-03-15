import SpurString from "../../../src/SpurString"

describe("plugins.trim", () => {
  it("should trim", () => {
    expect(SpurString.trim("       foo bar   ")).to.equal("foo bar")
  })
})
