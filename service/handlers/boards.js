const { inviteUser } = require("../src/boards");

module.exports.invite = (event) => {
	const promise = new Promise((resolve) => {
	  const { boardId, email } = JSON.parse(event.body);
	  if (boardId && email) {
		inviteUser(boardId, email)
		  .then((data) => {
			const response = {
			  statusCode: 200,
			  headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true,
			  },
			  body: JSON.stringify({
				statusCode: 200,
				data: data,
			  }),
			};
			resolve(response);
		  })
		  .catch((err) => {
			const response = {
			  statusCode: 500,
			  headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true,
			  },
			  body: JSON.stringify({
				statusCode: 500,
				error: err,
			  }),
			};
			resolve(response);
		  });
	  } else {
		const response = {
		  statusCode: 400,
		  headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
		  },
		  body: JSON.stringify({
			statusCode: 400,
			message: "Missing body element",
		  }),
		};
		resolve(response);
	  }
	});
	return promise;
  };
  