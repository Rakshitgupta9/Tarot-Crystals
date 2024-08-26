# Tarot & Crystals - Appointment Booking System

Welcome to the Tarot & Crystals Appointment Booking System. This project allows users to book appointments for services such as consultations, therapy sessions, and wellness checks. The application securely stores booking details in a MySQL database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Features

- **User-Friendly Booking Form**: Easily book appointments by filling out a simple form.
- **Date and Time Picker**: Integrated with Flatpickr for selecting dates and times.
- **MySQL Database**: All booking data is stored securely in a MySQL database.

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript
  - [Flatpickr](https://flatpickr.js.org/) (Date and Time Picker)

- **Backend**:
  - PHP

- **Database**:
  - MySQL

## Installation

Follow these steps to set up the project on your local machine.

### Prerequisites

- A web server with PHP support (e.g., Apache)
- MySQL Server
- A text editor or IDE (e.g., VSCode)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rakshitgupta9/tarot-crystals.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd tarot-crystals-booking-system
   ```

3. **Move Files to the Web Server Root**:
   - Copy the project files to your web server’s root directory (e.g., `htdocs` for XAMPP, `www` for WAMP).

4. **Install Dependencies**:
   - No additional dependencies are required beyond PHP and MySQL.

5. **Configure the Database**:
   - See the [Database Setup](#database-setup) section below.

## Database Setup

1. **Create a MySQL Database**:
   - Log in to your MySQL server and create a new database:
   ```sql
   CREATE DATABASE appointments_db;
   ```

2. **Select the Database**:
   - Switch to the newly created database:
   ```sql
   USE appointments_db;
   ```

3. **Create the Appointments Table**:
   - Use the following SQL command to create the `appointments` table:
   ```sql
   CREATE TABLE appointments (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       service VARCHAR(100) NOT NULL,
       appointment_date DATETIME NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Update Database Credentials**:
   - Edit the `store_booking.php` file and update the database connection credentials:
   ```php
   $servername = "localhost";
   $username = "root";  // Replace with your MySQL username
   $password = "gupta@1";      // Replace with your MySQL password
   $dbname = "appointments_db";
   ```

## Usage

1. **Access the Application**:
   - Open your web browser and navigate to `http://localhost/` or your server's URL.

2. **Book an Appointment**:
   - Fill out the booking form with your name, email, service, and preferred date and time, then submit the form.

3. **Check the Database**:
   - Verify that the booking data has been stored in the MySQL database.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any inquiries or support, please contact:

- **Rakshit Gupta**
- GitHub: [rakshitgupta9](https://github.com/rakshitgupta9)
- Email: guptarakshit9858@gmail.com
```
