Create auth folder in feature to handle authentication. Authentication is handled by better-auth.ts. There is a controller file and a service file for onboarding data.

Handle auth routes in app.ts using better-auth.ts built in. Onboarding routes are handled in auth/route.ts.

#Base URL: http://localhost:3000

##Auth routes

###Sign Up
Endpoint: /api/auth/sign-up/email
Method: POST
Req:
{
"name": string,
"email": string,
"password": string
}

Res:
{
"token": null,
"user": {
"id": string,
"email": string,
"name": email,
"emailVerified": boolean,
"createdAt": Date,
"updatedAt": Date
}
}

###Sign In
Endpoint: /api/auth/sign-in/email
Method: POST
Req:
{
"email": string,
"password": string
}
Res:
{
"redirect": false,
"token": token,
"user": {
"id": string",
"email": string,
"name": string,
"emailVerified": boolean,
"createdAt": Date,
"updatedAt": Date
}
}

###Sign Out
Endpoint: /api/auth/sign-out
Method: POST
Req:
Res:
{
"success": boolean
}

Social Sign In(google only)
Endpoint: /api/auth/sign-in/social
Method: POST
Req:
{
"provider": "google",
"callbackURL": url
}
Res:
{
"url": url,
"redirect": boolean
}

##Onboarding Routes

###Add & Update Onboarding
Endpoint: api/v1/onboarding
Method: PUT
Req:
{
"name": string,
"birthday": "1999-05-10",
"height": Int(cm),
"weight": Int(kg),
"gender": string,
"color": [string], can be added more

"bodyType": { "name": string, "description": string }, only one body type per an account

"accessories": [
{ "name": string, "description": string },
can be added more
],
"fashionStyles": [
{ "name": string, "description": string },
can be added more
]
}
Res:
{
"message": "Onboarding updated successfully",
"user": {
"id": string,
"name": string,
"email": string,
"emailVerified": boolean,
"createdAt": Date,
"updatedAt": Date,
"height": Int,
"weight": Int,
"birthday": "1999-05-10T00:00:00.000Z",
"gender": string,
"color": [
string
],
"isActive": boolean,
"onboardingCompleted": boolean,
"privacyLevel": "standard",
"timezone": "Asia/Bangkok", string
"bodyType": {
"id": string",
"userId": string,
"name": string,
"description": string,
"createdAt": Date,
"updatedAt": Date
},
"accessories": [
{
"id": string,
"userId": string,
"name": string,
"description": string,
"createdAt": Date,
"updatedAt": Date
},
],
"fashionStyles": [
{
"id": string,
"userId": string,
"name": string,
"description": string,
"createdAt": Date,
"updatedAt": Date
},
]
}
}

###Get onboarding by user Id
Endpoint: api/v1/onBoarding/user-details/:userId
Method: Get
Req:
Authorization: Better Auth <better auth token>
Res:
{
"message": "User details fetched successfully",
"user": {
"id": string",
"name": string,
"email": string,
"height": int,
"weight": int,
"birthday": "1999-05-10T00:00:00.000Z",
"gender": string,
"color": [
string
],
"bodyType": {
"id": string,
"name": string,
"description": string
},
"accessories": [
{
"id": string,
"name": string,
"description": string
},
],
"fashionStyles": [
{
"id": string,
"name": string,
"description": string
},
{
"id": string,
"name": string,
"description": string
}
]
}
}
