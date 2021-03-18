const { returnImages } = require("./src/images");
const { createUniqueId } = require("./src/boards");

const main = async () => {
  console.log(await returnImages());
  console.log(await createUniqueId());
};

main()