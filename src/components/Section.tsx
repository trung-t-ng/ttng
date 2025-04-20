import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <div className="border-t border-primary-200 pt-6 mt-6">
        <h2 className="text-sm uppercase font-normal tracking-wide text-primary-800 mb-4">
          {title}
        </h2>
        <div className="text-sm text-primary-700">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section; 