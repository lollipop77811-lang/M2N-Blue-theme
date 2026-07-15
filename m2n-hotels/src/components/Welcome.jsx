export default function Welcome({ onExplore }) {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-xs text-white/60 tracking-[4px] uppercase mb-6">
          Welcome to M2N
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white uppercase tracking-[6px] leading-tight">
          A Digital Front Desk for the Discerning Traveler
        </h2>
        <p className="font-body text-white/70 mt-8 text-lg leading-relaxed max-w-2xl mx-auto">
          Experience luxury reimagined through our digital concierge. From the
          moment you arrive, every detail is crafted to exceed your expectations.
        </p>
        <button
          onClick={onExplore}
          className="mt-12 border border-white text-white px-10 py-4 font-heading text-xs font-semibold tracking-[4px] uppercase hover:bg-white hover:text-primary transition-all duration-500"
        >
          Explore Our World
        </button>
      </div>
    </section>
  );
}
