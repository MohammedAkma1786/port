import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { title } = useParams<{ title: string }>();
  const project = projects.find((p) => p.title === title);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  if (!project) {
    return <div className="text-center text-red-500 text-xl mt-10">Project not found</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Project Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{project.title}</h1>

      {/* Project Main Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-lg h-auto mx-auto rounded-lg shadow-lg mb-8 cursor-pointer"
        onClick={() => openModal(project.image)} // Allow the main image to expand
      />

      {/* Section: Finance Architecture and Deployment */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Finance Architecture and Deployment
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img
            src="/uploads/finance-architecture.png"
            alt="Finance Architecture"
            className="w-2/3 h-auto rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal("/uploads/finance-architecture.png")}
          />
          <img
            src="/uploads/ecs-ss.png"
            alt="ECS Screenshot"
            className="w-2/3 h-auto rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal("/uploads/ecs-ss.png")}
          />
          <img
            src="/uploads/github-actions-screenshot.png"
            alt="GitHub Actions Screenshot"
            className="w-2/3 h-auto rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal("/uploads/github-actions-screenshot.png")}
          />
        </div>
      </div>

      {/* Modal for Image Expansion */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage!}
            alt="Expanded View"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Project Description */}
      <div className="mt-12">
        <p className="text-lg leading-relaxed text-gray-600">
          This application, <strong>Finance Wisdom Garden</strong>, is a modern personal finance
          management tool designed with React and TypeScript. It offers users a comprehensive
          dashboard that tracks key financial metrics such as income, expenses, and savings, helping
          individuals manage their transactions effectively. Users can add, edit, delete, and reorder
          financial transactions seamlessly, with support for categorizing each entry.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          The app includes features like an expense planner that allows for monthly budgeting and
          recurring expenses, as well as a subscription tracker to monitor ongoing payments. The
          interface is responsive and styled with Tailwind CSS, providing a clean and user-friendly
          experience, and leverages the shadcn UI library for consistent components.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          The backend integration is handled through Firebase, which manages user authentication and
          data storage securely. Deployment and infrastructure use best practices by employing Docker
          for containerization and automating build, test, and deployment workflows with GitHub
          Actions. The application is hosted on AWS ECS with Fargate, managed through Terraform
          scripts that provision resources like ECR repositories, ECS clusters, and an application
          load balancer for scalable and reliable access. Monitoring is enabled via AWS CloudWatch,
          tracking service health and enabling alerts to ensure smooth operation.
        </p>
      </div>

      {/* Links Section */}
      <div className="mt-12 text-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          View on GitHub
        </a>
        <a
          href="http://finance-wisdom-garden-service-lb-407927024.eu-west-2.elb.amazonaws.com/" // Updated link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition ml-4"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;