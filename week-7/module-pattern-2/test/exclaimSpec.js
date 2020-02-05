describe("exclaim", function() {
  it("adds an exclamation mark to given text", function() {
    expect(exclaim("hello")).toEqual("hello!")
    expect(exclaim("hi??")).toEqual("hi??!")
  })
})
