const { createUniqueId } = require("../src/common");

test("unique id is created", async () => {
  const data = await createUniqueId();
  expect(data).not.toBeFalsy();
});
