import { useRef } from 'react';

const venues = [
  {
    id: 1,
    name: 'Grand Ballroom',
    subtitle: 'Main Event Space',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80',
    standing: '800',
    seated: '500',
    banquet: '400',
    size: '1,200 sqm',
    description:
      'Our flagship venue features soaring 8-meter ceilings, state-of-the-art audiovisual systems, and a dedicated entrance. Perfect for grand celebrations and corporate galas.',
    tags: ['Pre-function Area', 'Private Bar', 'Stage', 'Dance Floor', 'AV System'],
  },
  {
    id: 2,
    name: 'Crystal Garden',
    subtitle: 'Outdoor Venue',
    image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&q=80',
    standing: '400',
    seated: '250',
    banquet: '200',
    size: '800 sqm',
    description:
      'A stunning outdoor space surrounded by manicured gardens and illuminated by thousands of fairy lights. Ideal for weddings and al fresco celebrations.',
    tags: ['Garden Terrace', 'Tented Option', 'Lighting Rig', 'Dance Floor', 'Bar Station'],
  },
  {
    id: 3,
    name: 'Skyline Terrace',
    subtitle: 'Rooftop Venue',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80',
    standing: '200',
    seated: '120',
    banquet: '100',
    size: '400 sqm',
    description:
      'Perched on the 40th floor, this modern outdoor space offers unobstructed city views. Perfect for cocktail parties and corporate events with a view.',
    tags: ['City Views', 'Climate Control', 'Premium Bar', 'Lounge Area', 'Sound System'],
  },
  {
    id: 4,
    name: 'Executive Boardroom',
    subtitle: 'Meeting Space',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    standing: '30',
    seated: '20',
    banquet: '0',
    size: '120 sqm',
    description:
      'An intimate meeting space with cutting-edge technology and bespoke catering. Perfect for board meetings, presentations, and strategic sessions.',
    tags: ['Video Conferencing', '4K Display', 'Catering Service', 'Private Entrance', 'Reception'],
  },
  {
    id: 5,
    name: 'The Library',
    subtitle: 'Intimate Setting',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
    standing: '60',
    seated: '40',
    banquet: '30',
    size: '180 sqm',
    description:
      'A sophisticated private dining room with floor-to-ceiling bookshelves and a roaring fireplace. Ideal for exclusive dinners and intimate gatherings.',
    tags: ['Fireplace', 'Wine Cellar', 'Butler Service', 'Custom Menu', 'Private Bar'],
  },
];

export default function LawnsPage() {
  const scrollRef = useRef(null);

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs text-muted tracking-[4px] uppercase mb-4">
            Event Spaces
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary uppercase tracking-[8px]">
            Lawns &amp; Banquet
          </h1>
          <p className="font-body text-muted mt-6 max-w-xl text-lg leading-relaxed">
            From intimate gatherings to grand celebrations, discover spaces
            designed to inspire.
          </p>
        </div>
      </section>

      <section className="relative">
        <div
          ref={scrollRef}
          className="flex gap-[1px] overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="flex-shrink-0 w-[85vw] lg:w-[80vw] h-[80vh] min-h-[600px] snap-center relative group"
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-between">
                <div>
                  <p className="font-body text-xs text-white/60 tracking-[4px] uppercase mb-2">
                    {venue.subtitle}
                  </p>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-[6px]">
                    {venue.name}
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-background/95 p-6 max-w-sm ml-auto">
                    <p className="font-body text-xs text-muted tracking-[2px] uppercase mb-4">
                      Capacity
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="font-heading text-2xl text-primary">{venue.standing}</p>
                        <p className="font-body text-xs text-muted tracking-[1px] uppercase">Standing</p>
                      </div>
                      <div>
                        <p className="font-heading text-2xl text-primary">{venue.seated}</p>
                        <p className="font-body text-xs text-muted tracking-[1px] uppercase">Seated</p>
                      </div>
                      <div>
                        <p className="font-heading text-2xl text-primary">{venue.banquet}</p>
                        <p className="font-body text-xs text-muted tracking-[1px] uppercase">Banquet</p>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-xl ml-auto text-right">
                    <p className="font-body text-white/80 text-sm leading-relaxed mb-4">
                      {venue.description}
                    </p>
                    <div className="flex flex-wrap justify-end gap-2">
                      {venue.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 border border-white/30 text-white font-body text-xs tracking-[1px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <div className="w-16 h-px bg-white/40"></div>
          <span className="font-body text-xs text-white/60 tracking-[2px] uppercase">
            Scroll to Explore
          </span>
          <div className="w-16 h-px bg-white/40"></div>
        </div>
      </section>

      <section className="py-24 px-8 lg:px-16 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs text-white/60 tracking-[4px] uppercase mb-4">
              Plan Your Event
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-[6px]">
              Event Inquiry
            </h2>
            <p className="font-body text-white/70 mt-4 max-w-xl mx-auto">
              Our events team is ready to help you create an unforgettable
              experience.
            </p>
          </div>
          <div className="text-center">
            <button className="border border-white text-white px-12 py-4 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-white hover:text-primary transition-all duration-500">
              Start Your Inquiry
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
