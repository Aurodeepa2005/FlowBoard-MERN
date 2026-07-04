# FlowBoard

FlowBoard is a full-stack task management web application built using the MERN Stack. It allows users to securely manage their daily tasks through authentication, task creation, editing, deletion, search, filtering, priorities, and due dates.

## Live Demo

Frontend: https://flow-board-mern-frontend.vercel.app

Backend API: https://flowboard-backend-emu8.onrender.com

---

## Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Create, Edit and Delete Tasks
- Mark Tasks as Completed
- Task Priority (High, Medium, Low)
- Due Dates
- Task Descriptions
- Search Tasks
- Filter by Status
- Filter by Priority
- Responsive User Interface

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS Modules

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt.js

### Deployment

- Vercel
- Render

---

## Project Structure

```
FlowBoard
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── public
    ├── src
    │   ├── api
    │   ├── components
    │   ├── context
    │   ├── pages
    │   └── App.js
    └── package.json
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Aurodeepa2005/FlowBoard-MERN.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Future Improvements

- Drag and Drop Task Ordering
- Task Categories
- Calendar View
- Notifications
- User Profile
- Team Collaboration

---

## Author

**Aurodeepa Senapati**

GitHub: https://github.com/Aurodeepa2005
