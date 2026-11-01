# The Evolution of Todo - Phase II: Full-Stack Web Application

A production-ready full-stack task management application built with Next.js 16+, FastAPI, and PostgreSQL.

## Features
- User authentication with JWT tokens (7-day expiration)
- Complete CRUD operations for tasks
- User data isolation (strict security)
- Real-time hot reload during development
- Docker Compose orchestration
- Production-ready deployment to Neon PostgreSQL

## Technology Stack

### Frontend
- Next.js 16+ (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Better Auth (JWT plugin)
- React Server Components

### Backend
- FastAPI 0.115+
- SQLModel ORM
- Python 3.13+
- UV package manager
- PostgreSQL 16

### Database
- **Local:** PostgreSQL 16 (Docker)
- **Production:** Neon Serverless PostgreSQL

## Quick Start

### Prerequisites
- Docker Desktop 24+
- Git

### Setup

1. **Clone repository:**
   ```bash
   git clone <repo-url>
   cd Full-Stack-Web-Application