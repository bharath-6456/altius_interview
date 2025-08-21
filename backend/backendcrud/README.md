# Express MongoDB CRUD API

This project is a RESTful CRUD API built using Express and MongoDB Atlas, featuring user authentication and authorization.

## Features

- User registration and login
- JWT-based authentication
- CRUD operations for user data
- Error handling middleware
- Environment variable management

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- dotenv

## Project Structure

```
express-mongo-crud-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── config
│   │   └── db.js            # Database connection configuration
│   ├── controllers
│   │   └── userController.js # User-related operations
│   ├── middleware
│   │   ├── auth.js           # Authentication and authorization middleware
│   │   └── errorHandler.js    # Error handling middleware
│   ├── models
│   │   └── user.js           # User model schema
│   ├── routes
│   │   └── userRoutes.js     # User-related routes
│   └── utils
│       └── token.js          # JWT utility functions
├── package.json               # NPM dependencies and scripts
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-mongo-crud-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Start the application:
   ```
   npm start
   ```

## API Usage

### User Registration

- **Endpoint:** `POST /api/users/register`
- **Request Body:** 
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

### User Login

- **Endpoint:** `POST /api/users/login`
- **Request Body:** 
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

### Get User

- **Endpoint:** `GET /api/users/:id`
- **Authorization:** Bearer token required

### Update User

- **Endpoint:** `PUT /api/users/:id`
- **Authorization:** Bearer token required
- **Request Body:** 
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

### Delete User

- **Endpoint:** `DELETE /api/users/:id`
- **Authorization:** Bearer token required

## License

This project is licensed under the MIT License.