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


---

## 📸 Screenshots

### 🏠 Home Page


<img width="1598" height="772" alt="image" src="https://github.com/user-attachments/assets/58e7e0a0-8471-4330-86d1-a6619246e90f" />

<img width="1599" height="775" alt="image" src="https://github.com/user-attachments/assets/5a688691-aafb-4add-9fed-9e585ba388c7" />


### 🔐 Login Page

<img width="1597" height="740" alt="image" src="https://github.com/user-attachments/assets/b8c332f4-a044-4b5a-9392-440d2d657591" />



### 📊 User Dashboard
![Dashboard]<img width="1596" height="767" alt="image" src="https://github.com/user-attachments/assets/59827e19-af89-46ec-bfc9-dcdac80bf30f" />

<img width="1592" height="770" alt="image" src="https://github.com/user-attachments/assets/e4f6a0c1-343e-436f-9240-7a298ed91487" />

### 🚘 Vehicle Registration Page
<img width="1597" height="775" alt="image" src="https://github.com/user-attachments/assets/2606cbc9-9892-475d-bdfe-3bbee39e6bca" />


### 🅿️ Book Slot Page
<img width="1582" height="777" alt="image" src="https://github.com/user-attachments/assets/2e2459b2-0a0d-4d5f-a734-111f8619601d" />

<img width="1583" height="769" alt="image" src="https://github.com/user-attachments/assets/39a6e747-6777-4493-9d10-1391ccd34758" />

### 📝 Feedback Page
<img width="1595" height="766" alt="image" src="https://github.com/user-attachments/assets/aad88846-9f14-4dba-9778-f09cc9c586fa" />


### 🛡️ Admin Panel
<img width="1597" height="776" alt="image" src="https://github.com/user-attachments/assets/7e222b5f-6644-4099-956a-5c0619ded202" />

<img width="1597" height="765" alt="image" src="https://github.com/user-attachments/assets/b95fee08-c609-4c36-80c3-ad01ab6bcdcb" />

---


