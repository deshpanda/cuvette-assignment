# Student Job Tracker

A fullstack MERN application to help students track and manage their job applications.

## Features

- **Add Job Applications**: Keep track of companies, roles, application dates, and links
- **List Applications**: View all job applications in a clean, responsive layout
- **Filter Applications**: Filter by application status or date range
- **Update Status**: Update application status as you progress through the hiring process
- **Delete Applications**: Remove job applications that are no longer relevant

## Tech Stack

### Frontend
- React (with Hooks)
- Context API for state management
- Axios for API requests
- CSS for styling

### Backend
- Node.js & Express.js
- MongoDB for database
- Mongoose ORM

### Deployment
- Frontend: Vercel
- Backend: Render 
- Database: MongoDB Atlas

## Live Demo

- Frontend: [https://student-job-tracker-deshpandas-projects.vercel.app/](https://student-job-tracker-deshpandas-projects.vercel.app/)
- Backend API: [https://student-job-tracker-api.onrender.com](https://student-job-tracker-api.onrender.com)

## Project Structure
```
student-job-tracker/
├── frontend/             # React frontend
│   ├── public/           # Public assets
│   ├── src/              
│   │   ├── components/   # React components
│   │   ├── context/      # Context API setup
│   │   ├── App.js        # Main component
│   │   └── index.js      # Entry point
│   └── package.json      # Frontend dependencies
│
└── backend/              # Node.js backend
    ├── config/           # Configuration files
    ├── controllers/      # Request handlers
    ├── models/           # Mongoose models
    ├── routes/           # API routes
    ├── .env              # Environment variables
    ├── server.js         # Entry point
    └── package.json      # Backend dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB Atlas account

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a .env file with the following variables:
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    NODE_ENV=development
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a .env file with the following variables:
    ```bash
    REACT_APP_API_URL=http://localhost:5000/api
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open http://localhost:3000 in your browser

## Deployment

### Backend Deployment (Render)
1. Create a new Web Service on Render
2. Connect to your GitHub repository
3. Set the build command: `npm install`
4. Set the start command: `node server.js`
5. Add environment variables:
    * `MONGO_URI`: Your MongoDB Atlas connection string
    * `NODE_ENV`: `production`

### Frontend Deployment (Vercel)
1. Create a new project on Vercel
2. Connect to your GitHub repository
3. Add environment variables:
    * `REACT_APP_API_URL`: Your Render backend URL + `/api`
4. Deploy the project