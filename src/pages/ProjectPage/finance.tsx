import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { title } = useParams<{ title: string }>();
  const project = projects.find((p) => p.title === title);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      
      {/* Add the finance-architecture image */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Finance Architecture</h2>
        <img
          src="/uploads/finance-architecture.png" // Update the path to your image
          alt="Finance Architecture"
          className="w-2/4 h-auto mt-4 mx-auto"
        />
      </div>
      <p className="mt-4">This application, Finance Wisdom Garden, is a modern personal finance management tool designed with React and TypeScript. It offers users a comprehensive dashboard that tracks key financial metrics such as income, expenses, and savings, helping individuals manage their transactions effectively. Users can add, edit, delete, and reorder financial transactions seamlessly, with support for categorizing each entry. The app includes features like an expense planner that allows for monthly budgeting and recurring expenses, as well as a subscription tracker to monitor ongoing payments. The interface is responsive and styled with Tailwind CSS, providing a clean and user-friendly experience, and leverages the shadcn UI library for consistent components.
        The backend integration is handled through Firebase, which manages user authentication and data storage securely. Deployment and infrastructure use best practices by employing Docker for containerization and automating build, test, and deployment workflows with GitHub Actions. The application is hosted on AWS ECS with Fargate, managed through Terraform scripts that provision resources like ECR repositories, ECS clusters, and an application load balancer for scalable and reliable access. Monitoring is enabled via AWS CloudWatch, tracking service health and enabling alerts to ensure smooth operation. Overall, Finance Wisdom Garden combines modern frontend development, robust cloud infrastructure, and automation to deliver a reliable personal finance management experience. </p>

      <img src={project.image} alt={project.title} className="w-1/2 h-auto mt-4 mx-auto" />
      <p className="mt-4 text-gray-600">
        This project showcases the implementation of a {project.title.toLowerCase()} application. 
        Explore the code on <a href={project.github} className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a> 
        or view the live demo <a href={project.live} className="text-blue-500" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <p className="mt-4 text-gray-600">
        Feel free to reach out if you have any questions or feedback about this project!
      </p>
    </div>
  );
};

export default ProjectDetails;