# Daily Task MERN Application

Welcome to the Daily Task MERN Application! This application is built using the MERN stack, which consists of MongoDB, Express.js, React, and Node.js. It provides a simple and intuitive interface for managing your daily tasks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. Task Management:

   - Users can create, update, and delete tasks.
   - Each task includes a title, description, due date, and priority level.
   - Tasks can be marked as completed or pending.
   - Tasks are displayed in a user-friendly interface with sorting and filtering options.

2. User Dashboard:

   - User have access to a personalized dashboard where they can view their tasks.
   - The dashboard provides an overview of upcoming tasks, completed tasks, and pending tasks.

3. Real-time Updates:
   - The application uses WebSocket technology (Socket.io) to provide real-time updates on task status changes.
   - Users receive immediate notifications when a task is updated by another user.

## Installation

To run the Daily Task MERN Application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/MargotShupe/DailyTasks
   ```

2. Change to the project directory:

   ```
   cd DailyTasks
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Define the following variables:
     - `MONGODB_URL`: URI of your MongoDB database.

5. Start the development server:

   ```
   npm run dev
   ```

6. Access the application at `https://mern-deploy1-frontend.onrender.com` in your web browser.

## Usage

Once you have the application running, you can perform the following tasks:

- Add new tasks using the "Add Task" button.
- Edit or delete existing tasks using the respective icons.
- Mark tasks as completed or pending by clicking the checkbox.
- Real-time updates will be displayed as the user modify tasks.

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
