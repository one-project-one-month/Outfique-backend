# Contributing Guide

Welcome\! We're excited that you're interested in contributing. This guide will help you get your development environment set up and walk you through our workflow.

## 📋 Table of Contents

1.  [Prerequisites](https://www.google.com/search?q=%23-prerequisites)
2.  [Project Installation](https://www.google.com/search?q=%23-project-installation)
3.  [Project Setup](https://www.google.com/search?q=%23-project-setup)
    - [Option 1: Local Development](https://www.google.com/search?q=%23option-1-local-development)
    - [Option 2: Docker Development (Recommended)](https://www.google.com/search?q=%23option-2-docker-development-recommended)
4.  [Database Migrations](https://www.google.com/search?q=%23-database-migrations)
5.  [Development Workflow](https://www.google.com/search?q=%23-development-workflow)
6.  [Commit Guidelines](https://www.google.com/search?q=%23-commit-guidelines)
7.  [Pull Request Process](https://www.google.com/search?q=%23-pull-request-process)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20+) and **npm**
- **Git**
- **PostgreSQL** (v16+) for local development
- **Docker** & **Docker Compose** for Docker-based development

## ⚙️ Project Installation

First, clone the repository and install the dependencies.

```bash
# 1. Clone the repository
git clone https://github.com/one-project-one-month/Outfique-backend.git

# 2. Navigate into the project directory
cd outfique-backend

# 3. Install dependencies using pnpm
pnpm install

# 4. Set up Git hooks with Husky
pnpm run prepare
```

## 🛠️ Project Setup

You need to create a `.env` file for your environment variables. Start by copying the example file:

```bash
cp .env.example .env
```

Now, follow the instructions for your chosen development method.

### Option 1: Local Development

1.  **Configure Environment Variables**

    Open the `.env` file and set your local database connection string.

    ```ini
    # .env
    NODE_ENV=development
    PORT=3000
    DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/myapp_dev"
    ```

2.  **Start the Development Server**

    ```bash
    pnpm run dev
    ```

### Option 2: Docker Development (Recommended)

1.  **Configure Environment Variables**

    Open the `.env` file and ensure the `DATABASE_URL` points to the Docker service name (`db`).

    ```ini
    # .env
    NODE_ENV=development
    PORT=3000

    # Important: Use 'db' as the hostname, which is the Docker service name
    DATABASE_URL="postgresql://postgres:postgres@db:5432/myapp_dev"
    ```

2.  **Start Docker Services**

    This command will build and start the application and database containers in the background.

    ```bash
    docker compose up -d --build
    ```

3.  **View Logs**

    To monitor the application logs, use:

    ```bash
    docker compose logs -f app
    ```

## 🗄️ Database Migrations

After setting up your environment, you need to run the database migrations.

#### For Local Development

Run these commands in your local terminal.

```bash
# Apply migrations
pnpm exec prisma migrate dev

# Generate Prisma Client
pnpm exec prisma generate

# (Optional) Open Prisma Studio to view/edit data
pnpm exec prisma studio
```

#### Inside Docker

Execute the commands inside the running `app` container.

```bash
# Apply migrations
docker compose exec app npx prisma migrate dev

# Generate Prisma Client
docker compose exec app npx prisma generate

# (Optional) Open Prisma Studio. You'll need to map the port in docker-compose.yml.
docker compose exec app npx prisma studio
```

## 🚀 Development Workflow

Follow these steps to contribute new features or fixes.

#### 1\. Pick a Ticket

- Go to the **Issues** tab on GitHub.
- Find an unassigned ticket you want to work on.
- Assign the ticket to yourself and move its status to "In Progress".

#### 2\. Sync with the `dev` Branch

Always start from the latest version of the `dev` branch.

```bash
# Switch to the dev branch
git checkout dev

# Pull the latest changes
git pull origin dev
```

#### 3\. Create a Feature Branch

Use our branch naming convention: `{type}/TICKET-{id}-{description}`.

| Type         | Format                        | Example                                     |
| :----------- | :---------------------------- | :------------------------------------------ |
| **Feature**  | `feature/TICKET-{id}-{desc}`  | `feature/TICKET-123-add-login-page`         |
| **Bug Fix**  | `fix/TICKET-{id}-{desc}`      | `fix/TICKET-456-null-pointer-error`         |
| **Refactor** | `refactor/TICKET-{id}-{desc}` | `refactor/TICKET-789-optimize-user-service` |
| **Docs**     | `docs/TICKET-{id}-{desc}`     | `docs/TICKET-101-update-api-guide`          |

Create and switch to your new branch:

```bash
git checkout -b feature/TICKET-123-add-user-authentication
```

#### 4\. Make Your Changes

Write your code\! The server will automatically restart whenever you save a file.

- **Local Dev:** The server is running via `pnpm run dev`.
- **Docker Dev:** The services are running via `docker compose up`. View logs with `docker compose logs -f app`.

## 📝 Commit Guidelines

We use [Commitizen](https://github.com/commitizen/cz-cli) to maintain a consistent commit history. Instead of `git commit`, use our script:

```bash
# 1. Stage your changes
git add .
# OR stage specific files
# git add src/services/user.service.ts

# 2. Commit using the interactive prompt
pnpm run commit

git push your branch
```

The prompts will guide you to create a well-formatted commit message.

## 🔀 Pull Request Process

Once your feature is complete and committed, it's time to create a Pull Request (PR).

1.  **Push Your Branch**

    ```bash
    git push origin feature/TICKET-123-add-user-authentication
    ```

2.  **Create a Pull Request**
    - Go to the repository on GitHub.
    - Click the "Compare & pull request" button that appears for your recently pushed branch.
    - Set the target branches:
      - **Base:** `dev`
      - **Compare:** `your-feature-branch`

3.  **Fill Out the PR Template**
    - The PR template will load automatically. Please fill in the details about your changes, including the "Why" and "What".
    - Link the issue your PR resolves (e.g., "Closes \#123").

4.  **Submit the Pull Request**
    - Add relevant **reviewers** (e.g., your team lead).
    - Add appropriate **labels** (e.g., `feature`, `backend`, `bug`).
    - Click "Create pull request".

5.  **CI/CD Checks & Code Review**
    - Our GitHub Actions workflow will automatically run checks (Linting, Type Checking, Build, etc.). All checks must pass.
    - Your team lead or other reviewers will review your code and may request changes.
    - Please respond to feedback and push any necessary changes to your branch. The PR will update automatically.

Once your PR is approved and all checks pass, it will be merged into `dev`. Thank you for contributing\!
