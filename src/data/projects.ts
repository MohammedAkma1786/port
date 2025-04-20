import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "CRYPTOCURRENCY TRACKER",
    description: "",
    image: "/uploads/crypto.jpeg",
    github: "https://github.com/MohammedAkma1786/Crypto",
    live: "https://crypto-gamma-taupe.vercel.app/"
  },
  {
    title: "ECOMMERCE WEBSITE",
    description: "",
    image: "/uploads/ecommerce.png",
    github: "https://github.com/MohammedAkma1786/shopping.website",
    live: "https://mohammedakma1786.github.io/shopping.website/"
  },
  
  {
    title: "RENTING HOLIDAY HOMES",
    image: "/uploads/renting.png",
    github: "https://github.com/MohammedAkma1786/Renting",
    live: "https://renting-chi.vercel.app/",
    description: ""
  },
  {
    title: "FINANCE TRACKER",
    image: "/uploads/finance.png",
    github: "https://github.com/MohammedAkma1786/Finance-Management",
    live: "/projects/FINANCE%20TRACKER", // Match the title exactly
    description: "A comprehensive finance tracking application to manage expenses and budgets."
  }
];