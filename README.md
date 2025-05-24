# HobbEx - A Local Hobby Group Organizer

🔗 **Live Site:** [https://hobbex-c8104.web.app/](https://hobbex-c8104.web.app/)
- 🛠️ Server GitHub Repo: [https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-nurislam243](https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-nurislam243)

HobbEx is a platform that allows users to discover, create, and manage local hobby-based groups. Whether you're into painting, reading, or hiking — HobbEx helps you connect with others who share the same passion.

## 🚀 Features

- 🔐 **Authentication System:** Email-password-based login with Google login support and form validations using Firebase.
- 🎨 **User-Friendly Interface:** Fully responsive layout with dark/light theme toggle and interactive UI components.
- 🧑‍🤝‍🧑 **Group Management:** Users can create, update, delete, and join hobby groups. Past-date groups cannot be joined.
- ⚙️ **Protected Routes:** Secure routes for creating groups, viewing user-created groups, and accessing group details.
- ✨ **Enhanced UI:** Integrated with **React Simple Typewriter**, **React Awesome Reveal**, and Lottie animations for dynamic visual experience.

## 📁 Folder Structure

- `src/`
  - `components/` - Reusable UI components like Navbar, Footer, etc.
  - `pages/` - Route-based pages (Home, Login, Register, CreateGroup, MyGroups, GroupDetails, etc.)
  - `hooks/` - Custom hooks for authentication and data loading.
  - `routes/` - Protected route implementations.
  - `firebase/` - Firebase config and initialization (using `.env`).
  - `utils/` - Utility functions (e.g., for toast notifications and validations).

## 🔧 Technologies Used

- React.js
- React Router
- Firebase Authentication
- Express.js (Backend)
- MongoDB (Database)
- Tailwind CSS + DaisyUI
- Lottie React, React Awesome Reveal, React Simple Typewriter

## 🛡️ Security & Best Practices

- 🔒 Firebase and MongoDB credentials are hidden using `.env` environment variables.
- ⚠️ No usage of Lorem Ipsum or default alerts.
- ✅ Validations with visual toast messages (using `react-toastify`).
- 💾 Client hosted on Firebase, server on Vercel.

## 📜 License

This project is submitted as part of the Programming Hero Web Development Course Assignment 10.

---

> Developed with ❤️ by [Nur Islam](https://github.com/nurislam243)
