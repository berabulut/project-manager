# Table of Contents

- [Setup](#Setup)
- [Environment Variables](#Environment-Variables)
- [Docs](#Docs)

# Setup

- Run npm install to install dependencies
- Create an [.env](./.env) file and copy the variables from the [.env.EXAMPLE](./.env.EXAMPLE) file
  - fill out the DATABASE_URL from [Firebase](https://console.firebase.google.com/project/_/settings/general/)
- Create firebaseConfig.json in root directory (service root)
- Generate a new key for Firebase admin-sdk from [here](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).
- Copy what's inside to firebaseConfig.json.
  - It should look like the [firebaseConfig.json.EXAMPLE](./firebaseConfig.json.EXAMPLE)
- Run npm run login to login to your serverless account
- Run npm run deploy to deploy your code to AWS
  - Your serverless account must be connected to AWS for deployment
  - For development run npm run offline to run service offline

```bash
# Install dependencies
$ npm install

# Serverless Login
$ npm run login

# To deploy
$ npm run deploy

# To test in your local env
$ npm run offline
```

# Environment Variables

Using Firebase Realtime DB.

```
DATABASE_URL=XXX
SLS_DEBUG=*
```

# Docs

### Endpoints

| [USER](./docs/UserEndpoints.md) | [BOARD](./docs/BoardEndpoints.md) | [LIST](./docs/ListEndpoints.md) | [TASK](./docs/TaskEndpoints.md) |
| :------------------------------ | :-------------------------------- | :------------------------------ | :------------------------------ |
| `POST /user`                    | `PUT, POST /board`                | `PUT, POST /list`               | `POST /task`                    |
| `GET /user`                     | `PUT /board/invite`               | `PUT /list/rename`              | `PUT /task-reorder`             |
| `PUT, POST /user/boards`        | `POST /board/users`               | `PUT /list/remove`              | `PUT /task-switch`              |
|                                 |                                   |                                 | `PUT /task-update`              |
