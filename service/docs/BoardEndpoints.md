# Board Endpoints

- ## Create a new board

  `POST`
  `/board` <br />
  `Params` :

  ```
  	- admin (user data of admin)
  	- title
  	- coverPhoto
  	- visibility
  	- users (expected array : [{"uid": "123"}, {"uid": "321"}])
  ```

- ## Update board

  `PUT`
  `/board` <br />
  `Params` :

  ```
  	- boardId (user data of admin)
  	- property (title, description, users)
  	- data (property's data)
  ```

- ## Invite a user to board

  `PUT`
  `/board/invite` <br />
  `Params` :

  ```
  	- boardId
  	- address (like user email)
  ```

- ## Return board related users' data

  `POST`
  `/board/users` <br />
  `Params` :

  ```
     - userList (expected array : [{"uid": "123"}, {"uid": "321"}])
  ```
