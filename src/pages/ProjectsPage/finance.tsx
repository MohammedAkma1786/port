import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate(); // Initialize useNavigate
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
    <div className="relative">
      {/* Back Arrow */}
      <button
        onClick={() => navigate("/")} // Navigate to the Hero component (main page)
        className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
        title="Go Back"
      >
        ← Back
      </button>

      {/* Animated Background */}
      <div className="absolute inset-0 animate-color-change blur-2xl -z-10"></div>

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto bg-[#0F0F0F]/60 text-white relative z-10 backdrop-blur-md rounded-lg shadow-lg">
        {/* Project Title */}
        <h1 className="text-5xl font-extrabold text-center text-primary mb-8">{project.title}</h1>

        {/* Project Main Image */}
        <div className="flex justify-center mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(project.image)} // Allow the main image to expand
          />
        </div>

        {/* Section: Finance Architecture and Deployment */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-300 mb-8 text-center">
            Finance Architecture and Deployment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Top Row: Two Images */}
            <img
              src="/uploads/github-actions-screenshot.png"
              alt="GitHub Actions Screenshot"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal("/uploads/github-actions-screenshot.png")}
            />
            <img
              src="/uploads/ecs-ss.png"
              alt="ECS Screenshot"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal("/uploads/ecs-ss.png")}
            />
            {/* Bottom Row: One Image */}
            <img
              src="/uploads/finance-architecture.png"
              alt="Finance Architecture"
              className="w-full h-auto rounded-lg shadow-md cursor-pointer md:col-span-2"
              onClick={() => openModal("/uploads/finance-architecture.png")}
            />
          </div>
        </div>

        {/* Modal for Image Expansion */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <img
              src={modalImage!}
              alt="Expanded View"
              className="w-[100vw] h-[90vh] object-contain cursor-pointer"
              onClick={closeModal} 
            />
          </div>
        )}

        {/* Project Description */}
        <div className="mt-16">
          <p className="text-lg leading-relaxed text-gray-400">
            This application, <strong className="text-primary">Finance Wisdom Garden</strong>, is a
            modern personal finance management tool designed with React and TypeScript. It offers users
            a comprehensive dashboard that tracks key financial metrics such as income, expenses, and
            savings, helping individuals manage their transactions effectively. Users can add, edit,
            delete, and reorder financial transactions seamlessly, with support for categorizing each
            entry.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            The app includes features like an expense planner that allows for monthly budgeting and
            recurring expenses, as well as a subscription tracker to monitor ongoing payments. The
            interface is responsive and styled with Tailwind CSS, providing a clean and user-friendly
            experience, and leverages the shadcn UI library for consistent components.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
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
        <div className="mt-16 text-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View on GitHub
          </a>
          <a
            href="http://finance-wisdom-garden-service-lb-407927024.eu-west-2.elb.amazonaws.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-green-700 transition ml-4"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;