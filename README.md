# TaskManager

> A full-stack task management application. Organize, prioritize, and track your tasks efficiently with JWT-based authentication and real-time updates.

**Live Demo:** [taskmanager-vishal-project.vercel.app](https://taskmanager-vishal-project.vercel.app)

---

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## About

TaskManager is a **full-stack MERN application** that allows users to:
- Create, read, update, and delete tasks
- Authenticate securely with JWT tokens
- Persist data with MongoDB Atlas
- Access tasks from anywhere with a clean, responsive UI

This project demonstrates best practices in:
- **Frontend:** React with localStorage and API integration
- **Backend:** Node.js/Express with REST APIs, middleware, and authentication
- **Database:** MongoDB with Mongoose schemas
- **Deployment:** Vercel (frontend) + Render (backend)

---

## Features

✅ **User Authentication**
- Secure JWT-based login/signup
- Password encryption with bcryptjs
- Token stored in localStorage

✅ **Task Management**
- Create tasks with title and description
- Edit existing tasks
- Delete tasks
- View all tasks in a responsive list

✅ **Data Persistence**
- All tasks saved to MongoDB Atlas
- Real-time sync with backend API
- Persistent user sessions

✅ **Responsive Design**
- Mobile-friendly UI
- Bootstrap styling
- Smooth user experience

✅ **Security**
- CORS enabled for cross-origin requests
- JWT authentication on protected routes
- Environment variables for sensitive data

---

## Tech Stack

### Frontend
- **React 18** - UI library
- **JavaScript (ES6+)** - Programming language
- **Bootstrap 5** - Styling & responsive design
- **Fetch API** - HTTP requests

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **JWT (jsonwebtoken)** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting

---

## Project Structure
```
TaskManager/
├── public/ # Static files
├── src/
│ ├── components/ # React components
│ │ ├── Navbar.js
│ │ ├── TaskForm.js
│ │ └── TaskList.js
│ ├── pages/ # Page components
│ │ ├── Home.js
│ │ ├── Login.js
│ │ └── Signup.js
│ ├── App.js # Main app component
│ ├── index.js # React entry point
│ └── index.css # Global styles
├── package.json # Dependencies & scripts
└── README.md # This file
```

**Backend Repository:** [taskmanager-backend](https://github.com/vishal-singh-web/taskmanager-backend)

---

## Getting Started

### Prerequisites
- Node.js (v14+) installed
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository:**
git clone https://github.com/vishal-singh-web/TaskManager.git
cd TaskManager


2. **Install dependencies:**
npm install


3. **Create `.env` file** (in root directory):
REACT_APP_API_URL=https://your-backend-url.onrender.com

text
Replace `your-backend-url` with your actual Render backend URL.

4. **Start the development server:**
npm start

text

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).  
The page reloads when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production in the `build/` folder.  
Optimized and ready for deployment.

### `npm run eject`
**⚠️ Warning:** One-way operation. Exposes all configuration files.  
Only use if you need full control over webpack and build tools.

---

## Environment Variables

Create a `.env` file in the root directory:

REACT_APP_API_URL=https://your-backend-url.onrender.com

text

**Never commit `.env` to Git!** Add to `.gitignore`:
.env
.env.local

text

---

## Deployment

### Frontend (Vercel)

1. **Push code to GitHub**
git add .
git commit -m "Prepare for deployment"
git push origin main

text

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Set `REACT_APP_API_URL` in Environment Variables
   - Click "Deploy"

### Backend (Render)

Deploy your backend separately:
[taskmanager-backend](https://github.com/vishal-singh-web/taskmanager-backend) on [Render](https://render.com)

Get your backend URL and add to frontend `.env`.

---

## API Documentation

### Base URL
https://your-backend-url.onrender.com

text

### Authentication Endpoints

**POST /api/auth/signup**
- Create a new user account
- Body: `{ email, password, name }`
- Returns: JWT token

**POST /api/auth/login**
- Login with existing credentials
- Body: `{ email, password }`
- Returns: JWT token

### Task Endpoints

**GET /api/fetchtasks**
- Fetch all tasks for logged-in user
- Headers: `token: <token>`

**POST /api/addtask**
- Create a new task
- Headers: `token: <token>`
- Body: `{ title, description, status, priority }`

**PUT /api/updatetask/:id**
- Update a task
- Headers: `token: <token>`
- Body: `{ title, description, status, priority }`

**DELETE /api/delettask/:id**
- Delete a task
- Headers: `token: <token>`

---

## Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m "Add AmazingFeature"`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is **not licensed**. All rights reserved by the author.

---

## Author

**Vishal Singh**
- GitHub: [@vishal-singh-web](https://github.com/vishal-singh-web)
- LinkedIn: [https://www.linkedin.com/in/vishalsingh-profile/](https://www.linkedin.com/in/vishalsingh-profile/)

---

## Support

Have questions or found a bug? [Open an Issue](https://github.com/vishal-singh-web/TaskManager/issues)

---

**Made with ❤️ by Vishal Singh**
