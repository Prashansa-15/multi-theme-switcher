
import React from "react";

const About: React.FC = () => (
  <div className="pt-24 bg-[var(--bg)] text-[var(--fg)] min-h-screen px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-4">About This App</h2>
    <p className="text-lg mb-4">
      This React application is designed to be **simple, friendly and educational**.
      It includes:
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>Theme switching using React Context API and `localStorage`</li>
      <li>Responsive layout using Tailwind CSS utility classes</li>
      <li>Sample product grid fetched from <code>fakestoreapi.com</code></li>
      <li>Multi-page navigation with React Router</li>
    </ul>
  </div>
);

export default About;
