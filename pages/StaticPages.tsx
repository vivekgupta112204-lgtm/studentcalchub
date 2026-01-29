import React from 'react';

const PageContainer: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-teal-800 mb-6">{title}</h1>
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
      {children}
    </div>
  </div>
);

export const About: React.FC = () => (
  <PageContainer title="About Us">
    <p>Welcome to <strong>Student Calculator Hub</strong>.</p>
    <p>Our mission is simple: to provide fast, reliable, and completely free calculation tools for students, teachers, and parents.</p>
    <p>We understand that academic calculations—whether it's converting CGPA, finding percentages, or estimating grades—can be tedious. Our tools are designed to be mobile-first, ensuring you can access them on your phone right inside the classroom or at home.</p>
    <h3>Why Choose Us?</h3>
    <ul>
        <li>No Login Required</li>
        <li>Privacy Focused</li>
        <li>Fast & Lightweight</li>
    </ul>
  </PageContainer>
);

export const Privacy: React.FC = () => (
  <PageContainer title="Privacy Policy">
    <p><strong>Effective Date:</strong> October 2023</p>
    <p>At Student Calculator Hub, we prioritize your privacy.</p>
    <h3>Data Collection</h3>
    <p>We do not collect any personal data. All calculations are performed locally on your browser using JavaScript. No marks, grades, or numbers you enter are sent to any server.</p>
    <h3>Cookies & Ads</h3>
    <p>We may use third-party advertising partners (like Google AdSense) who may use cookies to serve ads based on your prior visits to our website or other websites.</p>
    <p>You can opt-out of personalized advertising by visiting Ad Settings.</p>
  </PageContainer>
);

export const Contact: React.FC = () => (
  <PageContainer title="Contact Us">
    <p>Have a suggestion, found a bug, or just want to say hello?</p>
    <p>We'd love to hear from you. Please reach out to us at:</p>
    <div className="bg-slate-50 p-4 rounded-lg font-mono text-teal-700 mt-4">
        support@studentcalculatorhub.com
    </div>
    <p className="mt-4">We aim to respond to all inquiries within 48 hours.</p>
  </PageContainer>
);