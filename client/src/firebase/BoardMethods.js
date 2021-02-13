export const CreateNewBoard = async (boardData) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_SERVICE_URL + `/createNewBoard`,
      {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(boardData),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
