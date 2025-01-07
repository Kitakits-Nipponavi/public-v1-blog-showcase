# public-v1-blog-showcase

Welcome to the Showcase version of the Nipponavi App! This is the public version of the official Kitakits-Nipponavi app and does not contain any sensitive data.
This README will guide you through setting up frontend and troubleshooting.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Frontend](#setup-frontend)
- [Troubleshooting](#trouble-shooting)

## Prerequisites

Ensure you have the following installed:

- Node.js (v18.17.0)
- npm or yarn

## Setup Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Use Node.js Version
   ```sh
   nvm use 18.17.0
   ```
3. Install the required Node.js packages:
   ```sh
   npm install
   # or
   yarn install
   ```
4. Install the clsx package
   ```sh
   npm install clsx
   # or
   yarn add clsx
   ```
5. Run the frontend development server:
   `sh
   npm run dev
   # or
   yarn dev
   `
   Note: Using npm start is intended for production builds. For local development, always use npm run dev.
   Open http://localhost:3000 with your browser to see the result.
   You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.
   This project uses next/font to automatically optimize and load Inter, a custom Google Font.

## Trouble shooting

### Common Issues:

1. Virtual environment not activated: If you encounter issues, make sure you have activated the virtual environment before running backend commands.
2. Missing dependencies: Ensure that all dependencies are installed in the virtual environment after activation:
   ```sh
   pip install -r requirements.txt
   ```

## Node.js Version

- Ensure you're using Node.js version 18.17.0 for the project. If you're using nvm (Node Version Manager), you can set the correct version using:
  ```sh
    nvm use 18.17.0
  ```

## Security Notes

- Sensitive configurations have been removed from this repo
