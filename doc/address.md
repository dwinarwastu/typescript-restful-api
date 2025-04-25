## Address API Spec

# Create Address

Endpoint : POST /api/contacts/:idContact/addresses

Request Header : 
- X-API-TOKEN : token

Request Body : 
```json
{
  "street" : "Jalan Tabrani",
  "city" : "Kediri",
  "province" : "Jawa Timur",
  "country" : "Indonesia",
  "postal_code" : "64224"
}
```

Response Body (Success) :
```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Tabrani",
    "city" : "Kediri",
    "province" : "Jawa Timur",
    "country" : "Indonesia",
    "postal_code" : "64224"
  }
}
```

Response Body (Failed) : 
```json
{
  "errors" : "postal_code is required"
}
```

# Get Address

Endpoint : GET /api/contacts/:idContact/addresses/:idAddress

Request Header :
- X-API-TOKEN : token

Response Body (Success) :
```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Tabrani",
    "city" : "Kediri",
    "province" : "Jawa Timur",
    "country" : "Indonesia",
    "postal_code" : "64224"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "address is not found"
}
```

# Update Address

Endpoint : PUT /api/contacts/:idContact/addresses/:idAddress

Request Header :
- X-API-TOKEN : token

Request Body :
```json
{
  "street" : "Jalan Tabrani",
  "city" : "Kediri",
  "province" : "Jawa Timur",
  "country" : "Indonesia",
  "postal_code" : "64224"
}
```

Response Body (Success) :
```json
{
  "data" : {
    "id" : 1,
    "street" : "Jalan Tabrani",
    "city" : "Kediri",
    "province" : "Jawa Timur",
    "country" : "Indonesia",
    "postal_code" : "64224"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "postal_code is required"
}
```

# Remove Address

Endpoint : DELETE /api/contacts/:idContact/addresses/:idAddress

Request Header :
- X-API-TOKEN : token
- 
Response Body (Success) :
```json
{
  "data" : "Success"
}
```

Response Body (Failed) :
```json
{
  "errors" : "address is not found"
}
```

# List Address

Endpoint : GET /api/contacts/:idContact/addresses

Request Header :
- X-API-TOKEN : token

Response Body (Success) :
```json
{
  "data" : [
    {
      "id" : 1,
      "street" : "Jalan Tabrani",
      "city" : "Kediri",
      "province" : "Jawa Timur",
      "country" : "Indonesia",
      "postal_code" : "64224"
    },
    {
      "id" : 2,
      "street" : "Jalan Imam Bonjol",
      "city" : "Denpasar",
      "province" : "Bali",
      "country" : "Indonesia",
      "postal_code" : "64344"
    }
  ]
}
```

Response Body (Failed) :
```json
{
  "errors" : "contact is not found"
}
```

