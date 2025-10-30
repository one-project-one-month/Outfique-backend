Create auth folder in feature to handle authentication. Authentication is handled by better-auth.ts. There is a controller file and a service file for onboarding data. 

Handle auth routes in app.ts using better-auth.ts built in. Onboarding routes are handled in auth/route.ts. 

Auth routes

http://localhost:3000/api/auth/sign-up/email POST

http://localhost:3000/api/auth/sign-in/email POST

http://localhost:3000/api/auth/sign-out POST

http://localhost:3000//api/auth/sign-in/social POST



Onboarding Routes

http://localhost:3000/api/v1/auth/onboarding PUT

http://localhost:3000/api/v1/auth/user-details/:userId GET (*need better-auth token)

Need to add these two as I forgot to add in env.example. I used mailtrap for email verification.
MAILTRAP_USER=
MAILTRAP_PASS=
