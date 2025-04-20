import React from 'react';

export default function Header() {
  return (
    <header className="mb-8 bg-white rounded-lg p-8" itemScope itemType="http://schema.org/Person">
      <div className="flex items-start gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-light mb-2" itemProp="name">Trung Nguyen</h1>
          <h2 className="text-xl text-gray-600 mb-6" itemProp="jobTitle">Expert Software Engineer</h2>
          
          <div className="text-gray-700 max-w-2xl text-justify">
            <p itemProp="description">
              Trung Nguyen is a polyglot Software Engineer with experience in both frontend and backend technologies with Java, React, Angular, and AEM. 
              Besides his strong technical knowledge, he is a facilitator of agile principles in development teams.
            </p>
          </div>
        </div>
        
        <div className="text-right text-sm flex-shrink-0">
          <div>
            <h3 className="text-gray-900 font-medium mb-1">Contact</h3>
            <div className="space-y-1">
              <p className="text-gray-600" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span itemProp="addressLocality">Ho Chi Minh City</span>, <span itemProp="addressCountry">Vietnam</span>
              </p>
              <p className="text-gray-600">
                <a href="mailto:nguyentrung0435@gmail.com" itemProp="email" className="hover:text-gray-800 transition-colors">
                  nguyentrung0435@gmail.com
                </a>
              </p>
              <p className="text-gray-600">
                <a href="tel:+84989648549" itemProp="telephone" className="hover:text-gray-800 transition-colors">
                  +84 989 648 549
                </a>
              </p>
              <p className="text-gray-600">
                <a href="https://www.linkedin.com/in/trung-t-nguyen/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 