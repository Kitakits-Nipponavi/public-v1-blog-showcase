# Blog Showcase Version 

Welcome to the Showcase version of the Nipponavi App! This is the public version of the official Kitakits-Nipponavi app and does not contain any sensitive data. 

This README will guide you through setting up the backend and frontend, as well as initializing and stopping the virtual environment (venv).

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Backend](#setup-backend)
- [Setup Frontend](#setup-frontend)
- [Virtual Environment](#virtual-environment)
  - [Initialize venv](#initialize-venv-first-time-setup-only)
  - [Stop venv](#stop-venv)
- [Troubleshooting](#trouble-shooting)

## Prerequisites

Ensure you have the following installed:
- Python 3.x
- Node.js (v18.17.0)
- npm or yarn
- pip (Python package installer)
- virtualenv (Python virtual environment tool)

### Install `virtualenv`

You need to install `virtualenv` if you don't have it installed. You can install it using pip:
```sh
pip install virtualenv
```

## Install PostgreSQL
For local development, ensure you have PostgreSQL installed on your machine. You can download and install it from PostgreSQL Official Website.

After installing, create a PostgreSQL database:

1. Open your terminal or command line.
2. Log in to PostgreSQL:
```sh
psql -U postgres
```
3. Create a database:
### sql
```
CREATE DATABASE kitakits;
```
`.env` file has the database credentials.

_Note_: This step will not be needed once the backend is deployed to an online server.

## Setup Backend

1. Initialize and activate the virtual environment (only the first time):
    ```sh
    virtualenv venv
    ```

2. Activate the virtual environment:
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```
    - On Windows:
        ```sh
        .\venv\Scripts\activate
        ```

3. Install the required Python packages inside the virtual environment:
    ```sh
    pip install -r requirements.txt
    ```

4. Apply the database migrations:
    ```sh
    python3 manage.py migrate
    ```

5. Run the backend development server:
    - On macOS/Linux:
        ```sh
        python3 manage.py runserver
        ```
    - On Windows:
        ```sh
        python manage.py runserver
        ```

Open http://127.0.0.1:8000/ with your browser to see the result.

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

4. Run the frontend development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```
Note: Using npm start is intended for production builds. For local development, always use npm run dev.

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

## Virtual Environment

### Initialize venv (first-time setup only)

1. Create a virtual environment:
    ```sh
    virtualenv venv
    ```

2. Activate the virtual environment:
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```
    - On Windows:
        ```sh
        .\venv\Scripts\activate
        ```

3. After activating the virtual environment, install the project dependencies:
    ```sh
    pip install -r requirements.txt
    ```

### Stop venv

1. Deactivate the virtual environment:
    ```sh
    deactivate
    ```

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


