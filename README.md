# 📚 PageQuest

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[![Live Site](https://img.shields.io/badge/Live%20Site-PageQuest-blue?style=for-the-badge&logo=render)](https://pagequest-1.onrender.com)

PageQuest is a full-stack MERN application that allows users to search for books, save their favorites, and manage their personal reading list. The app leverages the Google Books API for searching and MongoDB Atlas for storing user data and saved books.

## 🚀 Features

- 🔍 **Book Search:** Search for books using the Google Books API.
- 💾 **Save Books:** Authenticated users can save books to their personal collection.
- 🗑️ **Remove Books:** Easily remove books from your saved list.
- 📝 **User Authentication:** Secure sign up, login, and JWT-based authentication.
- 📖 **Personal Library:** View and manage your saved books.
- ⚡ **Responsive UI:** Built with React and Bootstrap for a modern, mobile-friendly experience.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Apollo Client, React Bootstrap
- **Backend:** Node.js, Express, Apollo Server, Mongoose, JWT
- **Database:** MongoDB Atlas
- **API:** Google Books API
- **Deployment:** Render

---

Screeshots

![Screenshot 2025-06-01 181802](https://github.com/user-attachments/assets/ce99c739-11c7-41cb-9762-fc9813b90310)
![Screenshot 2025-06-01 181813](https://github.com/user-attachments/assets/dd4387d3-40cd-4842-aa39-b8387d27ad7f)
![Screenshot 2025-06-01 181840](https://github.com/user-attachments/assets/cd60ae60-fd5e-492c-9618-c354f5a76fcf)
![Screenshot 2025-06-01 182700](https://github.com/user-attachments/assets/b4f30893-398a-4142-a318-c0d1ddcde8e1)

## 📦 Installation

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account

### Clone the Repository

```sh
git clone https://github.com/your-username/pagequest.git
cd pagequest
```

### Setup Environment Variables

Create a `.env` file in the `server` directory:

```
MONGODB_URI=your-mongodb-atlas-connection-string
JWT_SECRET_KEY=yourSuperSecretKey
```

If your frontend needs to know the backend URL, add a `.env` in the `client` directory:

```
VITE_GRAPHQL_URI=http://localhost:4000/
```

### Install Dependencies

**Backend:**
```sh
cd server
npm install
```

**Frontend:**
```sh
cd ../client
npm install
```

---

## 🧑‍💻 Usage

### Start the Backend

```sh
cd server
npm run build
npm start
```

### Start the Frontend

```sh
cd client
npm run dev
```

- Visit [http://localhost:5173](http://localhost:5173) (or the port Vite provides) to use the app.

---

## 🌐 Deployment

### MongoDB Atlas

- Create a cluster and database (e.g., `PageQuest`) in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Whitelist your deployment IPs.
- Copy your connection string and use it as `MONGODB_URI`.

### Render

#### Backend

- Create a new **Web Service** on [Render](https://render.com/).
- Set the root directory to `server`.
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Add environment variables: `MONGODB_URI`, `JWT_SECRET_KEY`

#### Frontend

- Create a new **Static Site** on Render.
- Set the root directory to `client`.
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Set `VITE_GRAPHQL_URI` to your deployed backend URL.

---

## 🧩 Folder Structure

```
PageQuest/
├── client/      # React frontend
├── server/      # Node/Express/Apollo backend
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for any improvements or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [Google Books API](https://developers.google.com/books/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Render](https://render.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)

---

**Happy Reading! 📚✨**
