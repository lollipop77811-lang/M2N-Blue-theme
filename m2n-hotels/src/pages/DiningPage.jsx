import { useState, useEffect, useRef } from 'react';

const venues = [
  {
    id: 1,
    name: 'Ember',
    subtitle: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    description:
      'An intimate culinary journey featuring locally-sourced ingredients transformed into extraordinary dishes. Our Michelin-starred chef presents seasonal tasting menus that celebrate the essence of contemporary gastronomy.',
    hours: ['Mon-Sat: 18:00 - 23:00', 'Sunday: Closed'],
    dressCode: 'Smart Elegant',
    reservation: true,
    reversed: false,
  },
  {
    id: 2,
    name: 'The Terrace',
    subtitle: 'Casual Dining',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    description:
      'Elevated comfort food in a relaxed atmosphere. Floor-to-ceiling windows frame stunning sunset views while you enjoy our signature cocktails and contemporary bistro fare.',
    hours: ['Daily: 11:00 - 22:00'],
    dressCode: 'Smart Casual',
    reservation: true,
    reversed: true,
  },
  {
    id: 3,
    name: 'Sky Bar',
    subtitle: 'Rooftop Lounge',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80',
    description:
      'Perched on the 45th floor, our rooftop bar offers an unparalleled selection of craft cocktails, fine wines, and champagnes alongside light bites and panoramic city views.',
    hours: ['Tue-Sat: 17:00 - 02:00', 'Sun-Mon: Closed'],
    dressCode: 'Smart Elegant',
    reservation: false,
    reversed: false,
  },
  {
    id: 4,
    name: 'Garden Café',
    subtitle: 'All-Day Dining',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
    description:
      'A tranquil oasis serving artisanal coffee, freshly baked pastries, and wholesome breakfast options in our private garden courtyard.',
    hours: ['Daily: 07:00 - 20:00'],
    dressCode: 'Casual',
    reservation: false,
    reversed: true,
  },
];

const timeSlots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

export default function DiningPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Parallax refs
  const parallaxRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((el) => {
        if (el) {
          const scrollY = window.scrollY;
          const parallaxFactor = 0.8;
          el.style.transform = `translateY(${scrollY * parallaxFactor * 0.1}px)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: '',
      });
    }, 2000);
  };

  const openReservation = (venueName) => {
    setSelectedVenue(venueName);
    setShowModal(true);
  };

  return (
    <main className="bg-primary min-h-screen text-background">
      <section className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs text-white/60 tracking-[4px] uppercase mb-4">
            Culinary Excellence
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-[8px]">
            Dining
          </h1>
          <p className="font-body text-white/70 mt-6 max-w-xl text-lg leading-relaxed">
            Four distinct venues, one uncompromising commitment to exceptional
            cuisine and memorable experiences.
          </p>
        </div>
      </section>

      {venues.map((venue, index) => (
        <section
          key={venue.id}
          className={`relative min-h-[600px] flex items-center ${
            venue.reversed ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              ref={(el) => (parallaxRefs.current[index] = el)}
              src={venue.image}
              alt={venue.name}
              className="w-full h-[120%] object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
          </div>
          <div
            className={`relative z-10 w-full lg:w-1/2 p-8 lg:p-16 ${
              venue.reversed ? 'lg:ml-auto' : ''
            }`}
          >
            <p className="font-body text-xs text-white/60 tracking-[4px] uppercase mb-4">
              {venue.subtitle}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-[6px] mb-6">
              {venue.name}
            </h2>
            <p className="font-body text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              {venue.description}
            </p>
            <div className="mb-8">
              <h3 className="font-heading text-xs font-semibold text-white/60 tracking-[4px] uppercase mb-3">
                Hours
              </h3>
              <div className="space-y-1">
                {venue.hours.map((h, i) => (
                  <p key={i} className="font-body text-white/80 text-sm tracking-wider">
                    {h}
                  </p>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-heading text-xs font-semibold text-white/60 tracking-[4px] uppercase mb-2">
                Dress Code
              </h3>
              <p className="font-body text-white/80 text-sm tracking-[2px] uppercase">
                {venue.dressCode}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {venue.reservation && (
                <button
                  onClick={() => openReservation(venue.name)}
                  className="border border-background text-background px-8 py-4 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-background hover:text-primary transition-all duration-500"
                >
                  Make Reservation
                </button>
              )}
              <button className="font-body text-sm text-white/60 tracking-[2px] uppercase hover:text-white transition-colors border-b border-white/30 pb-1">
                View Menu
              </button>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 px-8 lg:px-16 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs text-white/60 tracking-[4px] uppercase mb-6">
            Exclusive Experiences
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-[6px] mb-8">
            Private Dining
          </h2>
          <p className="font-body text-white/70 text-lg leading-relaxed">
            Host an intimate gathering or corporate event in our private dining
            rooms. Our culinary team will create a bespoke menu tailored to your
            preferences.
          </p>
          <button className="mt-10 border border-white text-white px-10 py-4 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-white hover:text-primary transition-all duration-500">
            Enquire Now
          </button>
        </div>
      </section>

      {/* Reservation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface w-full max-w-lg p-8 md:p-12">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="font-body text-xs text-white/60 tracking-[4px] uppercase mb-2">
                  Reservation
                </p>
                <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-[4px]">
                  {selectedVenue}
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-white/60 hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <h4 className="font-heading text-2xl font-bold text-white uppercase tracking-[4px]">
                  RECEIVED.
                </h4>
                <p className="font-body text-white/60 mt-4">
                  Our concierge will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-muted py-3 text-white font-body placeholder:text-white/40 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-muted py-3 text-white font-body placeholder:text-white/40 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-muted py-3 text-white font-body placeholder:text-white/40 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-transparent border-b border-muted py-3 text-white font-body focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-transparent border-b border-muted py-3 text-white font-body focus:border-white focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-surface">Time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t} className="bg-surface">{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-transparent border-b border-muted py-3 text-white font-body focus:border-white focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n} className="bg-surface">
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Special Requests"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-transparent border-b border-muted py-3 text-white font-body placeholder:text-white/40 focus:border-white focus:outline-none transition-colors resize-none"
                    rows="3"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-background text-primary py-4 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-white transition-colors duration-300"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
