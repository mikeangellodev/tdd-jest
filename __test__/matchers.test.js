describe('Common matchers', () => {
  const user = {
    name: "miguel",
    lastName: "angel"
  };

  const user2 = {
    name: "miguel",
    lastName: "angel"
  };

  const user3 = {
    name: "miguel",
    lastName: "angel2"
  };

  test("Element equal", () => {
    expect(user).toEqual(user2);
  });

  test('Does not exactly complete', () => {
    expect(user).not.toEqual(user3);
  });
});
