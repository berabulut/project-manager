# Board Endpoints

- ## Create New Board 

	- Post
	- Params :
		- title
		- coverPhoto
		- visibility
		- users (expected array : [{"uid": "123"}, {"uid": "321"}])

- ## Return User Related Boards

	- Post (i couldn't be bothered by passing params with get request)
	- Params :
		- boards (the array we are receiving from user) 