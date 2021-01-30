"use strict";
const { testDB } = require("../src/firebase");

module.exports.hello = async (event, context, callback) => {
  try {
    const data = await testDB();
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        db_value: data,
      }),
    };
    callback(null, response);
  } catch (err) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        error: err,
      }),
    };
    callback(null, response);
  }
};
