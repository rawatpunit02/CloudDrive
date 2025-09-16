# CloudDrive – Backend Learning Project

This project is part of my journey learning backend development with Node.js, Express, MongoDB, EJS, and Cloudinary.

## Features

- User registration and login with JWT authentication
- File upload to Cloudinary
- View and download uploaded files
- EJS templating with Tailwind CSS and Flowbite for UI

## Project Structure

```
.
├── app.js
├── package.json
├── .env
├── config/
│   ├── cloudinary.config.js
│   └── db.js
├── middlewares/
│   └── auth.js
├── models/
│   ├── files.model.js
│   └── user.models.js
├── routes/
│   ├── index.routes.js
│   └── user.routes.js
├── uploads/
├── views/
│   ├── home.ejs
│   ├── index.ejs
│   ├── login.ejs
│   └── register.ejs
```

## How to Run

1. **Clone the repository**

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file with:
   ```
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the app**
   ```sh
   npm run dev
   ```

5. **Try it out**

   - Register at [http://localhost:3000/user/register](http://localhost:3000/user/register)
   - Login at [http://localhost:3000/user/login](http://localhost:3000/user/login)
   - Upload and download files on the home page

## Why this project?

I built this project to practice backend concepts like authentication, file uploads, working with databases, and integrating third-party services.

---

**Learning backend, one project at a time!**
