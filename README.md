# Bhavik Wadhwa - Interactive 3D Portfolio

An interactive portfolio that presents my resume, technical experience, projects, skills, testimonials, and contact information through responsive design, browser-based 3D graphics, and motion.

[View the live portfolio](https://3d-app-iota.vercel.app) | [View the source code](https://github.com/BhavikWadhwa/3d-app)

## Professional Profile

I am a Bachelor of Computer Information Systems graduate with hands-on experience across software development, technical operations, workflow automation, business systems, customer service, data analysis, technical instruction, and operations. I enjoy translating business and operational needs into practical technology solutions.

My target areas include technical operations, business systems, operations analysis, product operations, software development, and technology consulting.

## What the Portfolio Showcases

- A responsive 3D hero scene rendered directly in the browser
- A resume-based professional overview and experience summary cards
- A chronological work history with three focused achievements per role
- Eighteen interactive technology balls based on my resume and projects
- Full-stack, automation, AI, analytics, machine-learning, and frontend projects
- Professional testimonials and a resilient contact form
- Responsive navigation and layouts for desktop and mobile devices

## Professional Experience

| Role | Organization | Period |
| --- | --- | --- |
| Commis Chef (Line Cook) | Alimentaria Mexicana | June 2026 - Present |
| Event Operations Team Member | Nuba - FIFA Fan Festival | May 2026 - July 2026 |
| Academic Tutor & Lab Instructor | University of the Fraser Valley | September 2025 - April 2026 |
| Soccer Statistician | UFV Cascades Athletics | August 2025 - October 2025 |
| PC Financial Representative | Kognitive Marketing | April 2025 - December 2025 |
| Software Developer Intern | Designing Solutions | April 2024 - September 2024 |

## Featured Technical Projects

### AutoFlow - AI Workflow Automation Platform

A full-stack platform for visually building, validating, executing, and monitoring automated business workflows. It includes modular workflow nodes, validation, persistent execution history, runtime logs, Docker-based development, database migrations, and deployment automation.

**Technologies:** Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic, JWT, REST APIs, Docker, GitHub Actions

### NorthBrief News Platform

A personalized Canadian news platform that ingests content from more than 28 RSS and official sources, handles deduplication and categorization, and generates concise AI-supported news summaries with deterministic fallbacks.

**Technologies:** Next.js, React, TypeScript, FastAPI, PostgreSQL, OpenAI, Docker, Render

### Football Match Prediction & Lineup Analytics

An end-to-end sports analytics platform that processes data from more than 500 matches, engineers predictive features, trains Random Forest models, and presents match probabilities, feature importance, and lineup simulations in an interactive dashboard.

**Technologies:** Python, Pandas, Scikit-learn, Streamlit, Plotly, BeautifulSoup

### Interactive 3D Portfolio

This responsive portfolio uses reusable React components, browser-based 3D scenes, animated transitions, and a contact form with EmailJS and email-client fallback support.

**Technologies:** React, Three.js, React Three Fiber, Framer Motion, Tailwind CSS, Vite

## Technology Stack

### Programming and Frontend

- Python, Java, C++, JavaScript, TypeScript, HTML5, and CSS3
- React, Next.js, Tailwind CSS, Bootstrap, and Node.js
- Responsive design, CSS Flexbox, CSS Grid, and DOM manipulation

### Backend, APIs, and Data

- FastAPI, REST APIs, JWT authentication, SQLAlchemy, and Alembic
- PostgreSQL, SQLite, SQL, Pandas, and Scikit-learn
- Workflow automation, validation engines, data pipelines, and integration testing

### 3D, Visualization, and Design

- Three.js, React Three Fiber, React Three Drei, Maath, and Framer Motion
- Streamlit, Plotly, Tableau, Figma, and React Tilt

### Tools and Platforms

- Git, GitHub, Docker, Postman, Visual Studio Code, Windows, and Linux
- WordPress, Brilliant Directories, Vercel, Render, and GitHub Actions
- Microsoft Excel, PivotTables, PivotCharts, XLOOKUP, VLOOKUP, SUMIFS, and data validation

## Running Locally

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/BhavikWadhwa/3d-app.git
cd 3d-app
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project with ESLint |

## Contact Form Configuration

Without additional configuration, the contact form opens the visitor's default email client. To send messages directly through EmailJS, create a `.env.local` file:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Add the same variables to the Vercel project environment settings for production use. Never commit `.env.local` or private credentials.

## Deployment

The portfolio is deployed on Vercel at [3d-app-iota.vercel.app](https://3d-app-iota.vercel.app). Vercel runs `npm run build` and publishes the generated `dist` directory.

## Acknowledgements

The original project structure was inspired by the [JavaScript Mastery 3D portfolio tutorial](https://youtu.be/0fYi8SGA20k). The content, experience, projects, styling, fixes, and deployment configuration were adapted for my personal portfolio.

## Contact

**Bhavik Wadhwa**<br>
Email: [bhavikwadhwa1312@gmail.com](mailto:bhavikwadhwa1312@gmail.com)
