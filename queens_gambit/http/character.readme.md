@url = http://localhost:8090/api/characters

````
GET {{url}} HTTP/1.1

###

GET {{url}}/1 HTTP/1.1

###

POST  {{url}} HTTP/1.1
Content-Type: application/json

{
"firstName": "Jerry",
"lastName": "Test1"
}

###

PUT {{url}}/ HTTP/1.1
Content-Type: application/json

{
"firstName": "Jerry",
"lastName": "Test"
}

###

DELETE {{url}}/{{id}} HTTP/1.1