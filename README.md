# Employee Directory

A modern, full-stack employee directory application built with React, Express, Prisma, and PostgreSQL. Features a beautiful UI with dark mode support, real-time search and filtering, and complete CRUD operations.

## 🚀 Features

- **Modern UI/UX** - Beautiful, responsive design with dark mode support
- **Real-time Search** - Filter employees by name, role, or department
- **CRUD Operations** - Create, read, update, and delete employee records
- **Department Filtering** - Organized by Marketing, Management, Engineering, and more
- **Active Status Management** - Track active/inactive employees
- **Avatar Generation** - Automatic avatar creation using DiceBear API
- **Database Persistence** - PostgreSQL database with Prisma ORM
- **RESTful API** - Express backend with clean API endpoints

## ScreenShot of website

![Screenshot](https://github.com/harshguarav/employee_directory/blob/main/screenshots/Screenshot%202025-11-24%20144835.png)
![Screenshot](https://github.com/harshguarav/employee_directory/blob/main/screenshots/Screenshot%202025-11-24%20144905.png)
![Screenshot](https://github.com/harshguarav/employee_directory/blob/main/screenshots/Screenshot%202025-11-24%20144954.png)
##ScreenShot in white Theme
![Screenshot](https://github.com/harshguarav/employee_directory/blob/main/screenshots/Screenshot%202025-11-24%20145255.png)
![Screenshot](https://github.com/harshguarav/employee_directory/blob/main/screenshots/Screenshot%202025-11-24%20145637.png)
![Screenshot](https://github.com/harshguarav/employee_directory/blob/main/screenshots/Screenshot%202025-11-24%20145703.png)
##ScreenShot when adding employees
![Screenshot](https://github.com/harshguarav/employee_directory/blob/main/screenshots/Screenshot%202025-11-24%20190030.png)
##ScreenShot when searching by name
![Screenshot](https://github.com/harshguarav/employee_directory/blob/main/screenshots/Screenshot%202025-11-24%20190103.png)


## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server  
- **TailwindCSS 4** - Utility-first CSS framework
- **Motion (Framer Motion)** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **next-themes** - Dark mode support
- **Sonner** - Toast notifications

### Backend
- **Express** - Node.js web framework
- **Prisma 5** - Modern ORM
- **PostgreSQL** - Relational database (Neon)
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- PostgreSQL database (or Neon cloud database)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd employee-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
   ```

4. **Set up the database**
   ```bash
   # Run migrations
   npx prisma migrate dev
   
   # Seed the database with demo data
   npx prisma db seed
   ```

5. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

## 🚀 Running the Application

You need to run **both** the backend and frontend servers:

### Terminal 1 - Backend API Server
```bash
npm run server
```
Server will run on `http://localhost:3001`

### Terminal 2 - Frontend Dev Server
```bash
npm run dev
```
Frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
employee-directory/
├── prisma/
│   ├── migrations/          # Database migrations
│   ├── schema.prisma        # Prisma schema definition
├── server/
│   └── index.cjs            # Express API server
├── src/
│   ├── components/          # React components
│   │   ├── AppSidebar.jsx
│   │   ├── EmployeeForm.jsx
│   │   ├── EmployeeList.jsx
│   │   ├── SearchBar.jsx
│   │   └── ...
│   ├── pages/              # Page components
│   │   └── Home.jsx
│   ├── services/           # API service layer
│   │   └── employeeService.js
│   └── App.jsx             # Root component
├── .env                    # Environment variables
└── package.json
```

## 🔌 API Endpoints

### Employee Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

### Example Request Body (Create/Update)
```json
{
  "name": "John Doe",
  "role": "Software Engineer",
  "department": "Engineering",
  "email": "john@example.com",
  "phone": "+1234567890",
  "image": "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  "active": true
}
```

## 🎨 Available Scripts

```bash
npm run dev      # Start frontend dev server
npm run server   # Start backend API server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🗄️ Database Schema

### Employee Model
```prisma
model Employee {
  id          Int      @id @default(autoincrement())
  name        String
  role        String
  department  String
  email       String   @unique
  phone       String
  image       String?
  active      Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🎯 Key Features Explained

### 1. **Dynamic Avatar Generation**
Employee avatars are automatically generated based on the employee's name using the DiceBear Avatars API.

### 2. **Dark Mode**
Toggle between light and dark themes with smooth transitions, powered by `next-themes`.

### 3. **Responsive Design**
Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.

### 4. **Search & Filter**
Real-time search across name and role fields, combined with department filtering.

### 5. **Toast Notifications**
Success and error notifications using Sonner for better user feedback.

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |

## 📝 Notes

- The backend runs on port `3001` and the frontend on port `5173` by default
- CORS is enabled for `http://localhost:5173`
- Prisma version 5.22.0 is used for better ESM compatibility
- All employee data persists in PostgreSQL database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Neon](https://neon.tech/) - Serverless PostgreSQL
- [DiceBear](https://dicebear.com/) - Avatar generation
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
