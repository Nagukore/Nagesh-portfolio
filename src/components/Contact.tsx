import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nagesh.amcec@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\n" + formData.message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="section-title">Let's Build The <span className="heading-gradient">Future</span></h2>
        <p className="section-subtitle">Got a vision? Let's turn it into reality.</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Start a Conversation</h3>
            <p className="contact-desc">
              Whether you're looking to integrate intelligent AI solutions, architect robust web applications, or build something entirely new, I'm ready to bring your ideas to life. Drop me a line!
            </p>
            
            <div className="contact-details">
              <div className="contact-item glass-effect">
                <div className="contact-icon"><Mail /></div>
                <div>
                  <h4>Email</h4>
                  <p>nagesh.amcec@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item glass-effect">
                <div className="contact-icon"><Phone /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8310643598</p>
                </div>
              </div>
              
              <div className="contact-item glass-effect">
                <div className="contact-icon"><MapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p>Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group floating-label-group">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
              <label htmlFor="name">Full Name</label>
            </div>
            
            <div className="form-group floating-label-group">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
              <label htmlFor="email">Email Address</label>
            </div>
            
            <div className="form-group floating-label-group">
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder=" " />
              <label htmlFor="subject">Subject</label>
            </div>
            
            <div className="form-group floating-label-group">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder=" "></textarea>
              <label htmlFor="message">Message</label>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
