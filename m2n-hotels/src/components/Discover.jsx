const experiences = [
  {
    title: 'Executive Suite',
    subtitle: 'Panoramic Views',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    link: '/rooms',
    height: 'h-[500px]',
    rowSpan: 'md:row-span-2',
  },
  {
    title: 'Fine Dining',
    subtitle: 'Culinary Excellence',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    link: '/dining',
    height: 'h-[350px]',
    rowSpan: '',
  },
  {
    title: 'Grand Lawn',
    subtitle: 'Event Space',
    image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80',
    link: '/lawns',
    height: 'h-[350px]',
    rowSpan: '',
  },
  {
    title: 'Rooftop Pool',
    subtitle: 'Relaxation',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    link: '/rooms',
    height: 'h-[300px]',
    rowSpan: '',
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'Concierge',
    subtitle: '24/7 Service',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    link: '/contact',
    height: 'h-[350px]',
    rowSpan: '',
  },
];

export default function Discover() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-accent pb-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase tracking-[8px]">
            Discover
          </h2>
          <p className="font-body text-muted mt-4 text-sm tracking-[2px] uppercase">
            Curated Experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-accent">
          {experiences.map((exp, index) => (
            <a
              key={index}
              className={`group relative overflow-hidden bg-background ${exp.rowSpan} ${exp.colSpan || ''}`}
              href={exp.link}
            >
              <div className={`relative ${exp.height} overflow-hidden`}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-body text-xs text-white/80 tracking-[2px] uppercase mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {exp.subtitle}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase tracking-[4px] mix-blend-difference">
                    {exp.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
