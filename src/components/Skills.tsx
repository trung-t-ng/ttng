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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-3 px-4 font-medium text-primary-800">Category</th>
              <th className="text-left py-3 px-4 font-medium text-primary-800">Skills</th>
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
                <td className="py-4 px-4 font-medium text-primary-800 align-top">{category}</td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap">
                    {skills.map((skill, skillIndex) => (
                      <React.Fragment key={skillIndex}>
                        <span className="text-gray-700 hover:text-primary-800 transition-colors duration-200">
                          {skill}
                        </span>
                        {skillIndex < skills.length - 1 && <span className="text-gray-400">,&nbsp;</span>}
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