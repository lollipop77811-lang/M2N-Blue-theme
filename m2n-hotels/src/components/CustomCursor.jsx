import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Only show custom cursor on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Detect hoverable elements
    const hoverables = document.querySelectorAll('a, button, [role="button"]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] transition-all duration-150 ease-out mix-blend-difference ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        width: isHovering ? '60px' : '20px',
        height: isHovering ? '60px' : '20px',
        marginLeft: isHovering ? '-30px' : '-10px',
        marginTop: isHovering ? '-30px' : '-10px',
      }}
    >
      <div
        className={`w-full h-full rounded-full bg-white transition-all duration-150 ${
          isHovering ? 'opacity-50' : 'opacity-100'
        }`}
      />
    </div>
  );
}
