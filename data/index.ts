import { ProjectDetail, Urlname } from "@/interfaces";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working as a software developer",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Play Chess",
    des: "Online Chess playing platform, where players compete with each other, enjoy a realtime chess playing experience",
    img: "https://chess.deepanshu.techresonance.com/chess_board.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/nodejs.svg",
      "/nginx.svg",
    ],
    link: Urlname.chess,
    urlLink: "https://chess.deepanshu.techresonance.com/",
  },
  {
    id: 2,
    title: "Restaurant Managing Platform",
    des: "Manage your restaurants efficiently, track revenue, boost performance, have a detailed record of nitty gritty things",
    img: "/eatrofoods_photo.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/nestjs.svg",
      "/redis.svg",
      "/prisma.svg",
      "/mongodb-original.svg",
      "/nginx.svg",
    ],
    link: Urlname.eatrofoods,
    urlLink: "https://auth.eatrofoods.com/",
  },
  {
    id: 3,
    title: "readmylove dating app",
    des: "A dating app that connects people based on their interests and preferences",
    img: "readmylove-banner.webp",
    iconLists: [
      // "/next.svg",
      "/expo-icon-svgrepo-com.svg",
      "/ts.svg",
      "/nestjs.svg",
      "/nginx.svg",
    ],
    link: Urlname.readmylove,
    urlLink: "https://play.google.com/store/apps/details?id=com.deepanshu895.readmylove",
  },
  {
    id: 4,
    title: "Generate your dream picture from your portrait",
    des: "Generative AI application which converts your portrait according to provided prompt",
    img: "/dreammypic-banner.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nestjs.svg"],
    link: Urlname.dreammypic,
    urlLink: "https://dreammypic.com",
  },
];

export const projectDetails: ProjectDetail[] = [
  {
    heading: "Play Chess with live opponent online",
    majorText:
      "Online Chess playing platform, where players compete with each other, enjoy a realtime chess playing experience",
    githubLink: "https://github.com/DeepanshuKacher/chess-clone",
    siteUrl: "https://chess.deepanshu.techresonance.com",
    imageLink: "https://chess.deepanshu.techresonance.com/chess_board.jpg",
    urlname: Urlname.chess,
    technologicalDescription:
      "Frontend is made with next.js (SSG) and for ui purposes I have used tailwind css. Backend is in pure typescript and for routing purposes I have use expressJS",
  },
  {
    heading: "Restaurant Managing Web Based System",
    majorText:
      "Manage your restaurants efficiently, track revenue, boost performance, have a detailed record of nitty gritty things",
    githubLink: "https://github.com/eatrofoods",
    siteUrl: "https://auth.eatrofoods.com",
    imageLink: "/eatrofoods_photo.png",
    urlname: Urlname.eatrofoods,
    technologicalDescription:
      "eatrofoods is a combinatin of many small projects and those are - manager(web-application), backend(nest.js), foodie food ordering web-application for restaurant's customers, a react-native (expo) based mobile application for waiter and a printing management system based on python, it's a live application where everything is connected to a centralized system know as mosquitto which is mqtt broker helps for bi-directional communication, eatrofoods is also well suited for fast pace restaurant because of redis in-memory database and for storing data's we use mongodb and prisma ORM as connector",
  },
  {
    heading: "readmylove dating app",
    majorText:
      "A dating app that connects people based on their posts, preferences and locations",
    githubLink: "https://github.com/DeepanshuKacher?tab=repositories",
    siteUrl: "https://play.google.com/store/apps/details?id=com.deepanshu895.readmylove",
    imageLink: "/eatrofoods_photo.png",
    urlname: Urlname.readmylove,
    technologicalDescription:
      "React Native (expo) based mobile application.",
  },
  {
    heading: "Generate your dream picture from your portrait",
    majorText: "Generative AI application which converts your portrait according to provided prompt",
    githubLink: "https://github.com/DeepanshuKacher?tab=repositories",
    siteUrl: "https://dreammypic.com",
    imageLink: "/eatrofoods_photo.png",
    urlname: Urlname.dreammypic,
    technologicalDescription:
      "python, stable diffusion, next.js, tailwind css, typescript, docker, runpod",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Started my carrer as javascript developer at Med-Size startup, my core job was to fix-bugs, improve functionality",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Self Startup",
    desc: "Restaurant management system eatrofoods, a project fully-developed in typescript for managing restaurants",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Lead Developer in startup",
    desc: "Development, Operations and managing projects, starting from idea to actual product. Devops and Management",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "readmylove dating app",
    desc: "Recently working on readmylove dating app, exploring marketing, google play store and advertising",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/DeepanshuKacher",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/deepanshu895",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/deepanshukacher/",
  },
];
