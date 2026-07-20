import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'Freelancer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => typed.destroy();
  }, []);

  const handleMouseMove = (e) => {
    const el = contentRef.current;
    if (!el) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 16;
    const y = (e.clientY / innerHeight - 0.5) * 16;
    el.style.transform = `translate(${x}px, ${y}px)`;

    const section = e.currentTarget;
    section.style.setProperty('--spot-x', `${e.clientX - section.getBoundingClientRect().left}px`);
    section.style.setProperty('--spot-y', `${e.clientY - section.getBoundingClientRect().top}px`);
  };

  const handleMouseLeave = () => {
    const el = contentRef.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <section
      id="hero"
      className="hero section dark-background"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src="/assets/img/hero-bg.jpg" alt="" className="" />

      <div className="container hero-parallax" ref={contentRef}>
        <h2>Mr. Chheang Samnang</h2>
        <p>
          I'm <span ref={typedRef} className="typed"></span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
        </p>

        <div className="hero-cta">
          <Link to="/portfolio" className="btn-gradient">
            View My Work <i className="bi bi-arrow-right"></i>
          </Link>
          <Link to="/contact" className="btn-outline-modern">
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="hero-scroll-cue">
        <span>Scroll</span>
        <i className="bi bi-chevron-double-down"></i>
      </div>
    </section>
  );
}
