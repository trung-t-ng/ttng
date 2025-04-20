import React from 'react';

export default function Experience() {
  return (
    <section className="bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
      
      <div className="space-y-5">
        <div className="p-5 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-medium">Expert Software Engineer</h3>
              <p className="text-gray-600 mt-1">Zuhlke Engineering Vietnam Ltd</p>
            </div>
            <span className="text-gray-500 text-sm mt-2 md:mt-0">January 2023 — Present</span>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-1.5 ml-4">
            <li>Building microservice-based solutions using Kotlin/Java, Kafka, and Postgres in a container-focused cloud architecture.</li>
            <li>Being the technical lead of Customer Service Domain in the banking platform.</li>
            <li>Working with the Architect teams to discuss solution designs and testing deliverables.</li>
          </ul>
        </div>

        <div className="p-5 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-medium">Advanced Software Engineer</h3>
              <p className="text-gray-600 mt-1">Zuhlke Engineering Vietnam Ltd</p>
            </div>
            <span className="text-gray-500 text-sm mt-2 md:mt-0">August 2021 — December 2022</span>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-1.5 ml-4">
            <li>Work as an Adobe Experience Manager & Adobe Analytics Full Stack Engineer.</li>
            <li>Collaborate with a full-service digital marketing agency using Adobe solution suite.</li>
          </ul>
        </div>

        <div className="p-5 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-medium">Senior Software Engineer</h3>
              <p className="text-gray-600 mt-1">FPT Software Company Limited</p>
            </div>
            <span className="text-gray-500 text-sm mt-2 md:mt-0">June 2015 — August 2021</span>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-1.5 ml-4">
            <li>Contribute to Solution Architecture Design for port management system modernization.</li>
            <li>Develop frontend framework using Angular, leading a frontend development team.</li>
            <li>Configuration Controller, managing web application and database servers on Red Hat Enterprise Linux.</li>
            <li>System integrator between logistics systems, leading development teams.</li>
            <li>Create detailed design, coding, and unit test cases.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 