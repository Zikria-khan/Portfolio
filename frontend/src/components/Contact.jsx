import React from 'react';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <p>Feel free to reach out through email or connect on LinkedIn.</p>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
