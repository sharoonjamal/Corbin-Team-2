@url = http://localhost:8090/api/characters

````
GET {{url}} HTTP/1.1

Response
[
	{
		"characterId": 6,
		"firstName": "Beth",
		"lastName": "Harmon",
		"gender": "Female",
		"country": "USA",
		"fideRating": 8
	}
]

###

GET {{url}}/{{id}} HTTP/1.1

Response:
{
	"characterId": 6,
	"firstName": "Beth",
	"lastName": "Harmon",
	"gender": "Female",
	"country": "USA",
	"fideRating": 8
}
###

POST  {{url}} HTTP/1.1
Content-Type: application/json

Request
{
	"firstName": "Beth",
	"lastName": "Harmon",
	"gender": "Female",
	"country": "USA",
	"fideRating": 8 
}


Response
{
	"characterId": 5,
	"firstName": "Beth",
	"lastName": "Harmon",
	"gender": "Male",
	"country": "USA",
	"fideRating": 8
}

###

PUT {{url}}/ HTTP/1.1
Content-Type: application/json

{
	"firstName": "Aaron",
	"lastName": "Jake",
	"gender": "Male",
	"country": "USA",
	"fideRating": 8 
}

###

DELETE {{url}}/{{id}} HTTP/1.1