import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Digital Banking Platform',
      description: 'Contributed to the development of a digital banking platform in Singapore, implementing cloud-native architecture and microservices solutions.',
      highlights: [
        'Worked on scalable microservices architecture using Kotlin/Java, Kafka, and Postgres.',
        'Participated in the Customer Service Domain development, following technical standards and best practices.',
        'Collaborated with enterprise architects on solution designs and testing frameworks.'
      ]
    },
    {
      title: 'Adobe Service Offering',
      description: 'Worked with a digital marketing agency to implement and optimize their Adobe Experience Cloud ecosystem, helping enhance their digital presence.',
      highlights: [
        'Implemented Adobe Experience Manager solutions, integrating with Analytics, Target, and Campaign platforms.',
        'Assisted in optimizing digital marketing workflows and content management processes.'
      ]
    },
    {
      title: 'Port Management System Modernization',
      description: 'Participated in modernizing legacy port management systems, contributing to improved user experience and operational efficiency.',
      highlights: [
        'Helped design and implement a modern solution architecture for port operations.',
        'Contributed to frontend development using Angular, following established best practices.',
        'Implemented WSO2 Identity Server integration for enterprise authentication.',
        'Assisted in containerized application deployment using Docker.',
        'Supported user acceptance testing and provided technical assistance.'
      ]
    },
    {
      title: 'Total Logistics Management Systems',
      description: 'Worked on enterprise-grade logistics management systems, helping integrate transportation and warehouse management solutions.',
      highlights: [
        'Maintained enterprise infrastructure on Red Hat Enterprise Linux.',
        'Contributed to system integration solutions for logistics operations.',
        'Worked with development teams, following technical standards and best practices.',
        'Developed mobile solutions for warehouse management.',
        'Implemented web-based logistics and transportation management platforms.',
        'Followed established development standards and quality assurance processes.'
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