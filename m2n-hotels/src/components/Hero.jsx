export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
        alt="M2N Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-16 left-8 md:left-16">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-[8px] mix-blend-difference">
          M2N Hotels
        </h1>
        <p className="font-body text-white/80 mt-4 text-lg md:text-xl tracking-[4px] uppercase">
          Luxury Redefined
        </p>
      </div>
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2">
        <span className="font-body text-xs text-white/60 tracking-[2px] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/40"></div>
      </div>
    </section>
  );
}
