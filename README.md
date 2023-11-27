# Book_Library_Service
A simple Book Library service implemented using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Database](#database)
- [Contact](#contact)

## Features

- Adding a Book
- View a list of all books.
- View  book by Id.
- Update book by Id.
- Delete book by Id.

## Getting Started
  
  ### Prerequisites

**Make sure you have the following installed:**

- Node.js and npm
- MongoDB

 ### Installation

**1. Clone the repository:**  
```
bash  
   git clone https://github.com/Sandeep7277/Book_Library_Service.git
```
**2. Install dependencies:**  
cd Book_Library_Service  
npm install  
 
## Usage  
**Start the server:**  
npm start

Visit http://localhost:5000 in your browser to access the Book Library service.  
    OR  
-Install Postman  
-Import `Book_Library_Service.postman_collection.json` Postman collection file (It available in Project root folder).  
-Send request from postman collection to access the Book Library Service.  
  
## API Documentation

**Base URL**  
http://localhost:5000/api/v1  
  
**Endpoints**  
  
**1. Get All Books**  
  
Endpoint --> GET /books  
Description --> Get a list of all books in the library.  
Request --> Method: GET  
Response -->  
Status Code: 200 OK  
Headers -> Content-Type: application/json  
Body:  
```
{  
    "Status": "Success",  
    "Length": 1,  
    "Data": {  
        "books": [
            {
                "_id": "6564977d04c335d88208649b",
                "title": "Think Like a Programmer",
                "description": "An Introduction to Creative Problem Solving",
                "author": "V Anton Spraul",
                "edition": "1st",
                "publication": "No Starch Press",
                "publishedYear": 2012,
                "__v": 0
            }
        ]
    }
}
```

**2. Add Book**  
  
Endpoint --> POST /books  
Description --> Add a new book to the library.  
Request -->  
Method: POST  
Headers -> Content-Type: application/json  
Body:  
```
{
    "title":"Think Like a Programmer",
    "description":"An Introduction to Creative Problem Solving",
    "author":"V Anton Spraul",
    "edition":"1st",
    "publication":"No Starch Press",
    "publishedYear":"2012"

}
```
  
Response -->  
Status Code: 201 Created  
Headers -> Content-Type: application/json  
Body:  
```
{
    "Status": "Success",
    "Data": {
        "book": {
            "title": "Think Like a Programmer",
            "description": "An Introduction to Creative Problem Solving",
            "author": "V Anton Spraul",
            "edition": "1st",
            "publication": "No Starch Press",
            "publishedYear": 2012,
            "_id": "6564977d04c335d88208649b",
            "__v": 0
        }
    }
}
```
  
**3. Get Book by ID**  
  
Endpoint --> GET /books/{id}  
Description --> Get details of a specific book by its ID. 
Request --> Method: GET  
Response -->  
Status Code: 200 OK  
Headers -> Content-Type: application/json  
Body:  
```
{
    "Status": "Success",
    "Data": {
        "book": {
            "_id": "6564977d04c335d88208649b",
            "title": "Think Like a Programmer",
            "description": "An Introduction to Creative Problem Solving",
            "author": "V Anton Spraul",
            "edition": "1st",
            "publication": "No Starch Press",
            "publishedYear": 2012,
            "__v": 0
        }
    }
}
```
  
**4. Update Book**  
  
Endpoint --> PUT /books/{id}  
Description --> Update details of a specific book by its ID.  
Request --> Method: PUT  
Headers -> Content-Type: application/json  
Body:  
```
{
     "edition":"2st",
    "publishedYear":"2013"
}
```
  
Response -->  
Status Code: 200 OK  
Headers -> Content-Type: application/json  
Body:  
```
{
    "Status": "Success",
    "Data": {
        "Book": {
            "_id": "6564977d04c335d88208649b",
            "title": "Think Like a Programmer",
            "description": "An Introduction to Creative Problem Solving",
            "author": "V Anton Spraul",
            "edition": "2st",
            "publication": "No Starch Press",
            "publishedYear": 2013,
            "__v": 0
        }
    }
}
```
  
**5. Delete Book**  
Endpoint --> DELETE /books/{id}  
Description --> Delete a book from the library by its ID.  
Request --> Method: DELETE  
Response --> Status Code: 204 No Content  
  
**Error Handling**  
Status Code: 404 Not Found  
Description: The requested resource (book) was not found.  
Status Code: 500 Internal Server Error  
Description: A generic error message, given when no more specific message is suitable.  
  
## Database  
This project uses MongoDB as its database. Make sure your MongoDB server is running.   
The default connection URI is mongodb://localhost:27017/Library.  
  
## Contact  
For any inquiries or support, please contact [here.](sandeepmca0604@gmail.com)  
