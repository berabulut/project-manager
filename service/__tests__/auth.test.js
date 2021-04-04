const { checkIfUserExists, returnUserData } = require("../src/auth");

const uid = "aNL7ZWQk9qRTXSjjwKnTknOgWyl1"; // test2@gmail.com

describe("checking if user exists", () => {
  it("should return true", async () => {
    await expect(checkIfUserExists(uid)).resolves.toBe(true);
  });

  it("should return false", async () => {
    await expect(checkIfUserExists(uid + "923")).resolves.toBe(false);
  });
});

describe("return user data", () => {
  it("should return user data", async () => {
    const data = await returnUserData(uid);
    expect(data.uid).toBe(uid);
  });

  it("should return error", async () => {
    await expect(returnUserData(uid + "923")).rejects.toMatch(
      "User data doesn't exist!"
    );
  });
});
