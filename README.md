# Fullstack-Notes-App

🔗 **Demo**: [https://notes-app-frontend-kohl-xi.vercel.app/](https://notes-app-frontend-kohl-xi.vercel.app/)  
🔗 **API**: [https://notes-app-backend-ygsw.onrender.com](https://notes-app-backend-ygsw.onrender.com)

## Features

- View all notes in a list
- Create, read, update, and delete notes
- Filter notes by title
- Filter notes by creation date
- Responsive design
- Backend and frontend deployed separately
- Notes are stored in a temporary in-memory array on the server

## Technologies Used

- Frontend:
  - Vite
  - React
  - Typescript
  - axios
  - Tailwind CSS
- Backend:
  - Node.js
  - Express.js
  - Day.js

## Installation and run locally

To get started with this project, follow the steps below:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/k-marchuk/fullstack-notes-app

   cd fullstack-notes-app
   ```

2. **Install dependencies for frontend:**:

   ```bash
   cd fullstack-notes-app/frontend

   npm install
   ```

3. **Install dependencies for backend:**:

   ```bash
   cd fullstack-notes-app/backend

   npm install
   ```

   By default, the server runs on http://localhost:5000

4. **Set up environment variable:**:

   The frontend expects an API URL configured via .env:

   ```bash
   VITE_API_URL=http://localhost:5000
   ```

5. **Start the backend server:**:

   ```bash
   cd backend

   npm start
   ```

6. **Start the frontend:**:

   ```bash
   cd frontend

   npm start
   ```

   This will run the app on http://localhost:5173.
