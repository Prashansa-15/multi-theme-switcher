import React from "react";

const Contact: React.FC = () => (
  <div className="pt-24 bg-[var(--bg)] text-[var(--fg)] min-h-screen px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="text-lg">
      Need help or want to contribute? Reach out at{" "}
      <a
        href="mailto:help@example.com"
        className="text-[var(--btn-bg)] hover:underline"
      >
        help@example.com
      </a>
      .
    </p>
  </div>
);

export default Contact;
