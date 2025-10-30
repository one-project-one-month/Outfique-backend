# Authentication & Onboarding API Documentation

Base URL: `http://localhost:3000`

## Overview

Authentication is handled by **better-auth.ts**. The application uses a feature-based folder structure with separate controller and service files for onboarding data.

### Project Structure
```
features/
└── auth/
├── onboarding/
    
```

- **Auth routes** are handled in `app.ts` using better-auth.ts built-in functionality
- **Onboarding routes** are handled in `auth/routes.ts`

---

## Authentication Routes

### Sign Up

Create a new user account with email and password.

**Endpoint:** `POST /api/auth/sign-up/email`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": null,
  "user": {
    "id": "string",
    "email": "string",
    "name": "string",
    "emailVerified": false,
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

---

### Sign In

Authenticate an existing user with email and password.

**Endpoint:** `POST /api/auth/sign-in/email`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "redirect": false,
  "token": "string",
  "user": {
    "id": "string",
    "email": "string",
    "name": "string",
    "emailVerified": false,
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

---

### Sign Out

End the current user session.

**Endpoint:** `POST /api/auth/sign-out`

**Request Body:** None

**Response:**
```json
{
  "success": true
}
```

---

### Social Sign In (Google)

Initiate OAuth authentication with Google.

**Endpoint:** `POST /api/auth/sign-in/social`

**Request Body:**
```json
{
  "provider": "google",
  "callbackURL": "string"
}
```

**Response:**
```json
{
  "url": "string",
  "redirect": true
}
```

---

## Onboarding Routes

### Add & Update Onboarding

Create or update user onboarding information including personal details, fashion preferences, and style choices.

**Endpoint:** `PUT /api/v1/onboarding`

**Request Body:**
```json
{
  "name": "string",
  "birthday": "1999-05-10",
  "height": int,
  "weight": int,
  "gender": "string",
  "color": ["string"],
  "bodyType": {
    "name": "string",
    "description": "string"
  },
  "accessories": [
    {
      "name": "string",
      "description": "string"
    }
  ],
  "fashionStyles": [
    {
      "name": "string",
      "description": "string"
    }
  ]
}
```

**Notes:**
- `height` is in centimeters (cm)
- `weight` is in kilograms (kg)
- `color` can contain multiple strings
- `bodyType` only one body type per account
- `accessories` can contain multiple items
- `fashionStyles` can contain multiple styles

**Response:**
```json
{
  "message": "Onboarding updated successfully",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "emailVerified": false,
    "createdAt": "Date",
    "updatedAt": "Date",
    "height": int,
    "weight": int,
    "birthday": "1999-05-10T00:00:00.000Z",
    "gender": "string",
    "color": ["string"],
    "isActive": true,
    "onboardingCompleted": true,
    "privacyLevel": "standard",
    "timezone": "Asia/Bangkok",
    "bodyType": {
      "id": "string",
      "userId": "string",
      "name": "string",
      "description": "string",
      "createdAt": "Date",
      "updatedAt": "Date"
    },
    "accessories": [
      {
        "id": "string",
        "userId": "string",
        "name": "string",
        "description": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
      }
    ],
    "fashionStyles": [
      {
        "id": "string",
        "userId": "string",
        "name": "string",
        "description": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
      }
    ]
  }
}
```

---

### Get Onboarding by User ID

Retrieve onboarding information for a specific user.

**Endpoint:** `GET /api/v1/onboarding/user-details/:userId`

**Request Parameters:**
- `userId` (path parameter): The unique identifier of the user

**Response:**
```json
{
  "message": "User details fetched successfully",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "height": int,
    "weight": int,
    "birthday": "1999-05-10T00:00:00.000Z",
    "gender": "string",
    "color": ["string"],
    "bodyType": {
      "id": "string",
      "name": "string",
      "description": "string"
    },
    "accessories": [
      {
        "id": "string",
        "name": "string",
        "description": "string"
      }
    ],
    "fashionStyles": [
      {
        "id": "string",
        "name": "string",
        "description": "string"
      }
    ]
  }
}
```

---
