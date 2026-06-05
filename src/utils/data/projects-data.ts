import crefin from '../../assets/images/crefin.png';
import travel from '../../assets/images/travel.png';
import realEstate from '../../assets/images/realEstate.png';
import ayla from '../../assets/images/ayla.png';

interface Project {
    id: number;
    name: string;
    description: string;
    tools: string[];
    code: string;
    demo: string;
    image: string;
    role: string;
}


// projects-data.ts
export const projects = [
  {
    id: 1,
    name: "Enterprise Vendor Portal (RAAPYD)",
    description: "Multi-tenant Vendor Portal platform for SAP-based manufacturing enterprises. Architected end-to-end procurement workflows (PR/PO → ASN → GRN → Payment Advice) with role-based access. Built RFQ, BOQ, and Auction modules with vendor ranking (L1 view) and real-time WebSocket notifications. Delivered portals for Eicher (VECV), Tata Advanced Systems, Munjal Showa, and Transrail Lighting Ltd.",
    tools: ["Angular", "PrimeNG", "RxJS", "WebSocket", "Spring Boot", "PostgreSQL"],
    code: "",
    demo: "",
    image: "assets/images/projects/vendor-portal.png",
    role: "Software Developer"
  },
  {
    id: 2,
    name: "raapyd-gui (NPM Library)",
    description: "Developed and published company-owned Angular NPM libraries (Core & Table) enabling reusable CRUD, advanced filtering, virtual scrolling, sorting, pagination, and mobile-responsive UI — reducing repetitive development by 50% across enterprise deployments.",
    tools: ["Angular", "TypeScript", "NPM", "PrimeNG", "RxJS"],
    code: "",
    demo: "https://www.npmjs.com/package/raapyd-gui",
    image: "assets/images/projects/npm-library.png",
    role: "Library Author"
  },
  {
    id: 3,
    name: "Mario Towing Application",
    description: "Web Admin Panel for Canadian vehicle towing service platform. Handles customer towing requests for accidents and emergency towing. Supports multi-role login access for customers, drivers, and administrators.",
    tools: ["Angular", "Node.js", "TypeScript", "Bootstrap"],
    code: "",
    demo: "",
    image: "assets/images/projects/mario-towing.png",
    role: "Angular Developer"
  },
  {
    id: 4,
    name: "Live Reflective Resume Builder",
    description: "Resume Builder Website with real-time live preview functionality using Angular reactive forms. Changes instantly reflect on the resume preview. Supports PDF export for high-quality downloadable resumes.",
    tools: ["Angular", "Angular Material", "Bootstrap", "TypeScript"],
    code: "",
    demo: "",
    image: "assets/images/projects/resume-builder.png",
    role: "Angular Developer"
  },
  {
    id: 5,
    name: "Simon Game",
    description: "Interactive Simon Game web app testing users' memory and cognitive skills. Built with event-driven programming for user input handling, game logic, scoring system, and high-score tracking.",
    tools: ["JavaScript", "HTML", "CSS"],
    code: "",
    demo: "",
    image: "assets/images/projects/simon-game.png",
    role: "Frontend Developer"
  },
  {
    id: 6,
    name: "QR Code Based Feedback System",
    description: "SSIP Hackathon 2022 project. Web platform enabling Indian citizens to freely submit complaints against government agencies and police stations using QR code scanning.",
    tools: ["React", "JavaScript", "HTML", "CSS"],
    code: "",
    demo: "",
    image: "assets/images/projects/qr-feedback.png",
    role: "Frontend Developer"
  }
]
// export const projects: Project[] = [
//     {
//         id: 1,
//         name: "Crunch Africa",
//         description: "Fintech App developed with Flutter. Implemented complex features including QR code scanning, Firebase authentication, and comprehensive testing suite including unit, widget, and integration tests. Used Bloc for state management and integrated Sentry for error tracking.",
//         tools: ["Flutter", "Bloc", "Firebase", "Sentry", "Unit Testing", "Widget Testing"],
//         code: "",
//         demo: "https://apps.apple.com/us/app/crunch-africa/id1537297077",
//         image: "assets/images/projects/crunch-africa.webp",
//         role: "Mobile App Architect",
//     },
//     {
//         id: 2,
//         name: "Akyurt Online",
//         description: "E-commerce mobile application built for both iOS and Android platforms. Implemented complex UI components, integrated backend API services, and implemented secure payment processing systems using Provider pattern for state management.",
//         tools: ["Flutter", "Provider", "REST API", "Payment Integration"],
//         code: "",
//         demo: "https://apps.apple.com/us/app/akyurt-online/id1542598367",
//         image: "assets/images/projects/akyurt-online.webp",
//         role: "Flutter Developer",
//     },
//     {
//         id: 3,
//         name: "Baredex",
//         description: "Mobile application with focus on REST API integration and data management. Implemented Provider pattern for efficient state management and created a robust architecture for API communication.",
//         tools: ["Flutter", "Provider", "REST API"],
//         code: "",
//         demo: "https://play.google.com/store/apps/details?id=com.breadex.app",
//         image: "assets/images/projects/baredex.webp",
//         role: "Flutter Developer",
//     },
//     {
//         id: 4,
//         name: "Mocowi",
//         description: "IoT-based mobile application for card device management. Implemented real-time data synchronization and device communication through REST APIs. Created an intuitive interface for device monitoring and control.",
//         tools: ["Flutter", "IoT", "REST API", "Real-time Data"],
//         code: "",
//         demo: "https://play.google.com/store/apps/details?id=com.mocowi.mocowi",
//         image: "assets/images/projects/mocowi.webp",
//         role: "IoT App Developer",
//     },
//     {
//         id: 5,
//         name: "Sabroso",
//         description: "E-commerce application with comprehensive cart and payment system. Implemented Bloc pattern for state management and created extensive testing suite including unit, widget, and integration tests.",
//         tools: ["Flutter", "Bloc", "Payment Integration", "Unit Testing", "Widget Testing"],
//         code: "",
//         demo: "",
//         image: "assets/images/projects/sabroso-logo.jpg",
//         role: "Senior Flutter Developer",
//     },
//     {
//         id: 6,
//         name: "Sigma Math Quiz App",
//         description: "Educational game application featuring interactive math quizzes. Implemented complex animations and sound effects using Flutter. Used Bloc pattern for state management to handle game logic and user progress.",
//         tools: ["Flutter", "Bloc", "Animations", "Game Development"],
//         code: "",
//         demo: "",
//         image: "assets/images/projects/sigma-app.png",
//         role: "Game Developer",
//     },
//     {
//         id: 7,
//         name: "Daily Expense Manager",
//         description: "Personal finance management application utilizing Firebase Firestore for data storage and Google Authentication for user management. Implemented Provider pattern for state management.",
//         tools: ["Flutter", "Provider", "Firebase", "Google Auth"],
//         code: "",
//         demo: "https://play.google.com/store/apps/details?id=com.aqua.regalsystem.pocket.manager",
//         image: "assets/images/projects/daily-expense-manager.png",
//         role: "Flutter Developer",
//     },
//     {
//         id: 8,
//         name: "ABC Delivery",
//         description: "Delivery management application featuring Google Maps integration, Firebase Firestore for data storage, and Google Authentication. Implemented Provider pattern for state management and location tracking features.",
//         tools: ["Flutter", "Provider", "Google Maps", "Firebase", "Google Auth"],
//         code: "",
//         demo: "https://play.google.com/store/apps/details?id=com.eeizo.abcdelivery",
//         image: "assets/images/projects/abcd.png",
//         role: "Full Stack Developer",
//     }
// ];