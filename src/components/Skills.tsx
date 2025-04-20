import React from 'react';

export default function Skills() {
  const skillCategories = {
    'Programming Languages': [
      'Java',
      'Kotlin',
      'JavaScript/TypeScript'
    ],
    'Cloud & DevOps': [
      'AWS',
      'Docker',
      'Kubernetes',
      'CircleCI',
      'Harness',
      'Mesosphere DCOS',
      'Marathon Container Orchestration'
    ],
    'Frameworks & Libraries': [
      'Spring Boot',
      'Spring Data JPA',
      'Angular',
      'Struts',
      'myBatis'
    ],
    'Messaging & Integration': [
      'Apache Kafka',
      'RabbitMQ',
      'Twilio',
      'WSO2 API Management',
      'WSO2 Identity Server'
    ],
    'Databases & Caching': [
      'Oracle',
      'PostgreSQL',
      'Redis'
    ],
    'Application Servers': [
      'Apache Tomcat',
      'IBM WebSphere'
    ],
    'Adobe Experience Cloud': [
      'Adobe Experience Manager (AEM)',
      'Adobe Analytics (AA)'
    ],
    'Testing & Quality': [
      'Pact Contract Testing',
      'JUnit',
      'Integration Testing'
    ],
    'E-commerce & Integration': [
      'Bazaar Voice',
      'Price Spider'
    ],
    'Methodologies': [
      'Agile',
      'Microservices Architecture',
      'DevOps',
      'CI/CD'
    ]
  };

  return (
    <section className="bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-3 px-4 font-medium text-gray-800">Category</th>
              <th className="text-left py-3 px-4 font-medium text-gray-800">Skills</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <tr 
                key={category} 
                className={`border-t border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="py-4 px-4 font-medium text-gray-800 align-top whitespace-nowrap">{category}</td>
                <td className="py-4 px-4">
                  <div className="text-gray-700">
                    {skills.map((skill, skillIndex) => (
                      <React.Fragment key={skillIndex}>
                        <span className="hover:text-gray-900 transition-colors duration-200">
                          {skill}
                        </span>
                        {skillIndex < skills.length - 1 && <span className="text-gray-400">, </span>}
                      </React.Fragment>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
} 