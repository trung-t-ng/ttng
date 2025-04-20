import React from 'react';

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-light text-orange-400 mb-6">Education</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-gray-800 font-medium">University of Alabama at Tuscaloosa, AL</h3>
          <div className="flex justify-between items-start">
            <p className="text-gray-700">Master of Education – Curriculum and Instruction</p>
            <span className="text-gray-600 text-sm">August 2015 — June 2017</span>
          </div>
        </div>

        <div>
          <h3 className="text-gray-800 font-medium">University of Alabama at Tuscaloosa, AL</h3>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-700">Bachelor of Science – Mathematics</p>
              <p className="text-gray-600 italic">Cum Laude</p>
            </div>
            <span className="text-gray-600 text-sm">August 2010 — June 2014</span>
          </div>
        </div>
      </div>
    </section>
  );
} 