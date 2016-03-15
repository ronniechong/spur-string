import SpurString from "../../../src/SpurString"

describe("plugins.replaceAll", () => {
  it("should replace", () => {
    expect(SpurString.replaceAll("a", "a", "b")).to.equal("b")
    expect(SpurString.replaceAll("aa", "a", "b")).to.equal("bb")
    expect(SpurString.replaceAll("aca", "a", "b")).to.equal("bcb")
    expect(SpurString.replaceAll("ccc", "a", "b")).to.equal("ccc")
    expect(SpurString.replaceAll("AAa", "a", "b")).to.equal("AAb")
    expect(SpurString.replaceAll("Aa", "a", "b", true)).to.equal("bb")
    expect(SpurString.replaceAll("foo bar foo", "foo", "moo")).to.equal("moo bar moo")
    expect(SpurString.replaceAll("foo bar\n foo", "foo", "moo")).to.equal("moo bar\n moo")
    expect(SpurString.replaceAll("foo bar FoO", "foo", "moo", true)).to.equal("moo bar moo")
    expect(SpurString.replaceAll("", "a", "b")).to.equal("")
    expect(SpurString.replaceAll(null, "a", "b")).to.equal("")
    expect(SpurString.replaceAll(void 0, "a", "b")).to.equal("")
    expect(SpurString.replaceAll(12345, "a", "b")).to.equal("12345")
  })
})
