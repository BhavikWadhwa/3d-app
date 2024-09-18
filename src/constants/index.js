import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    joyofgiving,
    timesinternet,
    designing,
    progistech,
    carrent,
    jobit,
    tripguide,
    threejs,
    Galventa,
    Nike,
    impersonally,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
 
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Designing Solutions",
      icon: designing,
      iconBg: "#E6DEDD",
      date: "May 2024 - August 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "Web Developer, Volunteer",
      company_name: "The Joy of Giving",
      icon: joyofgiving,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - august 2024",
      points: [
        "Developed the official website for The Joy of Giving NGO (https://thejoyofgiving.in ), enhancing its online presence and outreach.",
        "actively participated in organizing and conducting various camps, contributing to the NGO's mission of supporting underprivileged communities.",
      ],
    },


    {
      title: "Accounting Intern",
      company_name: "Times Internet",
      icon: timesinternet,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Jan 2024",
      points: [
        "Got an introduction to SAP modules like Material Management (MM).",
        "Moreover, got an introduction to modules such as FICO, HR, and CO",
        "Understood flow of information from accounting and finance perspective through the modules.",
       
      ],
    },
    {
      title: "Web Developer",
      company_name: "Pro GIS Tech",
      icon: progistech,
      iconBg: "#E6DEDD",
      date: "May 2023 - Sep 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Bhavik proved me wrong.",
      name: "Manish Taneja",
      designation: "CFO",
      company: "Designing Solutions",
      image: "https://thejoyofgiving.in/wp-content/uploads/2023/08/davinder-295x3001wwl.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Bhavik does.",
      name: "Davinder Singh",
      designation: "CEO",
      company: "Pro GIS Tech",
      image: "https://cdn-iebij.nitrocdn.com/RmrxpXJIDoTLxhmUGLiTcPCGrtULrOuz/assets/images/optimized/rev-d2d5072/designingsolutions.co.in/wp-content/uploads/2023/02/davinder-295x3001ww.png",
    },
    {
      testimonial:
        "He was Quick enough to grasp the Accounting SCP models, truly a fast learner",
      name: "Atul Ahuja",
      designation: "General Manager",
      company: "Times Internet, Delhi",
      image: "https://media.licdn.com/dms/image/v2/C5103AQH6F2WtSj8Ejg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1518158104243?e=1732147200&v=beta&t=UdgqXfL0AZVEegrjAFc-bInlfQukZY57vhk_ohLPR1U",
    },
  ];
  
  const projects = [
    {
      name: "Galventa",
      description:
        "Developed a clean and professional website for a pharmaceutical company specializing in nutraceuticals and OTC products.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Figma",
          color: "green-text-gradient",
        },
        {
          name: "Elemontor",
          color: "pink-text-gradient",
        },
      ],
      image: Galventa,
      source_code_link: "https://www.galventa.com",
    },
    {
      name: "Impersonally",
      description:
        "Created an innovative platform for personality testing, ensuring a seamless user interface and a dynamic, responsive design.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Api Integration",
          color: "green-text-gradient",
        },
        {
          name: "Animations",
          color: "pink-text-gradient",
        },
      ],
      image: Nike,
      source_code_link: "https://impersonally.io",
    },
    {
      name: "Nike Product page",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Tilt",
          color: "pink-text-gradient",
        },
      ],
      image: impersonally,
      source_code_link: "https://github.com/BhavikWadhwa/Product_react",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };