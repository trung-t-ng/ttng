import React from 'react';

export default function Experience() {
  return (
    <section className="bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
      
      <div className="space-y-5">
        <div className="p-5 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-medium">Software Engineer</h3>
              <p className="text-gray-600 mt-1">Zuehlke Engineering Vietnam</p>
            </div>
            <span className="text-gray-500 text-sm mt-2 md:mt-0">August 2021 — Present</span>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-1.5 ml-4">
            <li>Worked on microservice-based solutions using Kotlin/Java, Kafka, and Postgres within a cloud-native container architecture.</li>
            <li>Led the Customer Service Domain development, contributing to architectural decisions and deliverables.</li>
            <li>Collaborated with Architecture teams on solution designs and testing strategies.</li>
          </ul>
        </div>

        <div className="p-5 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-medium">Software Engineer</h3>
              <p className="text-gray-600 mt-1">FPT Software</p>
            </div>
            <span className="text-gray-500 text-sm mt-2 md:mt-0">June 2015 — August 2021</span>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-1.5 ml-4">
            <li>Worked on Adobe Experience Manager & Adobe Analytics implementations as a Full Stack Engineer.</li>
            <li>Contributed to solution architecture design for port management system modernization.</li>
            <li>Participated in frontend development using Angular, working with a team of developers.</li>
            <li>Maintained web application and database infrastructure on Red Hat Enterprise Linux.</li>
            <li>Worked on system integration between logistics platforms, collaborating with cross-functional teams.</li>
            <li>Followed established development standards, including design documentation and test-driven development practices.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 