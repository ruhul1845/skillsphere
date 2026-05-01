# 🎓 SkillSphere – Online Learning Platform

A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.

## 🌐 Live URL

[https://your-live-url.vercel.app](https://skillphere.vercel.app/profile)

## 📁 GitHub Repository

[https://github.com/your-username/skillsphere](https://github.com/ruhul1845/skillsphere)

---

## ✨ Key Features

- 🔐 **Authentication** – Email/password login & Google OAuth via BetterAuth
- 📚 **All Courses Page** – Browse all available courses with search by title
- 🔒 **Protected Course Details** – Only accessible to logged-in users; redirects back after login
- 👤 **My Profile** – View and update display name & profile photo URL
- 🏆 **Top Instructors Section** – Highlights platform's featured instructors
- 🔥 **Popular Courses** – Showcases the top 3 highest-rated courses on the homepage
- 📈 **Trending / New Releases Section** – Extra section highlighting trending content
- 💡 **Learning Tips Section** – Study techniques and time management tips
- 🎨 **Fully Responsive** – Mobile, tablet, and desktop support
- 🔔 **Toast Notifications** – Feedback on login, registration, and profile update
- ⏳ **Loading States** – Loaders shown during data fetching
- 🚫 **404 Not Found Page** – Custom not-found page for invalid routes
- 🎞️ **Hero Banner/Slider** – Dynamic hero section with motivational messaging

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) / [HeroUI](https://heroui.com/) | UI component library |
| [BetterAuth](https://better-auth.com/) | Authentication (Email + Google OAuth) |

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `better-auth` | Authentication provider |
| `swiper` | Hero banner/slider component |
| `react-hot-toast` | Toast notifications |
| `motion` *(or your chosen animation lib)* | Animations and transitions |

> *(Update this list to match the packages actually installed in your project)*

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
git clone https://github.com/ruhul1845/skillsphere
cd skillsphere
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> ⚠️ Never commit your `.env.local` file. It is listed in `.gitignore`.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Pages & Routes

| Route | Description | Protected |
|---|---|---|
| `/` | Home page with hero, popular courses, tips, instructors | ❌ |
| `/courses` | All courses with search functionality | ❌ |
| `/courses/[id]` | Course details page | ✅ Login required |
| `/login` | Login with email or Google | ❌ |
| `/register` | Register with name, email, photo, password | ❌ |
| `/my-profile` | View logged-in user's profile | ✅ Login required |
| `/my-profile/update` | Update name and profile photo | ✅ Login required |
| `*` | Custom 404 Not Found page | ❌ |

---

## 📸 Screenshots

> *(Add screenshots of your homepage, courses page, and course details page here)*

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your@email.com
