const Engineer = require("../lib/engineer");



test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });


  test("Can get gethub via getHub()", () => {
    const testValue = "githubusername";
    const e = new Engineer("Foo", "email@email.com", 1, testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", "test@test.com", 1,);
    expect(e.getRole()).toBe(testValue);
  });