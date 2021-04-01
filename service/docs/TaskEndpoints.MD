- ## Create a new task

  `POST`
  `/task` <br />
  `Params` :

  ```
  	- boardId
  	- listId
  	- task (342(listId) : {id, title})
  	- taskIds (array of task ids : ["123", "321", "342"])
  ```

- ## Reorder a task (in the same list)

  `PUT`
  `/task-reorder` <br />
  `Params` :

  ```
  	- boardId
  	- listId
  	- taskIds
  ```

- ## Switch a task between lists 

  `PUT`
  `/task-switch` <br />
  `Params` :

  ```
  	- boardId
  	- lists (updating all lists expected an array ["123" : {...}, "321" : {...}])
  ```

- ## Update a task

  `PUT`
  `/task-update` <br />
  `Params` :

  ```
      - boardId
      - taskId
	  - property (title, description, attachments, assigments, comments, labels)
	  - data (property's data)
  ```

