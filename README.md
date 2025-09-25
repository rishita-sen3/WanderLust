# WanderLust 🌍

A full-stack travel listings and reviews web application built with **Node.js, Express, MongoDB, and EJS**.  
It allows users to browse, create, edit, and review listings similar to Airbnb.

---------------------------------------------------------------------------------------------------------

## 🚀 Features
- View all travel listings
- Create new listings with details (title, description, price, images, location)
- Edit or delete listings
- Add reviews to listings
- Responsive EJS templates for UI
- MongoDB with Mongoose for database
- Error handling middleware

----------------------------------------------------------------------------------------------------------

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Frontend:** EJS (Embedded JavaScript Templates)  
- **Database:** MongoDB + Mongoose  
- **Other Tools:** dotenv, nodemon (for development), Cloudinary (if used for image uploads), Joi (for validation)

----------------------------------------------------------------------------------------------------------

## 📂 Project Structure
WanderLust/
│── models/ # Mongoose schemas (Listing, Review)
│── public/ # Static assets (CSS, JS, Images)
│── utils/ # Utility functions
│── views/ # EJS templates
│ ├── layouts/ # Layout boilerplate
│ ├── listings/ # Pages related to listings
│ └── includes/ # Navbar, Footer etc.
│── app.js # Main Express application
│── schema.js # Validation schemas
│── package.json # Dependencies and scripts
│── .env # Environment variables (not committed)
│── .gitignore # Git ignore rules

yaml
Copy code

---------------------------------------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/rishita-sen3/WanderLust.git
cd WanderLust
2. Install dependencies
bash
Copy code
npm install
3. Setup environment variables
Create a .env file in the root directory and add:

env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret
4. Run the server
bash
Copy code
npm start
or for development:

bash
Copy code
npm run dev
The app will be available at:
👉 http://localhost:3000

📄 .gitignore
Make sure you add this .gitignore file:

bash
Copy code
node_modules
.env
.DS_Store
*.log
dist
build
uploads/
🔮 Future Improvements
Add user authentication (login/signup)

Authorization (only listing owner can edit/delete)

Image upload & optimization

Deployment (Heroku / Render / Vercel + MongoDB Atlas)

Pagination, search, and filtering

Real-time chat support (optional feature)

👩‍💻 Author
Rishita Sen