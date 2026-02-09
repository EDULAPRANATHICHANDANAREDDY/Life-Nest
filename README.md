🩸 Life Nest – Organ & Blood Donation Platform

Life Nest is a web-based platform designed to promote and simplify organ and blood donation.
It connects donors, recipients, and organizers through a secure and user-friendly interface, helping save lives by making donation processes more accessible and efficient.

🔗 Live Website: https://life-nest.vercel.app

🌟 Features

🧑‍🤝‍🧑 Donor Registration for blood and organ donation

📋 Recipient Request Management

📧 Email Notifications for confirmations and updates

📱 WhatsApp Alerts for instant communication

🗄️ Database Integration for storing donor and request data

🎨 Responsive UI with clean and simple design

🔐 Secure backend using Node.js

🛠️ Tech Stack

Frontend:

HTML

CSS

Backend:

Node.js

Express.js

Database:

MongoDB (or configured DB in db.js)

Other Tools & Services:

Nodemailer (Email notifications)

WhatsApp Messaging API

Vercel (Deployment)

📂 Project Structure
life-nest/
│
├── index.js              # Main server entry point
├── db.js                 # Database connection configuration
├── send_whatsapp.js      # WhatsApp message integration
├── test-db.js            # Database testing script
├── testEmail.js          # Email testing script
│
├── public/               # Static files (CSS, images, client-side assets)
│   └── style.css
│
├── views/                # View templates (HTML/EJS files)
│
├── rec/                  # Records or uploaded data
│
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
├── node_modules/         # Installed dependencies
├── README.md             # Project documentation

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/life-nest.git
cd life-nest

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file and add:

PORT=3000
DB_URL=your_database_url
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
WHATSAPP_API_KEY=your_api_key

4️⃣ Run the Application
node index.js


The server will start at:

http://localhost:3000

🧪 Testing

Database Test

node test-db.js


Email Test

node testEmail.js


WhatsApp Test

node send_whatsapp.js

🚀 Deployment

This project is deployed using Vercel.

To deploy:

Push your code to GitHub

Connect the repository to Vercel

Add environment variables in Vercel dashboard

Deploy 🎉

🤝 Contribution

Contributions are welcome!
If you’d like to improve Life Nest:

Fork the repository

Create a new branch

Make your changes

Submit a Pull Request

📜 License

This project is licensed under the MIT License.

❤️ Acknowledgements

Healthcare professionals and donors who inspire this initiative

Open-source community

Everyone contributing to saving lives through donation

📬 Contact

Project Name: Life Nest
Purpose: Organ & Blood Donation Awareness and Management
Developer: Pranathi Reddy
