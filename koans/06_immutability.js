describe("Immutability", () => {
  describe("Make recipients array immutable", () => {
    let recipients = ["foo@example.com", "bar@example.com"];

    /********************* YOUR IMPLEMENTATION *********************/

    // HINT: Look for an appropriate method on the Object constructor

    /***************************************************************/

    test("element cannot be removed from the recipients array", () => {
      expect(() => { recipients.pop(); }).toThrowError(TypeError);
      expect(recipients).toEqual(["foo@example.com", "bar@example.com"]);
    });

    test("element cannot be added to the recipients array", () => {
      expect(() => { recipients.push("foz@example.com"); }).toThrowError(TypeError);
      expect(recipients).toEqual(["foo@example.com", "bar@example.com"]);
    });
  });
});

// BONUS: Immutable.js is already installed in node_modules. Play with it
//        and answer how List.push and Array.prototype.push are different?
//
//        const { List } = require("immutable");
