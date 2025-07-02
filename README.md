# 🏡 Real Estate Platform

A full-stack real estate listing and advisory platform built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Users can browse, post, and manage properties, with an intelligent real estate chatbot assistant for quick help.

---

## ✨ Features

- 🔍 Browse and filter real estate listings
- 📤 Post properties with title, images, price, and location
- 🏷️ Filter by type: apartment, land, flat, etc.
- 💬 Real estate chatbot assistant (for stamp duty, RERA, home loan info, and more)
- 🔐 User auth & admin control *(coming soon)*

---

## 🧠 Real Estate Chatbot

Get instant answers to common property questions like:
- 🏷️ Stamp duty rates in Delhi
- 🏛️ RERA registration process
- 🏦 Home loan eligibility
- 📄 Legal documents required for buying/selling

Powered by OpenRouter API with GPT-based responses.

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js
- React Router DOM
- Axios
- Custom CSS

### 🔹 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- OpenRouter AI API

---

## 🗂️ Project Structure

real-estate-platform/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
│ └── public/
├── README.md
├── package.json
└── .gitignore



---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adityawardhan1/Real-Estate-Platform.git
cd Real-Estate-Platform
2. Setup Backend

cd backend
npm install

# Create .env file
touch .env
# Add your config:
# MONGO_URI=your_mongo_uri
# OPENROUTER_API_KEY=your_openrouter_api_key

npm start
3. Setup Frontend

cd ../frontend
npm install
npm start
🌐 API Endpoints
Method	Endpoint	Description
GET	/api/properties	Get all properties
POST	/api/properties	Add new property listing
POST	/api/chat	Ask question to chatbot

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to update.



Created with ❤️ by Aditya Wardhan