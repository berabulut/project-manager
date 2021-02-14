# Board Endpoints

- ## Create New Board 

	- Post
	- Params :
		- title
		- coverPhoto
		- visibility
		- users (expected array : [{"uid": "123"}, {"uid": "321"}])

- ## Return User Related Boards

	- Post (i couldn't be bothered by passing an array with get request)
	- Params :
		- boardList (expected array : [ "boardId1", "boardId2"]) 