# <img src="https://cdn-icons-png.flaticon.com/512/4478/4478481.png" width="40" alt="Green Earth" /> &nbsp;E-Code Solutions




E-Code Solutions is a full-stack e-waste management platform built using the MERN stack. It connects individuals, customers, and companies to support the responsible collection, reuse, resale, and recycling of electronic waste.

The platform allows users to list electronic products, explore available products, and connect with other participants through a role-based system.

## 🚀 Installation

Clone the project and install all dependencies.

```bash
https://github.com/awadi99/E-Code-Solutions.git
```

## 🔗 Live Demo
**👉 Try the Live App:** 
```bash
https://e-code-solutions-srr9.onrender.com/
```


## ⚙️ Backend Setup
```bash
cd backend
npm install
npm start
```
## 💻 Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## ✨ Features

♻️ E-Waste Management
A platform designed to encourage the responsible reuse, resale, and recycling of electronic devices.

📦 Product Management
Users can add electronic products with details such as category, brand, model, condition, quantity, description, expected price, and product image.

🛍️ Product Marketplace
Customers and companies can browse available electronic products and select products they are interested in purchasing.

🔐 Authentication & Authorization
Secure email/password authentication using JWT-based authentication and protected routes.

🔑 Google Authentication
Google OAuth integration for signing in or registering with a Google account.

👥 Role-Based Access Control
Different dashboard features and navigation options for User, Customer, and Company roles.

🖼️ Image Uploads
Product images are uploaded and stored using Cloudinary.

🧾 Order & Invoice Interface
An interface for viewing selected product information, buyer and seller details, quantities, and calculated totals.

📩 Contact & Idea Submission
Forms for submitting contact messages and platform improvement ideas.

📱 Responsive User Interface
A modern, responsive interface built with React and Tailwind CSS.


## 🔑 User Roles

## User

Add and manage personal product listings.
View sales and order information.
Access profile and account features.

## Customer

Browse available electronic products.
Select products of interest.
Access product and invoice/order interfaces.

## Company

Browse available electronic products.
Select products of interest.
Access product and invoice/order interfaces.




## 📂 Folder Structure
```bash
E-Code-Solutions/
├── Frontend/
│   ├── public/
│   │   └── img/
│   └── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── constants/
│       ├── hooks/
│       ├── pages/
│       ├── routes/
│       ├── schemas/
│       ├── store/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── module/
│   │   │   ├── auth/
│   │   │   ├── addProduct/
│   │   │   ├── order/
│   │   │   └── contact/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
└── README.md

Note: Adjust the folder names and structure above to match your actual repository.

🔒 Environment Variables
```

## 📄 License

MIT License

Copyright (c) 2026 Aditya Krishna Waghmare

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

