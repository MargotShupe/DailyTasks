# DailyTasks

# Daily Task MERN Application

Welcome to the Daily Task MERN Application! This application is built using the MERN stack, which consists of MongoDB, Express.js, React, and Node.js. It provides a simple and intuitive interface for managing your daily tasks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. User Registration and Authentication:

   - Users can create an account and securely log in to the application.
   - Passwords are securely hashed and stored in the database.
   - User authentication is implemented using JSON Web Tokens (JWT) for secure communication between the client and server.

2. Task Management:

   - Users can create, update, and delete tasks.
   - Each task includes a title, description, due date, and priority level.
   - Tasks can be marked as completed or pending.
   - Tasks are displayed in a user-friendly interface with sorting and filtering options.

3. User Dashboard:

   - Users have access to a personalized dashboard where they can view their tasks.
   - The dashboard provides an overview of upcoming tasks, completed tasks, and pending tasks.

4. Real-time Updates:
   - The application uses WebSocket technology (Socket.io) to provide real-time updates on task status changes.
   - Users receive immediate notifications when a task is updated by another user.

## Installation

To run the Daily Task MERN Application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/daily-task-mern.git
   ```

2. Change to the project directory:

   ```
   cd daily-task-mern
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Define the following variables:
     - `MONGODB_URI`: URI of your MongoDB database.
     - `JWT_SECRET`: Secret key for JWT token generation.

5. Start the development server:

   ```
   npm run dev
   ```

6. Access the application at `http://localhost:3000` in your web browser.

## Usage

Once you have the application running, you can perform the following tasks:

- Create a new account or log in with your existing account.
- Add new tasks using the "Add Task" button.
- Edit or delete existing tasks using the respective icons.
- Filter tasks by completion status, due date, or priority.
- Mark tasks as completed or pending by clicking the checkbox.
- Real-time updates will be displayed as other users modify tasks.
- Log out from your account when you are finished.

## Contributing

Contributions to the Daily Task MERN Application are always welcome. If you have any bug fixes, feature suggestions, or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary modifications.
4. Commit your changes and push the branch to your fork.
5. Submit a pull request detailing your changes.

Please ensure that your code adheres to the project's coding conventions and includes appropriate tests.

## License

The Daily Task MERN Application is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
