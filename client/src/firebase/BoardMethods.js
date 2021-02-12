export const createNewUserRecord = async (data) => {
	try {
	  let response = await fetch(
		process.env.REACT_APP_SERVICE_URL + `/createNewBoard`,
		{
		  method: "POST",
		  headers: new Headers({
			Authorization: "b066d3fe-fcda-4263-b8dc-a012ce5f2641",
			"Content-type": "application/json; charset=UTF-8",
		  }),
		  body: JSON.stringify(data),
		}
	  );
	  return await response.json();
	} catch (err) {
	  console.log(err);
	}
  };