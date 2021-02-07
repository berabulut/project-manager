const { testDB, createNewUser, checkIfUserExists } = require("./src/auth");

testDB();

createNewUser("uwu412312", "blabla@gmail.com", "isim", "resim url")
  .then(() => {
    checkIfUserExists("uwu412312")
      .then((val) => {
        console.log(val);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log(err);
  });
