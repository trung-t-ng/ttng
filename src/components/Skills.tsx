import React from 'react';

export default function Skills() {
  const skillCategories = {
    'Programming Languages': ['Java'],
    'Industry Sector Knowledge': ['Logistics', 'Banking'],
    'Web Technologies': ['Angular', 'HTML', 'JavaScript', 'CSS'],
    'Frameworks/Platforms': [
      'Adobe Experience Manager',
      'Adobe Analytics',
      'Spring',
      'Struts',
      'myBatis',
      'Spring Data JPA',
      'ASP .NET',
      'WPF',
      'Entity Framework',
      'Junit',
      'RabbitMQ',
      'Docker'
    ]
  };

  return (
    <section className="bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="p-5 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-3">{category}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4">
              {skills.map((skill, index) => (
                <div key={index} className="text-gray-600">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 