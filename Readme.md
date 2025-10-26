
## 📊 Expense Tracker API

### 🧾 Overview

The **Expense Tracker API** is a backend application designed to help users manage their daily expenses efficiently.
It allows users to **register, log in, and securely track** their income and expenses. Each transaction can be categorized, updated, or deleted, providing a clear overview of financial habits.

This project demonstrates key backend development skills, including **RESTful API design**, **authentication with JWT**, and **database integration with MongoDB**.

---

### ⚙️ Tech Stack

* **Node.js** – Server-side JavaScript runtime
* **Express.js** – Backend framework for building REST APIs
* **MongoDB** – NoSQL database for data storage
* **Mongoose** – ODM for MongoDB
* **JWT (jsonwebtoken)** – For secure authentication
* **bcryptjs** – For password hashing
* **dotenv** – To manage environment variables
* **CORS** – To enable secure cross-origin requests

---

### 🧠 Key Features

✅ User Registration and Login (JWT Authentication)
✅ Create, Read, Update, and Delete (CRUD) expenses
✅ Categorize and track transactions
✅ Secure password encryption
✅ User-specific expense history
✅ Scalable and modular code structure

---

### 📁 Project Structure

```
Expense_Tracker_API/
│
├── config/             # Database configuration
├── controllers/        # Request handling logic
├── models/             # MongoDB schemas
├── routes/             # API routes
├── middleware/         # Authentication middleware
├── .env                # Environment variables
├── server.js           # Main entry point
└── package.json        # Project dependencies
```

---

### 🚀 Installation and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Expense_Tracker_API.git
   cd Expense_Tracker_API
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/expense_tracker
   JWT_SECRET=your_secret_key
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   Server runs on [http://localhost:5000](http://localhost:5000)

---

### 📡 API Endpoints

#### 🔐 Authentication

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| POST   | `/api/users/signup` | Register a new user        |
| POST   | `/api/users/login`  | User login & get JWT token |

#### 💰 Expense Management

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | `/api/expenses`     | Add a new expense |
| GET    | `/api/expenses`     | Get all expenses  |
| PUT    | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

---

### 🧩 Example JSON (Expense)

```json
{
  "title": "Grocery Shopping",
  "amount": 1200,
  "category": "Food",
  "date": "2025-10-26"
}
```

---

### 🧑‍💻 Testing the API

Use **Postman** or **Thunder Client** to test all routes.
Make sure to include the **JWT token** in the Authorization header:

```
Authorization: Bearer <your_token>
```

---

### 🏗️ Future Enhancements

* Add budget limit and expense forecasting
* Generate monthly summary reports
* Implement charts for visualization
* Add mobile app integration

---

### 👩‍💻 Author

**Geethapriya S.L.**
Department of Artificial Intelligence and Data Science
Vel Tech High Tech Dr. RR & Dr. SR Engineering College

---

### 📝 License

This project is licensed under the **MIT License**.

---

