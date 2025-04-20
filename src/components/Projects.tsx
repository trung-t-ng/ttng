import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Digital Banking Platform',
      description: 'The first of a new breed of banks in Singapore – digitally native and focused on delivering a delightful customer experience. Working in a fast-paced and collaborative environment to solve new and interesting challenges each day.',
      highlights: [
        'Building microservice-based solutions using Kotlin/Java, Kafka, and Postgres in a container-focused cloud architecture.',
        'Being the technical lead of Customer Service Domain in the banking platform.',
        'Working with the Architect teams to discuss solution designs and testing deliverables.'
      ]
    },
    {
      title: 'Adobe Service Offering',
      description: 'Collaborate with a full-service digital marketing agency. Our client uses Adobe solution suite including AEM, Target, Analytics, Launch, and Campaign.',
      highlights: [
        'Work as an Adobe Experience Manager & Adobe Analytics Full Stack Engineer.'
      ]
    },
    {
      title: 'Port Management System Modernization',
      description: 'Modernize and upgrade the existing system to enable a more agile, robust, and future-ready system with enhanced UI and UX to improve productivity and user-friendliness.',
      highlights: [
        'Contribute to Solution Architecture Design.',
        'Develop frontend framework by Angular, leading a frontend development team and work as a Java backend developer.',
        'Develop custom WSO2 IS user store to support single sign-on.',
        'Dockerize application.',
        "Support customer's technical user to UAT new system."
      ]
    },
    {
      title: 'Total Logistics Management Systems',
      description: 'Develop and maintain Logistics Management systems, Transportation Management systems, and Warehouse Management systems.',
      highlights: [
        'Configuration Controller, set up and manage web application server and database server on Red Hat Enterprise Linux.',
        'System integrator between logistics system.',
        'Leading a development team, focused on the understanding of the project architecture, general team issues, and technical matters.',
        'Develop application for a handy device which working in Warehouse Management system.',
        'Develop a web application to manage the logistics system and the transportation system.',
        'Create detailed design, coding, unit test cases.'
      ]
    }
  ];

  return (
    <section className="bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div key={index} className="p-5 bg-gray-50 rounded-lg space-y-3">
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="text-gray-600 text-justify">{project.description}</p>
            <ul className="list-disc list-outside text-gray-600 space-y-1.5 ml-4">
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 