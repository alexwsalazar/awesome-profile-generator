const Intern = require("../lib/intern");



test("Can instantiate intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });


  test("Can get gethub via getHub()", () => {
    const testValue = "schoolName";
    const e = new Intern("Foo", "email@email.com", 1, testValue);
    expect(e.getSchool()).toBe(testValue);
  });
  
  test("getRole() should return \"intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", "test@test.com", 1,);
    expect(e.getRole()).toBe(testValue);
  });