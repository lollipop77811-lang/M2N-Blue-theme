import { useState } from 'react';
import { Link } from 'react-router-dom';

const filters = ['All', 'Suites', 'Deluxe', 'Standard'];

const rooms = [
  {
    id: 1,
    name: 'Executive Slate Suite',
    type: 'Suite',
    size: '85 sqm',
    floor: '35-40',
    view: 'City Panoramic',
    bed: 'King',
    capacity: '2 Guests',
    price: '1,200',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    amenities: ['Marble Bathroom', 'Mini Bar', 'Workspace', 'Smart TV', 'Nespresso Machine', 'Walk-in Closet'],
    description: 'Experience unparalleled luxury in our Executive Slate Suite, featuring floor-to-ceiling windows with breathtaking city views.',
  },
  {
    id: 2,
    name: 'Grand Terrace Room',
    type: 'Deluxe',
    size: '65 sqm',
    floor: '28-34',
    view: 'Garden Terrace',
    bed: 'King',
    capacity: '2 Guests',
    price: '850',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    amenities: ['Private Terrace', 'Rain Shower', 'Mini Bar', 'Smart TV', 'Work Desk'],
    description: 'A sophisticated retreat featuring a private terrace overlooking our manicured gardens.',
  },
  {
    id: 3,
    name: 'Classic Comfort Room',
    type: 'Standard',
    size: '45 sqm',
    floor: '15-27',
    view: 'City',
    bed: 'Queen',
    capacity: '2 Guests',
    price: '550',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    amenities: ['Rain Shower', 'Smart TV', 'Work Desk', 'Safe'],
    description: 'Elegant simplicity meets modern comfort in our Classic Comfort rooms.',
  },
  {
    id: 4,
    name: 'Presidential Suite',
    type: 'Suite',
    size: '150 sqm',
    floor: '45',
    view: '360° City View',
    bed: 'King',
    capacity: '4 Guests',
    price: '3,500',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    amenities: ['Private Pool', 'Butler Service', 'Dining Room', 'Home Theater', 'Spa Bathroom', 'Wine Cellar'],
    description: 'The pinnacle of luxury accommodation, featuring private dining, butler service, and panoramic views.',
  },
  {
    id: 5,
    name: 'Ocean View Deluxe',
    type: 'Deluxe',
    size: '55 sqm',
    floor: '20-30',
    view: 'Ocean',
    bed: 'Twin / King',
    capacity: '2 Guests',
    price: '750',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    amenities: ['Ocean View', 'Balcony', 'Rain Shower', 'Mini Bar', 'Smart TV'],
    description: 'Wake up to stunning ocean views in this beautifully appointed deluxe room.',
  },
];

export default function RoomsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedRoom, setSelectedRoom] = useState(null);

  const filteredRooms =
    activeFilter === 'All'
      ? rooms
      : rooms.filter((r) => r.type === activeFilter);

  const getCount = (key) =>
    key === 'All' ? rooms.length : rooms.filter((r) => r.type === key).length;

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs text-muted tracking-[4px] uppercase mb-4">
            Accommodation
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary uppercase tracking-[8px]">
            Rooms &amp; Suites
          </h1>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row min-h-screen">
        <aside className="lg:w-[30%] lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] border-b lg:border-b-0 lg:border-r border-accent p-8 lg:overflow-y-auto">
          <div className="lg:pt-8">
            <h2 className="font-heading text-xs font-semibold tracking-[4px] text-primary uppercase mb-6">
              Filter By Type
            </h2>
            <nav className="space-y-4">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`block w-full text-left font-body text-sm tracking-[2px] uppercase transition-colors duration-300 ${
                    activeFilter === f
                      ? 'text-primary font-semibold'
                      : 'text-muted hover:text-primary'
                  }`}
                >
                  {f}
                  <span className="ml-2 text-xs text-muted">({getCount(f)})</span>
                </button>
              ))}
            </nav>

            <div className="mt-12 pt-8 border-t border-accent">
              <h3 className="font-heading text-xs font-semibold tracking-[4px] text-primary uppercase mb-4">
                Need Assistance?
              </h3>
              <p className="font-body text-muted text-sm leading-relaxed mb-4">
                Our concierge team is available 24/7 to help you find the perfect
                accommodation.
              </p>
              <Link
                to="/contact"
                className="block text-center w-full bg-primary text-background py-3 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-surface transition-colors duration-300"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </aside>

        <div className="lg:w-[70%] p-8 space-y-[1px] bg-accent">
          {filteredRooms.map((room) => {
            const isExpanded = selectedRoom === room.id;
            return (
              <div
                key={room.id}
                className="bg-background transition-all duration-500 cursor-crosshair"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 h-64 lg:h-full relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-105 hover:brightness-75"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1">
                      <span className="font-body text-xs text-white tracking-[2px] uppercase">
                        {room.type}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary uppercase tracking-[4px] mb-4">
                        {room.name}
                      </h3>
                      <p className="font-body text-muted text-sm leading-relaxed mb-6">
                        {room.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 py-4 border-y border-accent">
                        <div>
                          <p className="font-body text-xs text-muted tracking-[2px] uppercase">Size</p>
                          <p className="font-heading text-lg text-primary mt-1">{room.size}</p>
                        </div>
                        <div>
                          <p className="font-body text-xs text-muted tracking-[2px] uppercase">Floor</p>
                          <p className="font-heading text-lg text-primary mt-1">{room.floor}</p>
                        </div>
                        <div>
                          <p className="font-body text-xs text-muted tracking-[2px] uppercase">Bed</p>
                          <p className="font-heading text-lg text-primary mt-1">{room.bed}</p>
                        </div>
                        <div>
                          <p className="font-body text-xs text-muted tracking-[2px] uppercase">View</p>
                          <p className="font-heading text-lg text-primary mt-1">{room.view}</p>
                        </div>
                        <div>
                          <p className="font-body text-xs text-muted tracking-[2px] uppercase">Capacity</p>
                          <p className="font-heading text-lg text-primary mt-1">{room.capacity}</p>
                        </div>
                        <div>
                          <p className="font-body text-xs text-muted tracking-[2px] uppercase">Price/Night</p>
                          <p className="font-heading text-lg text-primary mt-1">${room.price}</p>
                        </div>
                      </div>

                      {/* Expanded amenities section */}
                      {isExpanded && (
                        <div className="mt-6">
                          <p className="font-heading text-xs font-semibold text-muted tracking-[2px] uppercase mb-3">
                            Amenities
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.map((a) => (
                              <span
                                key={a}
                                className="px-3 py-1 border border-accent font-body text-xs text-muted tracking-[1px]"
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                          <div className="mt-6 bg-surface p-6">
                            <p className="font-body text-xs text-white/60 tracking-[2px] uppercase mb-2">
                              Floor Plan
                            </p>
                            <div className="aspect-video bg-white/10 flex items-center justify-center">
                              <span className="font-body text-xs text-white/40 tracking-[2px] uppercase">
                                Interactive Floor Plan
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <button className="bg-primary text-background px-8 py-4 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-surface transition-colors duration-300 flex items-center gap-3">
                        Book Now <span className="text-lg">→</span>
                      </button>
                      <button
                        onClick={() => setSelectedRoom(isExpanded ? null : room.id)}
                        className="font-body text-xs text-muted tracking-[2px] uppercase hover:text-primary transition-colors"
                      >
                        {isExpanded ? 'Show Less' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
