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
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  eightyTwoSolutions,
  esolace,
  ibexoft,
  upwork,
  bodymind,
  buybest,
  dollarmania,
  carhire,
  getz,
  mannyspizzeria,
  staewynn,
  tasavvur,
  zalmi,
  neetusinghsuhag,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About", path: "/#about" },
  { id: "portfolio", title: "Portfolio", path: "/#portfolio" },
  { id: "experience", title: "Experiences", path: "/#experience" },
  { id: "my-journal", title: "My Journal", path: "/blogs" },
  { id: "contact", title: "Contact", path: "/#contact" },
];

const info = {
  personalInfo: {
    name: "Muhammad Maaz",
    title: "Full-Stack Developer",
    description:
      "I'm a full-stack developer with a passion for building scalable and efficient applications.",
    email: "m.maazfaisal0301@gmail.com",
    phone: "+92 312 2345662",
  },
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

const services = [
  {
    title: "Full-Stack Developer",
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
    title: "WordPress Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Jr. Software Engineer",
    company_name: "Ibexoft",
    icon: ibexoft,
    iconBg: "#fff",
    date: "Jan 2024 - Present",
    points: [
      "Gathering and analyzing client requirements to build custom applications aligned with their goals.",
      "Collaborating in Agile teams, actively participating in sprint planning, daily standups, and code reviews to ensure alignment and maintain code quality.",
      "Applying OOP principles, design patterns, and SOLID principles to create scalable, maintainable code.",
      "Utilizing tools like Jira for effective project documentation and requirement tracking.",
      "Improving user experience by implementing UI/UX principles in application interfaces.",
    ],
  },
  {
    title: "Jr. PHP Developer",
    company_name: "82 Solutions",
    icon: eightyTwoSolutions,
    iconBg: "#fff",
    date: "Sep 2023 - Jan 2024",
    points: [
      "Translated client requirements into effective web solutions by developing and maintaining PHP/Laravel applications.",
      "Implemented RESTful APIs with Laravel Sanctum, ensuring secure and efficient data management for applications.",
      "Enhanced project performance and usability by utilizing MySQL for database management and Bootstrap for front-end interfaces.",
    ],
  },
  {
    title: "PHP/Laravel Developer",
    company_name: "Esolace Tech",
    icon: esolace,
    iconBg: "#fff",
    date: "Sep 2022 - Aug 2023",
    points: [
      "Developed and optimized web applications using PHP, PDO, and JavaScript, focusing on functionality and user experience.",
      "Designed user-friendly dashboards and integrated payment gateways to streamline application workflows.",
      "Ensured secure and efficient back-end processing, maintaining data integrity and reliability through MySQL database management.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#fff",
    date: "Aug 2022 - Present",
    points: [
      "Consulted with clients to understand their goals, gathering requirements and translating them into effective web solutions.",
      "Enhanced project management skills, handling project milestones, deadlines, and progress updates for transparent client communication.",
      "Strengthened client engagement skills, focusing on clear and effective communication to ensure project alignment and satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Maaz was a transformative experience for our startup. His innovative approach to web design helped us attract investors and stand out in a crowded market.",
    name: "Aisha Khan",
    designation: "Co-Founder",
    company: "GreenTech Innovations",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    testimonial:
      "Maaz didn't just build us a website; he crafted an online presence that truly reflects our brand. Our online bookings have increased by 40% since the redesign.",
    name: "Jonathan Lee",
    designation: "Owner",
    company: "Urban Escape Spa",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    testimonial:
      "I was impressed by Maaz's dedication to understanding our needs. His expertise helped streamline our e-commerce platform, resulting in a 25% boost in sales within three months.",
    name: "Maria Gonzalez",
    designation: "E-commerce Director",
    company: "Fashion Hub",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const projects = [
  {
    name: "Staewynn - Luxury Travels",
    intro:
      "A luxury travel website that celebrates and empowers Black women with exclusive travel services and sleek design.",
    details: {
      description:
        "Staewynn wanted a high-end website that communicated luxury and exclusivity, focused on providing tailored travel services for Black women. The brand's vision needed to come through in every aspect of the site—from fonts to layouts to color choices. My goal was to create a design that felt both modern and luxurious, a look that would make visitors feel the brand’s exclusivity from the moment they arrived on the homepage. I used WordPress and custom CSS to create a sleek, visually engaging site, paying careful attention to details that convey elegance. The result? A digital space that embodies Staewynn’s brand values and sets them apart in the luxury travel market.",
    },
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "UI/UX", color: "green-text-gradient" },
      { name: "Brand Identity", color: "pink-text-gradient" },
    ],
    video: staewynn,
    source_code_link: "https://staewynn.com/",
  },
  {
    name: "GETZ International",
    intro:
      "A portfolio site for a digital agency, showcasing their work with custom graphics and engaging visuals.",
    details: {
      description:
        "GETZ International, a digital agency, wanted a website that would professionally showcase their portfolio and attract potential clients. They needed a design that wasn’t just visually engaging but also allowed clients to browse their projects easily. Using WordPress, I created a layout that highlights each project with custom graphics, focusing on visual clarity without sacrificing style. The final product is a sleek, organized portfolio that emphasizes their creative skills, giving potential clients a strong first impression.",
    },
    tags: [
      { name: "Elementor", color: "blue-text-gradient" },
      { name: "Design", color: "green-text-gradient" },
      { name: "WooCommerce", color: "pink-text-gradient" },
    ],
    video: getz,
    source_code_link: "https://getzinternational.com/",
  },
  {
    name: "Manny's Pizzeria",
    intro:
      "A full digital transformation for a Canadian restaurant looking to take online orders and streamline restaurant operations.",
    details: {
      description:
        "Manny’s Pizzeria needed a digital setup where customers could easily order online, make payments directly on the website, and have a system to manage both in-house and online orders in one unified dashboard. The goal was to streamline the ordering process without adding extra workload for the staff. By connecting all orders into a single platform, I aimed to save Manny’s team time and minimize errors in handling orders. Using Bootstrap for the frontend and Laravel on the backend, I developed a custom solution and integrated Stripe to handle secure payments. A notable challenge was setting up the POS system, including a printer integration for in-house orders—a new and interesting experience for me. Now, Manny’s staff can manage everything in one place, making order handling as smooth as melted cheese on a pizza.",
    },
    tags: [
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "POS", color: "green-text-gradient" },
      { name: "Payment Integration", color: "pink-text-gradient" },
    ],
    video: mannyspizzeria,
    source_code_link: "https://mannyspizzeria.ca/",
  },
  {
    name: "Tasavvur Revamp",
    intro:
      "A WordPress makeover for a local brand’s website, turning it into an attractive, mobile-friendly platform.",
    details: {
      description:
        "Tasavvur needed a major revamp to reflect their brand’s aesthetic online while keeping things functional and responsive. The client wanted a fresh, eye-catching homepage, a stylish header, and a new hero section, along with a custom sale feature. My goal was to make the website visually appealing yet easy to navigate, so the brand’s online presence could leave a lasting impression. I redesigned the homepage and header, making sure to stay true to the client’s vision. Using Elementor and WooCommerce, I developed a seamless sales feature, then ensured the whole site was fully responsive. By the end, Tasavvur was ready to look its best, whether on a desktop or a mobile screen.",
    },
    tags: [
      { name: "Revamp", color: "blue-text-gradient" },
      { name: "Elementor", color: "pink-text-gradient" },
      { name: "Frontend", color: "green-text-gradient" },
    ],
    video: tasavvur,
    source_code_link: "https://tasavvur.pk",
  },
  {
    name: "Neetu Singh Suhag",
    intro:
      "A personal portfolio for Neetu Singh Suhag, crafted to showcase her vision, campaign goals, and community outreach efforts.",
    details: {
      description:
        "What was the goal? Neetu Singh Suhag needed an online platform to connect with her audience and share her mission, vision, and the campaigns she’s leading. She wanted a space where voters could understand her values, track her campaign activities, and easily find her latest updates. Why was this solution important? In an election, reaching voters and keeping them engaged is essential. A dedicated portfolio website meant that she could present her ideas in a centralized, professional manner while giving visitors a deeper insight into her work and goals. How did I make it happen? Using HTML, CSS, and Bootstrap, I developed a clean and informative site that highlights Neetu’s story, mission, and ongoing projects. One unique challenge? She wanted her social media feeds directly on the site. I integrated her feeds to keep her audience in the loop with real-time updates, bringing a fresh, dynamic touch to the portfolio.",
    },
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
    ],
    video: neetusinghsuhag,
    source_code_link: "https://www.neetusinghsuhag.au/",
  },
  {
    name: "Dollar Mania Store",
    intro:
      "An e-commerce site for a U.S.-based superstore that brings the convenience of online shopping to their customers.",
    details: {
      description:
        "The client, Dollar Mania, wanted to bring their superstore experience online, offering customers a convenient way to shop from home. My suggestion was to go with WordPress and WooCommerce, as their requirements were straightforward and focused on ease of use. The goal was to make the online shopping experience fast, functional, and easy to navigate, with a design that moves customers smoothly from product browsing to checkout. Keeping things simple was key to helping Dollar Mania stay competitive, and this platform now lets their customers shop without ever leaving the couch.",
    },
    tags: [
      { name: "WordPress", color: "blue-text-gradient" },
      { name: "WooCommerce", color: "green-text-gradient" },
      { name: "Design", color: "pink-text-gradient" },
    ],
    video: dollarmania,
    source_code_link: "https://dollarmania.store/",
  },
];

const blogs = [
  {
    id: 1,
    title: "Studio by Preline",
    slug: "studio-by-preline",
    tags: [
      { name: "Sponsored", color: "bg-gray-800 text-white" },
    ],
    date: "January 18, 2023",
    image:
      "https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80",
    content: "Full blog content here...", 
    relatedBlogs: ["onsite"],
  },
  {
    id: 2,
    title: "Onsite",
    slug: "onsite",
    tags: [],
    date: "February 10, 2023",
    image:
      "https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80",
    content: "Full blog content here...",
    relatedBlogs: ["studio-by-preline"],
  },
];

export { services, technologies, experiences, testimonials, projects, info, blogs };
