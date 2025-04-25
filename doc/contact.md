# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Request Header :
- X-API-TOKEN : token

Request Body : 
```json
{
  "first_name" : "Dwi",
  "last_name" : "Narwastu",
  "email" : "dwinarwastu@mail.com",
  "phone" : "081999999999"
}
```

Response Body (Success) : 
```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Dwi",
    "last_name" : "Narwastu",
    "email" : "dwinarwastu@mail.com",
    "phone" : "081999999999"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "first_name must not blank, ..."
}
```

## Get Contact

Endpoint : GET /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Response Body (Success) :
```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Dwi",
    "last_name" : "Narwastu",
    "email" : "dwinarwastu@mail.com",
    "phone" : "081999999999"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "contact is not found, ..."
}
```

## Update Contact

Endpoint : PUT /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Request Body :
```json
{
  "first_name" : "Dwi",
  "last_name" : "Narwastu",
  "email" : "dwinarwastu@mail.com",
  "phone" : "081999999999"
}
```

Response Body (Success) :
```json
{
  "data" : {
    "id" : 1,
    "first_name" : "Dwi",
    "last_name" : "Narwastu",
    "email" : "dwinarwastu@mail.com",
    "phone" : "081999999999"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "first_name must not blank, ..."
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Response Body (Success) :
```json
{
  "data" : "Success"
}
```

Response Body (Failed) :
```json
{
  "errors" : "contact is not found, ..."
}
```

## Search Contact

Endpoint : GET /api/contacts

Query Parameter : 
- name : string, contact first_name or contact last_name, optional
- email : email, contact email, optional
- phone : phone, contact phone, optional
- page : number, default 1
- size : number, default 10

Request Header :
- X-API-TOKEN : token

Response Body (Success) :
```json
{
  "data" : [
    {
      "id" : 1,
      "first_name" : "Dwi",
      "last_name" : "Narwastu",
      "email" : "dwinarwastu@mail.com",
      "phone" : "081999999999"
    },
    {
      "id" : 2,
      "first_name" : "Hengky",
      "last_name" : "Triatmoko",
      "email" : "hengkytriatmoko@mail.com",
      "phone" : "081888888888"
    }
  ],
  "paginng" : {
    "current_page" : 1,
    "total_page" : 10,
    "size" : 10
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "Unauthorized"
}
```