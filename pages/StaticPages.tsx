import React from 'react';
import { SEO } from '../components/SEO';

const PageContainer: React.FC<{title: string; desc: string; children: React.ReactNode}> = ({ title, desc, children }) => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <SEO title={title} description={desc} />
    <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-8 pb-4 border-b border-slate-200">{title}</h1>
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-slate-100 prose prose-slate prose-lg max-w-none text-slate-600">
      {children}
    </div>
  </div>
);

export const About: React.FC = () => (
  <PageContainer 
    title="About Us" 
    desc="Learn about Student Calculator Hub - our mission to provide free educational tools."
  >
    <p className="lead text-xl text-slate-700">
      Welcome to <strong>Student Calculator Hub</strong>, your trusted digital companion for academic calculations.
    </p>
    <p>
      In the fast-paced world of education, students often juggle multiple responsibilities. Calculating complex grades, 
      converting CGPA, or figuring out passing requirements shouldn't add to the stress. That's where we come in.
    </p>
    
    <h3 className="text-teal-800 mt-8">Our Mission</h3>
    <p>
      Our mission is simple: to democratize access to accurate, fast, and user-friendly educational tools. 
      We believe that every student, regardless of their technical expertise, deserves a seamless way to track 
      their academic progress.
    </p>

    <h3 className="text-teal-800 mt-8">Why Choose Student Calculator Hub?</h3>
    <ul className="space-y-2">
        <li><strong>Zero Cost:</strong> All our tools are 100% free forever.</li>
        <li><strong>Privacy First:</strong> We do not require sign-ups, and we do not store your marks.</li>
        <li><strong>Mobile First:</strong> Designed to work perfectly on your smartphone, tablet, or laptop.</li>
        <li><strong>Speed:</strong> Our lightweight design ensures pages load instantly, even on slow connections.</li>
    </ul>
  </PageContainer>
);

export const Privacy: React.FC = () => (
  <PageContainer 
    title="Privacy Policy" 
    desc="Privacy Policy for Student Calculator Hub - We value your data privacy."
  >
    <p><strong>Last Updated:</strong> October 2023</p>
    <p>
      At Student Calculator Hub, accessible from our website, one of our main priorities is the privacy of our visitors. 
      This Privacy Policy document contains types of information that is collected and recorded by Student Calculator Hub 
      and how we use it.
    </p>

    <h3 className="text-teal-800 mt-8">Data Collection</h3>
    <p>
      <strong>We do not collect personal data.</strong> All calculations performed on this website (such as entering marks, 
      CGPA, etc.) are processed locally on your device using JavaScript. Your grades and academic data are never sent to 
      our servers.
    </p>

    <h3 className="text-teal-800 mt-8">Cookies and Web Beacons</h3>
    <p>
      Like any other website, Student Calculator Hub uses "cookies". These cookies are used to store information including 
      visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used 
      to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
    </p>

    <h3 className="text-teal-800 mt-8">Google DoubleClick DART Cookie</h3>
    <p>
      Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our 
      site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to 
      decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
    </p>
  </PageContainer>
);

export const Contact: React.FC = () => (
  <PageContainer 
    title="Contact Us" 
    desc="Get in touch with the Student Calculator Hub team for support or feedback."
  >
    <p className="text-lg">
      We love hearing from our users! Whether you have a suggestion for a new calculator, found a bug, or just want to say hello, we are here to listen.
    </p>

    <h3 className="text-teal-800 mt-8">Email Support</h3>
    <p>For all inquiries, please email us at:</p>
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg inline-block mt-2">
        <a href="mailto:support@studentcalculatorhub.com" className="text-teal-600 font-bold hover:underline font-mono">support@studentcalculatorhub.com</a>
    </div>

    <h3 className="text-teal-800 mt-8">Response Time</h3>
    <p>
      We are a small team dedicated to maintaining this free resource. We aim to respond to all legitimate inquiries within 
      <strong> 48 hours</strong>.
    </p>
  </PageContainer>
);