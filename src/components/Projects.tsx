import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Digital Banking Platform',
      description: 'Led the development of a next-generation digital banking platform in Singapore, delivering innovative financial solutions through a cloud-native architecture and microservices approach.',
      highlights: [
        'Designed and implemented scalable microservices architecture using Kotlin/Java, Kafka, and Postgres.',
        'Spearheaded the Customer Service Domain, establishing technical standards and best practices.',
        'Collaborated with enterprise architects to define and implement comprehensive solution designs and testing frameworks.'
      ]
    },
    {
      title: 'Adobe Service Offering',
      description: 'Partnered with a leading digital marketing agency to implement and optimize their Adobe Experience Cloud ecosystem, enhancing their digital presence and marketing capabilities.',
      highlights: [
        'Architected and implemented Adobe Experience Manager solutions, integrating with Analytics, Target, and Campaign platforms.',
        'Optimized digital marketing workflows and content management processes.'
      ]
    },
    {
      title: 'Port Management System Modernization',
      description: 'Transformed legacy port management systems into a modern, scalable platform with enhanced user experience and operational efficiency.',
      highlights: [
        'Designed and implemented a modern solution architecture for port operations.',
        'Led frontend development using Angular, establishing best practices and development standards.',
        'Implemented custom WSO2 Identity Server integration for enterprise-grade authentication.',
        'Containerized application deployment using Docker for improved scalability and maintainability.',
        'Facilitated user acceptance testing and provided comprehensive technical support.'
      ]
    },
    {
      title: 'Total Logistics Management Systems',
      description: 'Developed and maintained enterprise-grade logistics management systems, integrating transportation and warehouse management solutions.',
      highlights: [
        'Architected and maintained enterprise infrastructure on Red Hat Enterprise Linux.',
        'Designed and implemented system integration solutions for logistics operations.',
        'Led development teams, establishing technical standards and best practices.',
        'Developed mobile solutions for warehouse management operations.',
        'Implemented web-based logistics and transportation management platforms.',
        'Established comprehensive development standards and quality assurance processes.'
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