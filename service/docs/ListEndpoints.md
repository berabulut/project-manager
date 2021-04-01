- ## Create a new list

  `POST`
  `/list` <br />
  `Params` :

  ```
  	- boardId
  	- list (342(listId) : {id, taskIds:[], title})
  	- listOrder (array of list ids : ["123", "321", "342"])
  ```

- ## Reorder lists

  `PUT`
  `/list` <br />
  `Params` :

  ```
  	- boardId
  	- listOrder (array of list ids : ["342", "321", "123"]) 
  ```

- ## Rename the list

  `PUT`
  `/list/rename` <br />
  `Params` :

  ```
      - boardId
      - listId 
	  - title
  ```

- ## Delete the list 

  `PUT`
  `/list/remove` <br />
  `Params` :

  ```
  	- boardId
  	- listId 
  ```
