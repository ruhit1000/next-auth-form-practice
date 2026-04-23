# Next.js Auth Mastery Playground 🚀

A modern, responsive Next.js application built to practice and master user authentication flows, form validation, and protected routing.

## 📖 Overview

This project serves as a hands-on learning environment for building seamless Sign-In, Sign-Up, and protected dashboard experiences. It features a beautiful, responsive UI utilizing a "glassmorphism" aesthetic, powered by Tailwind CSS, DaisyUI, and HeroUI.

## ✨ Features

- **Authentication Flows:** Complete UI and logic for User Registration and Login.
- **Client-Side Validation:** Real-time form validation for emails and strong passwords (regex constraints).
- **Protected Routes:** A secure dashboard that conditionally renders an "Access Restricted" state (`NoUser` component) for unauthenticated visitors.
- **Modern UI/UX:**
  - Glassmorphism navigation bar with responsive mobile dropdowns.
  - Interactive, loading-state buttons to prevent duplicate submissions.
  - Toast notifications for success/error feedback.
- **Responsive Design:** Mobile-first approach ensuring the app looks great on phones, tablets, and desktops.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:**
  - [DaisyUI](https://daisyui.com/) (Cards, Layouts, Stats)
  - [HeroUI](https://heroui.com/) (Forms, Inputs, Interactive Buttons)
- **Icons:** `@gravity-ui/icons`
- **Routing:** `next/navigation` (`useRouter`, `Link`)

## 📂 Project Structure

Here is a quick look at the core files built for this project:

```text
/app
 ├── page.jsx                 # The interactive Landing Page
 ├── about/page.jsx           # Fake "About Us" company page
 ├── auth/
 │   ├── sign-in/page.jsx     # Login form with validation
 │   └── sign-up/page.jsx     # Registration form with validation & redirect
 └── dashboard/
	  └── page.jsx             # Protected route (Authenticated vs. NoUser view)

/components
 ├── Navbar.jsx               # Sticky glassmorphism header
 ├── Navlinks.jsx             # Reusable navigation links
 └── NoUser.jsx               # Beautiful "Access Restricted" empty state
```

## 🚀 Getting Started

To get this project running on your local machine:

1. **Clone the repository:**

	```bash
	git clone https://github.com/your-username/your-repo-name.git
	cd your-repo-name
	```

2. **Install dependencies:**

	```bash
	npm install
	```

3. **Start the development server:**

	```bash
	npm run dev
	```

4. **Open your browser:**
	Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 🧠 What I Learned

During this practice project, I focused on:

- Handling form data dynamically using `FormData` and `Object.fromEntries()`.
- Managing asynchronous loading states (`isLoading`) attached directly to UI buttons.
- Differentiating between client-side event handlers (`useRouter`) and server-side redirects.
- Using UI component libraries (HeroUI + DaisyUI) in tandem with Tailwind utility classes to rapidly build beautiful, consistent layouts.

---

*Designed and built as a personal practice project to master Next.js authentication flows.*
