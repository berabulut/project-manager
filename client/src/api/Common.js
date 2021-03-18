export const GetUniqueId = () => new Promise(async(resolve, reject) => {
	try {
	  let response = await fetch(
		process.env.REACT_APP_SERVICE_URL + `/id`,
		{
		  method: "GET",
		  headers: new Headers({
			"Content-type": "application/json; charset=UTF-8",
		  }),
		}
	  );
	  resolve(await response.json());
	} catch (err) {
	  reject(err);
	}
  })