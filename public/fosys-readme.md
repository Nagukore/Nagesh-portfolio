# FOSYS - AI-Powered Workspace Management Platform

A comprehensive full-stack application designed to streamline workflow management for engineering teams with intelligent meeting transcription, automated task creation, real-time PR validation, and role-based access control.

## 🚀 Features

### Core Functionality
- **Role-Based Dashboards**: Customized interfaces for Admin, Manager, Employee, and Intern roles
- **Task Management**: Create, assign, track, and update tasks with real-time synchronization
- **Meeting Transcripts**: AI-powered meeting transcription with automatic task extraction
- **GitHub Integration**: Automated PR creation, tracking, and status updates via webhooks
- **Project Management**: Organize tasks and meetings within projects
- **Real-time Updates**: Live synchronization using Supabase Realtime and BroadcastChannel

### Role-Based Access Control (RBAC)
- **Admin**: Full system access, user management, project CRUD, role assignment
- **Manager**: Project oversight, task assignment, PR approval, team progress tracking
- **Employee**: Task execution, PR submission, project viewing (read-only)
- **Intern**: Task completion, PR submission, limited project access

## 🛠 Tech Stack

### Frontend
- **React 19** - UI framework
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons
- **Supabase JS** - Authentication and real-time data
- **Axios** - HTTP client
- **Sonner** - Toast notifications
- **Framer Motion** - Animations

### Backend
- **Node.js** with **Express 5** - REST API server
- **Prisma** - ORM for PostgreSQL
- **Python** with **FastAPI** - Additional API endpoints
- **Supabase** - Authentication, database, and real-time features
- **PostgreSQL** - Primary database
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing
- **Octokit** - GitHub API integration

### Infrastructure
- **Supabase** - Backend-as-a-Service (Auth, Database, Realtime)
- **GitHub** - Version control and PR management

## 🔐 Authentication & Authorization

The application uses **Supabase Auth** for authentication with JWT tokens. All protected routes require an `Authorization: Bearer <token>` header.

### Role Permissions Matrix

| Action | Admin | Manager | Employee | Intern |
|--------|-------|---------|----------|--------|
| Create Project | ✅ | ✅ | ❌ | ❌ |
| Delete Project | ✅ | ❌ | ❌ | ❌ |
| Assign Task | ✅ | ✅ | ❌ | ❌ |
| Update Own Task | ✅ | ✅ | ✅ | ✅ |
| Update Any Task | ✅ | ✅ | ❌ | ❌ |
| Raise PR | ✅ | ✅ | ✅ | ✅ |
| Approve PR | ✅ | ✅ | ❌ | ❌ |
| View All Tasks | ✅ | ✅ | ❌ | ❌ |
| View Own Tasks | ✅ | ✅ | ✅ | ✅ |
| Manage Users | ✅ | ❌ | ❌ | ❌ |

## 👥 Authors

- Chandana Rao
- Nagesh Kore
- NaveenSingh DivyaSingh
- Trisha G

## 🙏 Acknowledgments

- Supabase for authentication and database services
- shadcn/ui for beautiful UI components
- The open-source community for amazing tools and libraries
