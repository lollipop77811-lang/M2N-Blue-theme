import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="bg-background min-h-screen">
      <section className="min-h-screen flex flex-col lg:flex-row pt-20">
        {/* Left side - Contact info */}
        <div className="lg:w-1/2 bg-surface p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <p className="font-body text-xs text-white/60 tracking-[4px] uppercase mb-4">
              Digital Concierge
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-[6px] leading-[1.2]">
              Contact Us
            </h1>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="font-heading text-xs font-semibold text-white/60 tracking-[4px] uppercase mb-3">
                  Address
                </h3>
                <p className="font-heading text-2xl md:text-3xl text-white leading-[1.4]">
                  123 Luxury Avenue
                  <br />
                  Metropolis, NY 10001
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xs font-semibold text-white/60 tracking-[4px] uppercase mb-3">
                  Telephone
                </h3>
                <p className="font-heading text-2xl md:text-3xl text-white">
                  +1 (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xs font-semibold text-white/60 tracking-[4px] uppercase mb-3">
                  Email
                </h3>
                <p className="font-heading text-2xl md:text-3xl text-white">
                  concierge@m2n.com
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xs font-semibold text-white/60 tracking-[4px] uppercase mb-3">
                  Hours
                </h3>
                <p className="font-body text-white/80 leading-relaxed">
                  Concierge: 24/7
                  <br />
                  Front Desk: Always Open
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="font-heading text-xs font-semibold text-white/60 tracking-[4px] uppercase mb-4">
                Follow Us
              </h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="font-body text-sm text-white/60 hover:text-white tracking-[2px] uppercase transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="font-body text-sm text-white/60 hover:text-white tracking-[2px] uppercase transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="font-body text-sm text-white/60 hover:text-white tracking-[2px] uppercase transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Map + Form */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Map placeholder */}
          <div className="h-64 lg:h-1/3 bg-accent relative">
            <div className="absolute inset-0 bg-surface/50">
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 200">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/30 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-background px-4 py-2">
              <p className="font-body text-xs text-muted tracking-[2px] uppercase">
                View on Maps
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="flex-1 p-8 lg:p-16 flex items-center">
            <div className="w-full max-w-md">
              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="font-heading text-3xl font-bold text-primary uppercase tracking-[4px] mb-4">
                    THANK YOU
                  </h3>
                  <p className="font-body text-muted leading-relaxed">
                    Your message has been received.
                    <br />
                    We will respond within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-8 border border-primary text-primary px-8 py-3 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold text-primary uppercase tracking-[4px] mb-8">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-transparent border-b-2 py-3 text-primary font-body placeholder:text-muted focus:outline-none transition-colors ${
                          focusedField === 'name' ? 'border-primary border-2' : 'border-muted'
                        }`}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-transparent border-b-2 py-3 text-primary font-body placeholder:text-muted focus:outline-none transition-colors ${
                          focusedField === 'email' ? 'border-primary border-2' : 'border-muted'
                        }`}
                      />
                    </div>
                    <div>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-transparent border-b-2 py-3 text-primary font-body focus:outline-none transition-colors ${
                          focusedField === 'subject' ? 'border-primary border-2' : 'border-muted'
                        } ${!formData.subject ? 'text-muted' : ''}`}
                      >
                        <option value="">Subject</option>
                        <option value="reservation">Room Reservation</option>
                        <option value="dining">Dining Inquiry</option>
                        <option value="event">Event Planning</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-transparent border-b-2 py-3 text-primary font-body placeholder:text-muted focus:outline-none transition-colors resize-none ${
                          focusedField === 'message' ? 'border-primary border-2' : 'border-muted'
                        }`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-background py-4 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-surface transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
