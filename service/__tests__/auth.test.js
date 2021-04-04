const { checkIfUserExists, returnUserData } = require("../src/auth");

const uid = "NXKy105C0KhmmDlKOtiaTZCooXB3"; // test@gmail.com

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
    try {
      await returnUserData(uid + "923");
    } catch (err) {
      expect(err).toMatch("User data doesn't exist!");
    }
  });
});
