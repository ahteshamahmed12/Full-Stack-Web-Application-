The Evolution of Todo - Phase II: Full-Stack Web Application
A production-ready full-stack task management application built with Next.js 16+, FastAPI, and PostgreSQL.

Features
User authentication with JWT tokens (7-day expiration)
Complete CRUD operations for tasks
User data isolation (strict security)
Real-time hot reload during development
Docker Compose orchestration
Production-ready deployment to Neon PostgreSQL
Technology Stack
Frontend:

Next.js 16+ (App Router)
TypeScript (strict mode)
Tailwind CSS
Better Auth (JWT plugin)
React Server Components
Backend:

FastAPI 0.115+
SQLModel ORM
Python 3.13+
UV package manager
PostgreSQL 16
Database:

Local: PostgreSQL 16 (Docker)
Production: Neon Serverless PostgreSQL
Quick Start
Prerequisites
Docker Desktop 24+
Git
Setup
Clone repository:
git clone 
cd Full-Stack-Web-Application
Copy environment templates:
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local
Start all services:
docker-compose up
Access application:
Frontend: http://localhost:3000
Backend API: http://localhost:8000
API Docs: http://localhost:8000/docs
Database: localhost:5432 (postgres/postgres)
Development Workflow
Run tests:

# Backend tests
docker-compose exec backend pytest

# Frontend tests
docker-compose exec frontend npm test
Database migrations:

# Create migration
docker-compose exec backend alembic revision --autogenerate -m "description"

# Apply migrations
docker-compose exec backend alembic upgrade head
Access database:

docker-compose exec db psql -U postgres -d tasks_db
Project Structure
/
├── frontend/              # Next.js 16+ App Router
│   ├── app/              # App Router pages
│   ├── components/       # React components
│   ├── lib/             # API client, utilities
│   └── tests/           # Jest, Playwright tests
├── backend/              # FastAPI application
│   ├── src/
│   │   ├── models/      # SQLModel database models
│   │   ├── schemas/     # Pydantic schemas
│   │   ├── routers/     # API endpoints
│   │   └── middleware/  # JWT authentication
│   ├── tests/           # pytest tests
│   └── alembic/         # Database migrations
├── specs/                # Feature specifications
├── history/
│   ├── adr/             # Architecture Decision Records
│   └── prompts/         # Prompt History Records
└── docker-compose.yml    # Local development orchestration

User Stories
Phase II delivers 7 user stories:

User Registration (P1): Create account with email/password
User Login (P1): Authenticate with JWT tokens
View All Tasks (P2): Display user's tasks with data isolation
Create New Task (P2): Add tasks with title and description
Toggle Complete/Incomplete (P3): Mark tasks done/undone
Update Task (P3): Edit task title and description
Delete Task (P4): Permanently remove tasks
Security
Critical Requirements:

All database queries filter by user_id (strict data isolation)
JWT validation on all protected endpoints
Passwords hashed with bcrypt (never plaintext)
404 responses for unauthorized access (prevent information leakage)
SQL injection prevention via parameterized queries
XSS prevention via input sanitization
Performance
API response time: <200ms (p95)
Hot reload: <3 seconds for code changes
Indexed queries: user_id, completed, email
Connection pooling enabled
Server Components reduce JavaScript bundle size
Testing
Coverage Target: 80%+ for frontend and backend

Test Types:

Unit tests (pytest, Jest)
Integration tests (API contracts, user isolation)
E2E tests (Playwright - full user flows)
Deployment
Production Environment Variables
Backend (.env):

DATABASE_URL=postgresql://user:pass@neon-host.neon.tech/tasks_db?sslmode=require
BETTER_AUTH_SECRET=your-production-secret-key
JWT_SECRET_KEY=your-production-jwt-secret
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_DAYS=7
Frontend (.env.local):

NEXT_PUBLIC_API_URL=https://your-backend-api.com
BETTER_AUTH_SECRET=your-production-secret-key
Deploy to Production
Build Docker images
Deploy backend container to Railway/Cloud Run
Deploy frontend to Vercel
Configure Neon PostgreSQL connection
Run migrations: alembic upgrade head
Set environment variables in deployment platforms
Documentation
Specification: specs/001-task-crud-auth/spec.md
Architecture Plan: specs/001-task-crud-auth/plan.md
API Contracts: specs/001-task-crud-auth/contracts/
Data Model: specs/001-task-crud-auth/data-model.md
Quickstart Guide: specs/001-task-crud-auth/quickstart.md
Contributing
This project follows Spec-Driven Development (SDD):

Write specification first
Create architecture plan and ADRs
Generate tasks
Implement with TDD (red-green-refactor)
Maintain 80%+ test coverage
License
MIT