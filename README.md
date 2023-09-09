# workout-wizard-service
Microservice component for Workout Wizard Fullstack App, built with Node.js, Express, and MongoDB, and deployed via Railway

This project is a simple API built with Express.js and connects to a MongoDB Atlas database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installing

1. Clone the repository to your local machine:
   
    ```
    git clone https://github.com/yourusername/express-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd express-api
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the project root and add the following variables (replace `<MONGO_URL>` with your MongoDB URI):

    ```
    PORT=3000
    MONGO_URL=<MONGO_URL>
    ```

### Running the API

To start the API, run the following command in the project root:

```
npm start
```
