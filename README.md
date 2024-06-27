# Airbnb Clone - Django and Next.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.x
- Node.js and npm
- Django
- Django REST framework

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

#### Backend

1. Navigate to the backend directory:

   ```sh
   cd backend/
   ```

2. Run docker container

   ```sh
   docker-compose up
   ```

   if you want to run the docker container in detach mode

   ```sh
   docker-compose up -d
   ```

#### Frontend

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend/
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create .env.local file in the frontend directory
   Copy the following content in the file

   NEXT_PUBLIC_API_HOST=http://localhost:8000
   NEXT_PUBLIC_WS_HOST=ws://127.0.0.1:8000

4. Start the frontend development server:

```sh
npm run dev
```

## Built With

- [Django](https://www.djangoproject.com/) - The backend framework
- [React](https://reactjs.org/) - The frontend library
- [Next.js](https://nextjs.org/) - The React framework for production
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with type checking
