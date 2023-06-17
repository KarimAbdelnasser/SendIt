# E-commerce App

This is a backend application built with Node.js that enables real-time chat functionality. It allows users to communicate with each other instantly, providing a seamless chatting experience.

## Description

The Realtime Chat Application leverages the power of Node.js to deliver a reliable and efficient chat system. It utilizes websockets and event-driven architecture to enable real-time communication between users. This application is suitable for various use cases, such as team collaboration, customer support, or any scenario that requires instant messaging capabilities.

### Live on Render: [Send It](https://todo-vpw3.onrender.com)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/KarimAbdelnasser/sendIt.git
    ```

2. Install dependencies:

    ```bash
    cd sendIt
    npm install
    ```

3. Configure environment variables:

Create a .env file in the project root directory and add the following environment variables:

    PORT= # Port number for the server

-   Make sure to provide the appropriate values for each environment variable.

5.  Start the server:

    ```bash
    npm start
    ```

-   The server will start running on the specified port, and you can access the application at
    ```bash
    http://localhost:{port}.
    ```

## Prerequisites

Before running the project, ensure you have the following:

-   Node.js installed (version 14 or above)

## Scripts

The following scripts are available in the project:

-   npm start: Runs the built server code using Node.js.
-   npm run dev: Runs the server in development mode using Nodemon, which automatically restarts the server on file changes.
