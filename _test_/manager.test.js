const Manager = require("../lib/manager");



test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });


  test("Can get gethub via getHub()", () => {
    const testValue = "officeNumber";
    const e = new Manager("Foo", "email@email.com", 1, testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Alice", "test@test.com", 1,);
    expect(e.getRole()).toBe(testValue);
  });