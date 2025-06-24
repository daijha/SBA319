# SBA319

Hello,
This is my submission for a skills based assesment that focuses on creating a database application using MongoDB. My submission contains three datatypes that contain user information. Routes and schemas were made so that the information can be read/ accessed as well as updated or deleted ( all of the CRUD stuff). I made sure the post requests I  made were visible in Mongo compass as well.

API documentation:
This is my first time writing API documentation so forgive me if it is incorrect, im doing my best:
The data types featured in this application are Users, Location and Talents. The available endpoints created for each data type are listed below. They are pretty much identical in how they function:

User Endpoints:

GET /users -> Returns all of the user data.
GET /users/:id -> Returns returns one user by the _id  provided by Mongodb.
POST /users -> Allows you to add a user to the database.
PATCH /users/:id -> Allows you to update a user by acessing their _id provided by Mongodb.
DELETE /users/:id -> Deletes a user by _id  and returns the data deleted. 

Location Endpoints:


Talents Endpoints:


Please enjoy and give me a great score!
