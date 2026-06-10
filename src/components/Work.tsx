import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    name: "DATAPULSE",
    category: "Business Intelligence Dashboard",
    tech: "Next.js 16 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Recharts, Auth.js v5, Prisma v7, Neon PostgreSQL, Zod",
    github: "https://github.com/ZIYA8909/DATAPULSE",
    deployed: "https://datapulse-y7x1.vercel.app/",
    image: "/images/datapulse.png",
  },
  {
    name: "ZipKart",
    category: "E-Commerce Marketplace Analytics",
    tech: "Next.js 16 (App Router & Server Actions), Prisma v7, Neon PostgreSQL, Auth.js v5, Recharts 3, Tailwind CSS v4, Framer Motion, Zod",
    github: "https://github.com/ZIYA8909/ZipKart/",
    deployed: "https://zip-kart-swart.vercel.app/",
    image: "/images/zipkart.png",
  },
  {
    name: "NEXUS-CRM",
    category: "Enterprise CRM Platform",
    tech: "React 18, Vite, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt.js, Recharts, Zod",
    github: "https://github.com/ZIYA8909/NEXUS-CRM",
    deployed: "https://nexus-crm-snowy-tau.vercel.app/",
    image: "/images/nexus-crm.png",
  },
  {
    name: "Crypt-Solver",
    category: "AI Crypt-Arithmetic Solver",
    tech: "JavaScript, CSS3, HTML5, AI Constraint Satisfaction (CSP), Backtracking Search Engine",
    github: "https://github.com/ZIYA8909/Crypt-Solver",
    deployed: "https://cryptsolve.vercel.app/",
    image: "/images/crypt-solver.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
                <div className="work-links">
                  <a
                    href={project.github}
                    target="_blank"
                    className="project-btn github-btn"
                    data-cursor="disable"
                  >
                    GitHub <FaGithub />
                  </a>
                  {project.deployed && (
                    <a
                      href={project.deployed}
                      target="_blank"
                      className="project-btn live-btn"
                      data-cursor="disable"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.deployed} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
