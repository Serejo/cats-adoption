# Cat Adoption Platform

A full-stack application for cat adoption built with modern technologies. This project provides a public interface to view cats available for adoption and an admin panel to manage cat records and adoption requests.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Extras](#extras)
- [Conclusion](#conclusion)

---

## Features

**Public Interface**

- View a list of available cats.
- View cat details in a two-column layout (circular avatar on the left and details on the right).
- Request an adoption by submitting a form with your name, CPF, contact number, and a visit date.

**Admin Panel**

- Admin authentication with Supabase Auth and JWT-based session management.
- Manage cat records (create, update, delete).
- Manage adoption requests:
  - List adoption requests.
  - Approve or reject requests using modal confirmation.
- A modern, responsive design using a custom color palette and the Inter font.

**Extras**

- Admin dashboard with key metrics (e.g., total cats, adoption requests).
- "Random Name" button in the cat creation form that uses Faker to generate a random cat name.
- Custom modals for creating, editing, deleting, and confirming adoption requests.
- Global state management using Pinia.

---

## Tech Stack

- **Framework:** Nuxt 3 (Vue 3, SSR/SSG)
- **Backend & Database:** PostgreSQL via Supabase
- **ORM:** Prisma
- **State Management:** Pinia
- **CSS:** Tailwind CSS (styled with a custom color palette: `#FFFFFF`, `#4E2096`, `#F9F8FB`)
- **Validation:** Zod
- **Authentication:** Supabase Auth with JWT
- **Icons:** Iconify
- **Data Generation:** Faker and LoremFlickr for random images

---

## API Endpoints

### Cats

- **GET** `/api/cats` – Lists all cat records.
- **POST** `/api/cats` – Creates a new cat record (input validated using Zod).
- **PUT** `/api/cats/:id` – Updates an existing cat record by ID.
- **DELETE** `/api/cats/:id` – Deletes a cat record by ID.

### Adoption Requests

- **GET** `/api/adoptions` – Returns a list of adoption requests (includes the cat's name via relation).
- **POST** `/api/adoptions` – Creates a new adoption request. Required fields:
  - `name`: Requester's name
  - `cpf`: CPF
  - `contact`: Contact number
  - `visitDate`: Date of visit
  - `catId`: ID of the cat
  - (The server automatically retrieves and stores the cat’s name.)
- **PUT** `/api/adoptions/approve/:id` – Updates an adoption request's status to "Approved" or "Adopted".
- **PUT** `/api/adoptions/reject/:id` – Updates an adoption request's status to "Rejected".

### Admin

- **POST** `/api/admin/login` – Authenticates an admin user, generates a JWT token, and sets a secure cookie for session management.

---

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/def-safe/defsafe-developers-test.git
   cd defsafe-developers-test

   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   JWT_SECRET=your_jwt_secret
   ```

4. **Run Database Migrations:**

   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   The application should now be running at `http://localhost:3000`.

---

## Usage

### Public Interface

- Navigate to `http://localhost:3000` to view the list of available cats.
- Click on a cat to view its details.
- Fill out the adoption request form to request an adoption.

### Admin Panel

- Navigate to `http://localhost:3000/admin` to access the admin panel.
- Log in using your admin credentials.
- Manage cat records and adoption requests through the admin interface.

---

## Extras

- **Random Name Button:** In the cat creation form, click the "Random Name" button to generate a random cat name using Faker.
- **Custom Modals:** Use custom modals for creating, editing, deleting, and confirming adoption requests.
- **Global State Management:** Manage global state using Pinia for a seamless user experience.

---

## Conclusion

This Cat Adoption Platform is a comprehensive solution for managing cat adoptions, providing both a public interface for potential adopters and an admin panel for managing records and requests. Built with modern technologies like Nuxt 3, Supabase, and Tailwind CSS, it ensures a responsive and user-friendly experience.

Feel free to contribute to the project by submitting issues or pull requests on GitHub.
