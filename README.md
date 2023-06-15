# Project

Smunch Eder Test

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Prerequisites](#prerequisites)

## Installation

To run this project, you need to have Node.js and Docker installed on your system.

### Node.js

1. Visit the official Node.js website: [https://nodejs.org](https://nodejs.org)
2. Download and install the appropriate version of Node.js for your operating system.
3. Verify the installation by running the following command in your terminal:

   ```shell
   node --version
   ```

   It should display the installed Node.js version.

### Docker

1. Visit the official Docker website: [https://www.docker.com](https://www.docker.com)
2. Download and install Docker for your operating system.
3. Verify the installation by running the following command in your terminal:

   ```shell
   docker --version
   ```

   It should display the installed Docker version.

## Usage

1. Clone the repository

2. Navigate to the project directory

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the application using Docker Compose:

   ```shell
   docker-compose up -d
   ```

5. Install Prisma globally:

   ```shell
   npm install -g prisma
   ```

6. Start the application:

   ```shell
   npm start
   ```

7. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Prerequisites

This project assumes familiarity with the following concepts:

- JavaScript/TypeScript
- Node.js and NPM (Node Package Manager)
- RESTful APIs
