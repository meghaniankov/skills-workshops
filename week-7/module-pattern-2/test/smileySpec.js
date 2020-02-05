describe("smiley", function() {
  it("adds a smiley to the given text", function() {
    expect(smiley("hello")).toEqual("hello :)")
    expect(smiley("OK")).toEqual("OK :)")
  })
})
