# **My Portfolio Website**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/MuhammadMaazFaisal/Portfolio-2024.svg)](https://github.com/MuhammadMaazFaisal/Portfolio-2024/issues)
[![GitHub stars](https://img.shields.io/github/stars/MuhammadMaazFaisal/Portfolio-2024.svg)](https://github.com/MuhammadMaazFaisal/Portfolio-2024/stargazers)

## **Table of Contents**

- [About the Project](#about-the-project)
  - [Features](#features)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## **About the Project**

This is an open-source, full-stack portfolio website built using the MERN (MongoDB, Express.js, React, Node.js) stack. The project showcases my work, skills, and experience, and it's designed to be a collaborative platform where other developers can contribute to enhance its functionality.

An admin panel is included to manage content dynamically, allowing for easy updates of projects, blogs, and other portfolio items without modifying the codebase directly.

### **Features**

- **Responsive Design**: Optimized for all screen sizes and devices.
- **Admin Panel**: Secure section to add, edit, or delete portfolio items.
- **Dynamic Content**: Content served from a MongoDB database.
- **Modern Technologies**: Built with React 18, Tailwind CSS, and follows atomic design principles.
- **Open Source**: Contributions are welcome to improve and expand the project.

### **Built With**

- **Frontend**:
  - [React 18](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Axios](https://axios-http.com/)
  - [React Router](https://reactrouter.com/)
- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)
- **Other Tools**:
  - [Webpack](https://webpack.js.org/)
  - [Babel](https://babeljs.io/)
  - [Concurrently](https://github.com/open-cli-tools/concurrently)
  - [Dotenv](https://github.com/motdotla/dotenv)

---

## **Getting Started**

To get a local copy up and running, follow these steps.

### **Prerequisites**

- **Node.js and npm**: [Download and install](https://nodejs.org/)
- **MongoDB**: [Download and install](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git**: [Download and install](https://git-scm.com/)

### **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MuhammadMaazFaisal/Portfolio-2024.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd portfolio-website
   ```

3. **Install Root Dependencies**

   Install `concurrently` to run both the client and server.

   ```bash
   npm install
   ```

4. **Set Up the Server**

   Navigate to the `server` directory and install dependencies.

   ```bash
   cd server
   npm install
   ```

5. **Configure Environment Variables**

   Create a `.env` file in the `server` directory and add your MongoDB connection string and any other necessary environment variables.

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

   **Note**: Replace `your_mongodb_connection_string` and `your_jwt_secret_key` with your actual credentials.

6. **Set Up the Client**

   Navigate to the `client` directory and install dependencies.

   ```bash
   cd ../client
   npm install
   ```

7. **Start the Development Servers**

   Go back to the root directory and run:

   ```bash
   cd ..
   npm run dev
   ```

   This will start both the client and server concurrently.

---

## **Usage**

- **Access the Website**: Open [http://localhost:3000](http://localhost:3000) in your browser.
- **Admin Panel**: Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) (authentication setup required).
- **API Endpoints**: The server runs on [http://localhost:5000](http://localhost:5000).

**Note**: Adjust the URLs if you're running the services on different hosts or ports.

See the [open issues](https://github.com/MuhammadMaazFaisal/Portfolio-2024/issues) for a full list of proposed features (and known issues).

---

## **Contributing**

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**

   Click the "Fork" button at the top right of the repository page.

2. **Create Your Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

   Navigate to the original repository and click "New Pull Request".

**Guidelines:**

- Follow the existing code style and structure.
- Write clear, concise commit messages.
- Update documentation and add comments in your code where necessary.
- Ensure that new features include relevant tests.

---

## **License**

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## **Contact**

Your Name - [m.maazfaisal0301@gmail.com](mailto:m.maazfaisal0301@gmail.com@example.com)

Project Link: [https://github.com/MuhammadMaazFaisal/Portfolio-2024](https://github.com/MuhammadMaazFaisal/Portfolio-2024)

---

## **Acknowledgments**

- [OpenAI ChatGPT](https://openai.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Shields.io](https://shields.io/)
- [Font Awesome](https://fontawesome.com/)

---
