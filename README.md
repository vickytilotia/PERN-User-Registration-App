# PERN User Registration App

Welcome to the PERN User Registration App repository! This is a full-stack web application built using the PERN (PostgreSQL, Express, React, Node.js) stack, allowing users to register and manage accounts.

## Features
```
- User registration with password hashing
- Token-based authorization. JWT token used.
- User login with authentication
- Form validation and error handling
- User dashboard to view registered users
```
## Installation

To run the PERN User Registration App on your local machine, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/vickytilotia/PERN-User-Registration-App.git
   cd PERN-User-Registration-App
   ```

2. **Install server dependencies:**
   ```sh
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```sh
   cd ../client
   npm install
   ```

4. **Configure the database:**
   - Create a PostgreSQL database and update the `server/config/db.js` file with your database credentials.

5. **Run the application:**
   In one terminal, start the server:
   ```sh
   cd ../server
   npm start
   ```
   In another terminal, start the client:
   ```sh
   cd ../client
   npm start
   ```




## Contributing

Contributions to the PERN User Registration App are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request explaining your changes.

Please review the [Contributing Guidelines](CONTRIBUTING.md) before submitting your pull request.
