describe("interrobang", function() {
  it("adds an interrobang to the given text", function() {
    expect(interrobang("hello")).toEqual("hello??!")
    expect(interrobang("OK")).toEqual("OK??!")
  })
})
