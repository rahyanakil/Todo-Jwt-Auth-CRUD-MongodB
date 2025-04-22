# Express REST API for User Profiles and To-Do Lists

A secure and scalable RESTful API built with Express.js for managing user profiles and to-do lists. This project incorporates authentication with JWT, input validation, rate limiting, and robust security headers to ensure best practices.

## 🔧 Technologies & Packages Used

- **Express** – Core web framework  
- **Body-parser** – Middleware to parse incoming request bodies  
- **Cookie-parser** – Middleware for handling cookies  
- **Multer** – Handling multipart/form-data (file uploads)  
- **Jsonwebtoken** – For JWT-based authentication  
- **MySQL driver** – MySQL database integration  
- **MongoDB driver** – MongoDB database integration  
- **Dotenv** – Load environment variables from `.env` file  
- **Express-mongo-sanitize** – Prevent NoSQL injections  
- **Express-rate-limit** – Basic rate-limiting middleware  
- **Helmet** – Secure HTTP headers  
- **HPP (HTTP Parameter Pollution)** – Protect against parameter pollution  
- **Validator** – Input validation  
- **XSS-clean** – Prevent cross-site scripting attacks  

---

## 📌 Project Features

### 📁 ProfileController / ProfileModel

1. ✅ User Registration – `ProfileController`  
2. ✅ User Login – `LoginController`  
3. ✅ JWT Authentication Middleware – `AuthVerifyMiddleware`  
4. ✅ Read User Profile – `ProfileController`  
5. ✅ Update User Profile – `ProfileController`  

### 📁 ToDoListController / TodoModel

6. ✅ Create To-Do – `ToDoListController`  
7. ✅ Update To-Do – `ToDoListController`  
8. ✅ Delete To-Do – `ToDoListController`  
9. ✅ Read To-Do List – `ToDoListController`  
10. 🔄 Mark To-Do as Complete/Cancel  
11. 🔄 Filter To-Do List by Status (Complete/Cancel)  
12. 🔄 Filter To-Do List by Date  

---

## 📘 Data Models

### 📌 ProfileModel

- User Registration  
- Read User Profile  
- Update User Profile  

### 📌 ToDoListModel

- Create To-Do  
- Read To-Do  
- Update To-Do  
- Delete To-Do  
- Mark Complete / Cancel  
- Filter by Status (Complete/Cancel)  
- Filter by Date  

---

## 📬 API Documentation

Full API documentation is available via Postman:  
📎 [Postman Collection]

---

## 📁 Project Setup

```bash
# Clone the repository
git clone https://github.com/rahyanakil/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Create and configure .env file
cp .env.example .env
# Fill in required environment variables (DB config, JWT secret, etc.)

# Start the server
nodemon index.js

🔒 Security Features
JWT-based user authentication

Input validation and sanitation

Rate limiting for endpoints

Secure HTTP headers using Helmet

XSS and HPP protection

📌 License
This project is licensed under the MIT License.

🙌 Contributions
Contributions are welcome! Please fork the repo and submit a pull request for any improvements or feature additions.


---

Let me know if you’d like to auto-fill your GitHub repo URL or add author credits!

