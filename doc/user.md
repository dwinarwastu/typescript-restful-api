# User API Spec

## Register User

Endpoint : POST /api/users

Request Body : 

```json
{
  "username": "dwinarwastu",
  "password": "secret",
  "name": "dwi"
}
```

Response Body (Success) : 

```json
{
  "data": {
    "username": "dwinarwastu",
    "name": "dwi"
  }
}
```

Response Body (Failed) :
```json
{
  "errors": "Username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "dwinarwastu",
  "password": "secret"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "dwinarwastu",
    "name": "dwi",
    "token": "uuid"
  }
}
```

Response Body (Failed) :
```json
{
  "errors": "Username or password wrong, ..."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header : 
- X-API_TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "dwinarwastu",
    "name": "dwi"
  }
}
```

Response Body (Failed) :
```json
{
  "errors": "Username must not blank, ..."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "password": "secret",
    "name": "dwi"
  }
}
```

Response Body (Failed) :
```json
{
  "errors": "Unauthorized, ..."
}
```

## Logout User

Endpoint : DELEte /api/users/curre

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "Success"
}
```

Response Body (Failed) :
```json
{
  "errors": "Unauthorized, ..."
}
```
