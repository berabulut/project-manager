- ## Create a new user record

  `POST`
  `/user` <br />
  `Params` :

  ```
  	- uid
  	- email
  	- name
  	- picture
  ```

- ## Return user data after login

  `GET`
  `/user?uid=${uid}` <br />

- ## Remove a user from board

  `PUT`
  `/user/boards` <br />
  `Params` :

  ```
  	- boardId
  	- userId
  ```

- ## Return user related boards

  `POST`
  `/user/boards` <br />
  `Params` :

  ```
  	- boardList (expected array of board ids : [ "123",  "321"])
  ```
