import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Script from 'next/script';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Trung Nguyen",
    "jobTitle": "Expert Software Engineer",
    "description": "Polyglot Software Engineer with experience in frontend and backend technologies",
    "email": "nguyentrung0435@gmail.com",
    "telephone": "+84989648549",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "Vietnam"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "FPT Software Company Limited"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Zuhlke Engineering Vietnam Ltd"
    },
    "knowsAbout": [
      "Java",
      "Angular",
      "Adobe Experience Manager",
      "Spring Framework",
      "Digital Banking",
      "Microservices",
      "Software Architecture"
    ]
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-slate-100 py-12 px-4 print:py-0 print:bg-white" role="main">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] transition-shadow duration-300 ease-in-out print:shadow-none">
            <div className="p-12">
              <div className="max-w-[960px] mx-auto space-y-8">
                <Header />
                <Experience />
                <Skills />
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
