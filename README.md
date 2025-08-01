# 🚗 Vehicle Parking System

A seamless web-based solution to simplify your vehicle parking experience. From user registration to vehicle management, slot booking, and admin approval — everything is handled in just a few clicks.

🔗 **Live Preview (Localhost for Development)**: [http://localhost:4200/](http://localhost:4200/)

---

## 🧭 How It Works

Follow these simple steps to use the Vehicle Parking System:

### 1. 👤 User Login / Registration
- Visit: [http://localhost:4200/login](http://localhost:4200/login)
- Register a new account or log in with your credentials.

---

### 2. 📊 Access Your Dashboard
- After login, you'll be redirected to your personalized dashboard.
- URL: [http://localhost:4200/dashboard](http://localhost:4200/dashboard)
- Here, you can manage your profile, vehicles, and bookings.

---

### 3. 🚘 Register Your Vehicle
- Add your vehicle details easily at:
- [http://localhost:4200/vehicle-register](http://localhost:4200/vehicle-register)

---

### 4. 🅿️ Book a Parking Slot
- Select your desired parking slot based on availability.
- Go to: [http://localhost:4200/book-slot](http://localhost:4200/book-slot)
- After booking, your request will be **pending approval from the admin**.
- Admin will update the booking status to either:
  - ✅ **Booked**
  - ❌ **Failed**
- Once the status shows **Booked**, you can proceed to make the payment .

---

### 5. 📝 Submit Feedback
- Share your experience with us after using the service.
- Visit: [http://localhost:4200/report](http://localhost:4200/report)

---

## 🛡️ Admin Panel

### 🔑 Admin Login
- **Email**: `admin@gmail.com`  
- **Password**: `admin`

### 🧰 Admin Capabilities
- View all registered users and vehicles
- Delete any registered vehicle
- Manage all bookings:
  - Update booking status: **Booked** or **Failed**
  - Delete bookings (**only after associated payment is deleted**)
- Delete payment records
- View and manage user feedback

> ⚠️ **Note**: To delete a booking, the admin must **first delete the related payment**, then the booking.

---

## 🔗 Quick Navigation

| Feature              | URL                                                |
|----------------------|-----------------------------------------------------|
| 🏠 Home              | [http://localhost:4200/](http://localhost:4200/)   |
| 🔐 Login/Register    | [http://localhost:4200/login](http://localhost:4200/login) |
| 📊 Dashboard         | [http://localhost:4200/dashboard](http://localhost:4200/dashboard) |
| 🚘 Vehicle Register  | [http://localhost:4200/vehicle-register](http://localhost:4200/vehicle-register) |
| 🅿️ Book Slot         | [http://localhost:4200/book-slot](http://localhost:4200/book-slot) |
| 📝 Feedback/Report   | [http://localhost:4200/report](http://localhost:4200/report) |

---

## 🎯 Key Features

- ✅ User Registration & Authentication
- 🚗 Vehicle Management
- 📆 Slot Booking with Admin Approval
- 🔄 Booking Status: Pending → Booked / Failed
- 💼 Admin Panel for Full Control
- 🗑️ Admin-Controlled Deletion of Vehicles, Payments, and Bookings
- 🗒️ Feedback Submission
- 📱 Clean & Responsive Angular UI

---

## 🛠️ Tech Stack

### 🔧 Frontend
- **Framework**: Angular
- **Styling**: Bootstrap / CSS

### 🖥️ Backend
- **Framework**: Spring Boot (Java)
- **Architecture**: RESTful APIs

### 🗃️ Database
- **Apache Derby** (Embedded Java-based Database)

---

> Made with ❤️ for a smarter, more convenient parking experience.
