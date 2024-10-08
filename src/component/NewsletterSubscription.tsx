import React, { useState, FormEvent } from 'react';
import './NewsletterSubscription.css';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    // For now, we'll just show a success message
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="">
      <div className="">
        <h2 className="newsletter-title text-center">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
        {message && <p className="newsletter-message text-center">{message}</p>}
      </div>
    </section>
  );
};

export default NewsletterSubscription;
