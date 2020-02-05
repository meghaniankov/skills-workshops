describe("question", function() {
  it("adds two question marks to given text", function() {
    expect(question("hello")).toEqual("hello??")
    expect(question("hi")).toEqual("hi??")
  })
})
