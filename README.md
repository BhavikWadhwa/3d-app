# Bhavik Wadhwa — 3D Developer Portfolio

An interactive 3D portfolio that presents my experience, technical skills, featured projects, testimonials, and contact information in a modern, responsive format.

[View the live portfolio](https://3d-app-iota.vercel.app) · [View the source code](https://github.com/BhavikWadhwa/3d-app)

## About Me

I am a web developer experienced in creating responsive websites and web applications with React, WordPress, and Shopify. I am currently pursuing a Bachelor's degree in Computer Information Systems at the University of the Fraser Valley.

This portfolio works as an interactive version of my résumé and highlights my ability to combine frontend development, 3D graphics, animation, responsive design, and user-focused interfaces.

## What This Portfolio Showcases

- An animated 3D hero scene rendered directly in the browser
- A professional summary and overview of my development services
- An interactive technology section with 3D skill icons
- A chronological work-experience timeline
- Selected projects with technologies and external links
- Professional testimonials
- A responsive contact form with EmailJS support and an email-client fallback
- Responsive navigation and layouts for desktop and mobile devices

## Professional Experience

| Role | Organization | Period |
| --- | --- | --- |
| React.js Developer | Designing Solutions | May 2024 – August 2024 |
| Volunteer Web Developer | The Joy of Giving | January 2024 – August 2024 |
| Accounting Intern | Times Internet | December 2023 – January 2024 |
| Web Developer | Pro GIS Tech | May 2023 – September 2023 |

## Featured Projects

### Galventa

A clean and professional website for a pharmaceutical company specializing in nutraceutical and over-the-counter products.

**Technologies:** WordPress, Figma, Elementor<br>
**Website:** [galventa.com](https://www.galventa.com)

### Impersonally

A personality-testing platform with a responsive interface, API integrations, and animated interactions.

**Technologies:** WordPress, API integration, animations<br>
**Website:** [impersonally.io](https://impersonally.io)

### Nike Product Page

A responsive Nike product landing page with an interactive interface for showcasing footwear.

**Technologies:** React, Tailwind CSS, React Tilt<br>
**Source:** [Product_react](https://github.com/BhavikWadhwa/Product_react)

## Technology Stack

### Core Frontend

- **React 18** for component-based user interfaces
- **JavaScript (ES modules)** for application logic
- **Vite 5** for local development and production builds
- **React Router** for client-side navigation

### 3D and Animation

- **Three.js** for WebGL-powered 3D graphics
- **React Three Fiber** for rendering Three.js scenes with React
- **React Three Drei** for reusable 3D helpers, controls, loaders, and decals
- **Maath** for generating the animated star field
- **Framer Motion** for scroll-based transitions and interface animation
- **React Tilt** for interactive card effects
- **React Vertical Timeline** for the work-experience timeline

### Styling and Tooling

- **Tailwind CSS** for responsive utility-first styling
- **PostCSS** and **Autoprefixer** for CSS processing
- **ESLint** with React and Hooks rules for code quality
- **EmailJS** for contact-form delivery when credentials are configured
- **Vercel** for production hosting and HTTPS deployment

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

The contact form works without additional setup by opening the visitor's default email client. To send messages directly through EmailJS, create a `.env.local` file:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the development server after changing environment variables. Add the same variables to the Vercel project's environment settings for production use. Do not commit `.env.local` or private credentials.

## Deployment

The portfolio is deployed on Vercel at [3d-app-iota.vercel.app](https://3d-app-iota.vercel.app). Vercel detects the Vite configuration, runs `npm run build`, and publishes the generated `dist` directory.

## Acknowledgements

The original project structure was inspired by the [JavaScript Mastery 3D portfolio tutorial](https://youtu.be/0fYi8SGA20k). The portfolio content, professional experience, project information, styling customizations, fixes, and deployment configuration have been adapted for my personal résumé.

## Contact

**Bhavik Wadhwa**<br>
Email: [bhavikwadhwa131@gmail.com](mailto:bhavikwadhwa131@gmail.com)
