import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
    // You can find this in the EmailJS Account -> API Keys section
    const publicKey = 'QwP3R6914-GA2fwEB';

    try {
      // 1. Send notification to YOU (Owner)
      await emailjs.send(
        'service_8kfdoao',
        'template_a93cw9t',
        {
          from_name: formData.name,
          to_name: 'Nagesh',
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      // 2. Send Auto-Reply to the USER
      await emailjs.send(
        'service_8kfdoao',
        'template_hzcfr94',
        {
          to_name: formData.name,
          send_to: formData.email,
          user_email: formData.email,
          email: formData.email,
          reply_to: 'nagesh.amcec@gmail.com', // So they can reply back to you
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            
            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
            </button>
            
            {submitStatus === 'success' && (
              <p className="form-success-msg" style={{ color: '#4ade80', marginTop: '1rem', textAlign: 'center' }}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="form-error-msg" style={{ color: '#f87171', marginTop: '1rem', textAlign: 'center' }}>
                Failed to send message. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
