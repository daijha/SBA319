# SBA319

Hello,
This is my submission for a skills based assessment that focuses on creating a database application using MongoDB. My submission contains three collections that contain user information. Routes and schemas were made so that the information can be read, accessed, updated or deleted ( all of the CRUD stuff). I made sure the post requests I  made were visible in Mongo compass as well.

API documentation:
This is my first time writing API documentation so forgive me if it is incorrect,  I have only given my best:
The collections featured in this application are Users, Location and Talents. The available endpoints created for each data type are listed below. They are pretty much identical in how they function:

User Endpoints:

GET /users -> Returns all of the user data.

GET /users/:id -> Returns a user by the _id  provided by Mongodb.

POST /users -> Allows you to add a user to the database.

PATCH /users/:id -> Allows you to update a user by accessing their _id provided by Mongodb.

DELETE /users/:id -> Deletes a user by _id  and returns the data deleted. 

Location Endpoints:

I specify the location's unique id to ensure that it is not being confused with the UserId, as they have the same structure. If you make a mistake, its not on me... 

GET /locations -> Returns all of the data on user locations each location entry has its own unique _id provided by Mongodb.

GET /locations/:id -> Returns a user by the unique location _id provided by Mongodb. The result will also include the userId.

POST /locations -> Allows you to add a user to the database.

PATCH /locations/:id -> Allows you to update a user's location by accessing the unique location _id provided by Mongodb.

DELETE /locations/:id -> Deletes a user's location information which is accessed by the unique location _id,  and returns the data deleted. 


Talents Endpoints:

GET /talents -> Returns all of the user talents.

GET /talents/:id -> Returns a user by the unique talents _id  provided by Mongodb.

POST /talents -> Allows you to add a talent to a user in the database. This talent will have its own _id after generation. 

PATCH /talents/:id -> Allows you to update a user's talents by accessing the talents' _id provided by Mongodb.

DELETE /talents/:id -> Deletes a talent by its unique  _id  and returns the data deleted. 


This is the most I have written for a README so I hope it meets the requirements and is satisfactory.  

As always, Thanks for your time and  Please enjoy. (and give me a great score!)
