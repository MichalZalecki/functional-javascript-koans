describe("Pure functions", () => {
  describe("Implement impure append function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // append :: ([a], a) -> [a]

    /***************************************************************/

    test("mutates passed array", () => {
      const array = [1, 2, 3];
      append(array, 4);
      expect(array).toEqual([1, 2, 3, 4]);
    });

    test("adds a value at the end", () => {
      expect(append([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });

    test("returns the same array", () => {
      const array = [1, 2, 3];
      const actual = append(array, 4);
      expect(actual).toBe(array);
    });
  });

  describe("Implement append but as a pure function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // append :: ([a], a) -> [a]

    /***************************************************************/

    test("doesn't mutate passed array", () => {
      const array = [1, 2, 3];
      append(array, 4);
      expect(array).not.toEqual([1, 2, 3, 4]);
    });

    test("adds a value at the end", () => {
      expect(append([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });

    test("returns a different array", () => {
      const array = [1, 2, 3];
      const actual = append(array, 4);
      expect(actual).not.toBe(array);
    });
  });
});

// BONUS: Try to understand what IO Mondad is and how it works.
//        https://github.com/MichalZalecki/paradajs/blob/master/src/lib/monads.ts#L151-L176
//        Do you see the benefit of IO Monad being also a Setoid.
//        HINT: Think about testing.
