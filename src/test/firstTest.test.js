import firstFunction from "../index";

it("Should return Hello world text", () => {
  const greeting = firstFunction();
  expect(greeting).toEqual("Hello World");
});
