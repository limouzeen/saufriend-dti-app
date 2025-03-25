# SAU Friend App (saufriend-dti-app)

A full-stack web application for managing personal friends list, built with **React**, **Vite**, **TailwindCSS**, and **Node.js + Express + MySQL** backend.

> 🎓 Developed as a demonstration of full-stack web development skills using modern technologies.

---

## ✨ Features

- ✅ **Authentication** (Login/Register)
- 🧑‍🤝‍🧑 Add / Edit / Delete friends
- 🖼 Upload profile images (with preview)
- 📦 RESTful API integration
- 🎨 Fully responsive UI with TailwindCSS
- 🔒 JWT authentication with token storage
- ⚙️ File upload with Multer and image storage

---

## 🔍 Pages Overview

| Page          | Description                            |
|---------------|----------------------------------------|
| `/login`      | Login screen with validation           |
| `/register`   | Register screen with profile upload    |
| `/friends`    | Friends list (grid layout + actions)   |
| `/add-friend` | Add new friend with profile image      |
| `/update-friend/:id` | Edit friend info and image     |

---

## 🛠 Technologies Used

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

### Backend (Separate repo)
- Express.js (Node.js)
- Sequelize ORM
- MySQL
- Multer (for image upload)
- JWT for authentication

---

## 📸 UI Preview

### Login Page
![Login](./screenshots/login.png)

### Friend List Page
![Friends](./screenshots/friends.png)

> 📌 You can add screenshots to `./screenshots` folder and link them here

---

## 🚀 How to Run (Frontend)

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
