import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Min Khant Naing",
  initials: "MKN",
  url: "https://github.com/MinKhantNaing1999",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/bangkok",
  description:
    "Fresh Graduated Software Engineering student passionate about Data Engineering, with hands-on experience in building real-world data pipelines, real-time streaming systems, and scalable data solutions.",
  summary:
    "Over the past few years, my work has focused on data engineering, building real-world data pipelines and scalable systems. During my internship, I developed real-time data streaming pipelines using Apache Kafka and built end-to-end ETL workflows for integrating API and SCADA data into PostgreSQL. I have also worked with orchestration tools like Kestra and Airflow to automate data processing and ensure reliability through logging and error handling. I enjoy designing efficient data systems and enabling data-driven solutions for practical applications.",
  avatarUrl: "/me1.jpg",
  skills: [
    "Python",
    "Java",
    "Javascript",
    "FastApi",
    "Flask",
    "Node.js",
    "React",
    "Pytorch",
    "Tensorflow",
    "Docker",
    "Kubernetes",
    "Google Cloud",
    "Jenkins",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "minkhantnaing344@gmail.com",
    tel: "0824537350",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MinKhantNaing1999",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/min-khant-naing-09a9b51ba/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Be1 Digital Co,Ltd (Thailand)",
      href: "https://agroindustry.mfu.ac.th/en/integrated-agritech-ecosystem-research-group.html",
      badges: [],
      location: "Bangkok, Thailand",
      title: "Data Engineer Intern",
      logoUrl: "/be1logo.png",
      start: "Jan 2026",
      end: "current",
      description:
        "As a Data Engineer Intern at BE1 Digital, I focus on designing and developing end-to-end data pipelines using tools such as Kestra, PostgreSQL, and Apache Kafka. My work involves building ETL/ELT workflows, integrating data from APIs, SFTP, and real-time streaming sources (e.g., SCADA via ICCP), and transforming raw data into structured formats for analytics. I also implement audit logging, scheduling, and automated reporting systems, aiming to improve data reliability, monitoring, and decision-making across business operations",
    },
    {
      company: "Integrated AgriTech Ecosystem(IATE MFU)",
      href: "https://agroindustry.mfu.ac.th/en/integrated-agritech-ecosystem-research-group.html",
      badges: [],
      location: "Chiang Rai, Thailand",
      title: "Researcher",
      logoUrl: "/iate.png",
      start: "May 2024",
      end: "Nov 2025",
      description:
        "As a researcher at IATE, Mae Fah Luang University, focused on mango bruise detection using U-Net for image segmentation combined with K-means clustering algorithms. This work involves developing and optimizing AI models to accurately identify bruises on mangoes, aiming to improve quality control in agriculture through advanced computer vision techniques.",
    },
    {
      company: "Mae Fah Luang University",
      href: "",
      badges: [],
      location: "Chiang Rai, Thailand",
      title: "Teaching Assistance",
      logoUrl: "/MFU.jpeg",
      start: "Aug 2023",
      end: "May 2025",
      description:
        "As a Teaching Assistant at Mae Fah Luang University, I supported instructors in delivering course material for C# Programming, Data Structures & Algorithms, and Intelligent Computing. My responsibilities included helping students understand key concepts, assisting with exercises and assignments, answering questions, and providing additional guidance to reinforce learning and problem-solving skills.",
    },
  ],
  education: [
    {
      school: "Mae Fah Luang University",
      href: "https://mfu.ac.th",
      degree: "Bachelor of Engineering in Software Engineering",
      logoUrl: "/MFU.jpeg",
      start: "2022",
      end: "current",
    },
    {
      school: "Asia University(Taiwan)",
      href: "https://asia.edu.tw",
      degree: "Summer Program in Artificial Intelligence",
      logoUrl: "/AU.png",
      start: "July 2023",
      end: "Aug 2023",
    },
    {
      school: "iNet College",
      href: "https://inet.edu.mm/",
      degree: "Java Programming Course",
      logoUrl: "/inet.jpeg",
      start: "Oct 2018",
      end: "Dec 2018",
    },
    {
      school: "No.16 Basic Education High School",
      href: "https://en.wikipedia.org/wiki/Basic_Education_High_School_No._16_Mandalay",
      degree: "Primary, secondary, Highschool",
      logoUrl: "/mdy16.jpg",
      start: "2016",
      end: "2006",
    },
    
  ],
  projects: [
    {
      title: "RAOT Rubber Trade Data Pipeline",
      href: "",
      dates: "2026 Jan",
      active: true,
      description:
        "Designed and implemented an end-to-end ETL pipeline to ingest rubber trade data from APIs into PostgreSQL using Kestra. Performed JSON transformation, scheduling, and built dashboards in Apache Superset to support trade monitoring and analytics.",
      technologies: [
        "Python",
        "Kestra",
        "PostgreSQL",
        "API Integration",
        "JSON Transformation",
        "Apache Superset",
        "ETL Pipeline",
        "Data Modeling",
      ],
      links: [],
      image: "/raot-logo.png",
      video: "",
    },
    {
      title: "PEA SCADA Streaming Pipeline (ICCP → Kafka)",
      href: "",
      dates: "2026 March",
      active: true,
      description:
        "Developed a proof-of-concept streaming pipeline to ingest real-time SCADA data via ICCP protocol into Apache Kafka. Explored building data adapters, streaming ingestion, and preparing data for downstream processing and database integration.",
      technologies: [
        "Apache Kafka",
        "Python",
        "ICCP Protocol",
        "SCADA Integration",
        "Streaming Data",
        "Docker",
        "Data Ingestion",
        "Real-time Processing",
      ],
      links: [],
      image: "/pea-logo.jpg",
      video: "",
    },
    {
      title: "User interactive Mango bruise detection",
      href: "",
      dates: "Nov 2024 - current",
      active: true,
      description:
        "Individually developed interactive system for detecting and visualizing mango bruises using K-Means clustering, with user-defined classes, drawing box-based seeding, and real-time segmentation. ** source code are private under IATE Research Group and available upon request for authorized purpose**",
      technologies: [
        "Html",
        "CSS",
        "Javascript",
        "Python",
        "Clustering",
        "K mean Algorithm",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MinKhantNaing1999",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mango.png",
      video: "",
    },
    {
      title: "Hotel reservation cancellation prediction",
      href: "https://hotel-reservation-256158427613.us-central1.run.app",
      dates: "March 2025 - May 2025",
      active: true,
      description:
        "Cloud-deployed ML system predicting hotel reservation cancellations, integrated with Jenkins and Docker-based CI/CD pipeline for automated deployment and scalability",
      technologies: [
        "Python",
        "HTML",
        "CSS",
        "Machine Learning",
        "Data preprocessing",
        "Data analysing",
        "CI/CD deployment",
        "Google Cloud",
      ],
      links: [
        {
          type: "Website",
          href: "https://hotel-reservation-256158427613.us-central1.run.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MinKhantNaing1999/Hotel-Reservation-Cancellation-Prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Hotel.png",
      video: "",
    },
    // {
    //   title: "Gun Detection Model API",
    //   href: "https://huggingface.co/minkhantnaing/gun-detection-model",
    //   dates: "July 2025 - August 2025",
    //   active: true,
    //   description:
    //     "A real-time gun detection system using deep learning and computer vision to identify firearms in images. Built with Python, PyTorch, and FastAPI, it provides an API to upload images and receive annotated results.",
    //   technologies: [
    //     "Python",
    //     "PyTorch",
    //     "Torchvision",
    //     "FastAPI",
    //     "Pillow",
    //     "NumPy",
    //     "Uvicorn",   
    //   ],
    //   links: [
    //     {
    //       type: "Model link",
    //       href: "https://huggingface.co/minkhantnaing/gun-detection-model",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/MinKhantNaing1999/Gun-Detection",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/Gun.png",
    //   video: "",
    // },
    // {
    //   title: "Dorm App",
    //   href: "https://play.google.com/store/apps/details?id=com.thss.DormHub&pcampaignid=web_share",
    //   dates: "January 2024 - May 2024",
    //   active: true,
    //   description:
    //     "A Flutter-based dormitory management app that allows students to manage rooms, track facilities, and communicate with administration efficiently",
    //   technologies: [
    //     "Flutter",
    //     "Dart",
    //     "Firebase (Auth, Firestore, Storage)",
    //     "Push Notifications (Firebase Cloud Messaging)"
    //   ],
    //   links: [
    //     {
    //       type: "Google Play Store",
    //       href: "https://play.google.com/store/apps/details?id=com.thss.DormHub&pcampaignid=web_share",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/MinKhantNaing16/DormHub",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/dormApp.JPEG",
    //   video:
    //     "",
    // },
  ],
  hackathons: [
    {
      title: "Siriraj x MIT Hackathon",
      dates: "Oct 31st - Nov 2nd 2025",
      location: "Siriraj Research Center,Bangkok , Thailand",
      description:
        "Built an AI app 'listener space' to solve the need of psychiatrist and psychologist.",
      image:
        "/MIT.webp",
      mlh: "",
      links: [],
    },
    {
      title: "Code for Hope Hackathon",
      dates: "June 26th-27th 2025",
      location: "Chiang Mai, Thailand",
      description:
        "Built a prototype platform designed to guide users in their career journey using AI. Features include personalized learning roadmaps, curated blogs and courses, and AI-driven mock interviews to prepare for real-world opportunities.",
      image:
        "/Hackathon1.jpg",
      mlh: "",
      links: [],
    },
    
    {
      title: "SE hackathon MFU(2024)",
      dates: "August 17th-18th 2024",
      location: "Chiang Rai, Thailand",
      description:
        "Build a web-based healthcare app to track health activity, consult an AI chatbot, and book doctor appointments.",
      image:
        "/SE_Hackathon.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PeteChayabordin/Se-Hackathon2024",
        },
      ],
    },
    {
      title: "SE hackathon MFU(2022)",
      dates: "August 8th-9th 2022",
      location: "Chiang Rai, Thailand",
      description:
        "A prototype food donation app connecting donors, volunteers, and people in need",
      image:
        "/SE_Hackathon.png",
      links: [],
    },
  ],
} as const;
