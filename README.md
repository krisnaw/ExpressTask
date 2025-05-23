# ExBE - Express Backend

A simple Express.js backend application with TypeScript, PostgreSQL, and Drizzle ORM.

## Description

ExBE is a RESTful API server built with Express.js and TypeScript. It provides endpoints for user management and authentication, with a placeholder for task management functionality. The application uses PostgreSQL as the database and Drizzle ORM for database operations.

## Features

- User management (CRUD operations)
- Authentication (login, register, logout, password reset, email verification)
- Task management (placeholder)
- PostgreSQL database with Drizzle ORM
- TypeScript support

## Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and set your PostgreSQL database URL
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   ```
4. Run database migrations
   ```bash
   npx drizzle-kit push:pg
   ```

## Usage

To start the development server with hot reloading:

```bash
npm run dev
```

The server will start on http://localhost:3001

## API Endpoints

### Root
- `GET /`: Returns "Hello World!"

### User Routes (`/api/user`)
- `GET /api/user`: Get all users
- `GET /api/user/:id`: Get user by ID
- `POST /api/user`: Create a new user
- `PUT /api/user/:id`: Update user by ID
- `DELETE /api/user/:id`: Delete user by ID

### Authentication Routes (`/api/auth`)
- `GET /api/auth`: Authentication root
- `GET /api/auth/login`: Login endpoint
- `POST /api/auth/register`: Register endpoint
- `GET /api/auth/logout`: Logout endpoint
- `GET /api/auth/forgot-password`: Forgot password endpoint
- `GET /api/auth/reset-password`: Reset password endpoint
- `GET /api/auth/verify-email`: Email verification endpoint

### Task Routes (`/api/task`)
- `GET /api/task`: Task management root

## Database Schema

### Users Table
- `id`: Integer, Primary Key, Auto-increment
- `name`: VARCHAR(255), Not Null
- `age`: Integer, Not Null
- `email`: VARCHAR(255), Not Null, Unique
- `password`: VARCHAR(255), Not Null

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string (required)

## Development

This project uses:
- TypeScript for type safety
- Nodemon for hot reloading during development
- Drizzle ORM for database operations
- Express.js for the web server
- bcrypt for password hashing
- dotenv for environment variable management

## Author

Krisna Wijaya