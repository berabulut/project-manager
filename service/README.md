# Table of Contents

- [Setup](#Setup)
- [Environment Variables](#Environment-Variables)
- [Docs](#Docs)


# Setup
 - Create firebaseConfig.json in root directory (service root).
 - Generate a new key for Firebase admin-sdk from [here](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).
 - Copy what's inside to firebaseConfig.json.
 - It should look like this : 

 ``` {
  "type": "service_account",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
 ```

```bash
# Install dependencies
$ npm install

# To deploy 
$ serverless deploy

# To test in your local env
$ serverless offline
```

# Environment Variables

Using Firebase Realtime DB.

``` 
DATABASE_URL=XXX
SLS_DEBUG=*
```

# Docs

### Endpoints

|[USER](./docs/UserEndpoints.md)   | [BOARD](./docs/BoardEndpoints.md) | [LIST](./docs/ListEndpoints.md) | [TASK](./docs/TaskEndpoints.md)
|:-------------                 | :-------------                 | :----------                  |  :----------                
| `POST /user`                  | `PUT, POST /board`             | `PUT, POST /list`            |  `POST /task`               
| `GET /user`                   | `PUT /board/invite`            | `PUT /list/rename`           |  `PUT /task-reorder`
| `PUT, POST /user/boards`      | `POST /board/users`            | `PUT /list/remove`           |  `PUT /task-switch`
|                               |                                |                              |  `PUT /task-update`
