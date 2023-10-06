@url = http://localhost:8090/api/fans

````
GET {{url}} HTTP/1.1

Response
[
	{
		"id": 6,
		"firstName": "Aaron",
		"lastName": "Jake",
		"email": "haha8a@email.com",
		"country": "USA",
		"favoriteCharacter": {
			"characterId": 6,
			"firstName": "Beth",
			"lastName": "Harmon",
			"gender": "Female",
			"country": "USA",
			"fideRating": 8
		},
		"favoriteCharacterId": 6,
		"fideRating": 8
	}
]

###

GET {{url}}/1 HTTP/1.1

Response:
{
	"id": 6,
	"firstName": "Aaron",
	"lastName": "Jake",
	"email": "haha8a@email.com",
	"country": "USA",
	"favoriteCharacter": {
		"characterId": 6,
		"firstName": "Beth",
		"lastName": "Harmon",
		"gender": "Female",
		"country": "USA",
		"fideRating": 8
	},
	"favoriteCharacterId": 6,
	"fideRating": 8
}

###

POST  {{url}} HTTP/1.1
Content-Type: application/json


request:
{
	"firstName": "Aaron",
	"lastName": "Jake",
	"email": "haha8a@email.com",
	"country": "USA",
	"favoriteCharacterId": 6,
	"fideRating": 8 
}

response:
{
	"id": 6,
	"firstName": "Aaron",
	"lastName": "Jake",
	"email": "haha8a@email.com",
	"country": "USA",
	"favoriteCharacter": {
		"characterId": 6,
		"firstName": "Beth",
		"lastName": "Harmon",
		"gender": "Female",
		"country": "USA",
		"fideRating": 8
	},
	"favoriteCharacterId": 6,
	"fideRating": 8
}

###

PUT {{url}}/ HTTP/1.1
Content-Type: application/json
Request:
{
	"firstName": "Aaron2",
	"lastName": "Jake2",
	"email": "haha9a@email.com",
	"country": "USA",
	"favoriteCharacterId": 5,
	"fideRating": 8 
}

###

DELETE {{url}}/{{id}} HTTP/1.1