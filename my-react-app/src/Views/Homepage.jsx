import React, { useRef, useState, useEffect } from "react";
import "./Homepage.css";

const SECTIONS = [
  { id: "intro", label: "Welcome" },
  { id: "newsletter", label: "Sign up for the AI Newsletter" },
];

const Homepage = () => {
  const mainRef = useRef(null);
  const newsletterRef = useRef(null);
  const [newsletterOpacity, setNewsletterOpacity] = useState(0);
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  // Newsletter box opacity follows how much of it is in view (0 = transparent, 1 = fully visible)
  useEffect(() => {
    const main = mainRef.current;
    const box = newsletterRef.current;
    if (!main || !box) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setNewsletterOpacity(ratio >= 0.5 ? (ratio - 0.5) * 2 : 0);
      },
      {
        root: main,
        rootMargin: "0px",
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
      }
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  // Scroll-spy: which section is in view → active TOC label
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const onScroll = () => {
      const sections = SECTIONS.map(({ id }) => ({ id, el: main.querySelector(`#${id}`) })).filter((s) => s.el);
      const scrollTop = main.scrollTop;
      const offset = 120;
      let current = SECTIONS[0].id;
      const mainRect = main.getBoundingClientRect();
      for (const { id, el } of sections) {
        const elRect = el.getBoundingClientRect();
        const elTopInContent = scrollTop + (elRect.top - mainRect.top);
        if (elTopInContent <= scrollTop + offset) current = id;
      }
      setActiveId(current);
    };

    onScroll();
    main.addEventListener("scroll", onScroll, { passive: true });
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cafe-homepage">
      <header className="cafe-header">
        <div className="cafe-brand">
          <span className="cafe-tagline">{'{Automate '}<strong>everything</strong>{'}'}</span>
        </div>
        <div className="cafe-header-center">
          <h1 className="cafe-title">Welcome to Webcafe AI</h1>
          <p className="cafe-subtitle">Your go-to solution for AI-driven web applications</p>
        </div>
      </header>

      <div className="cafe-layout">
        <aside className="cafe-toc">
          <nav aria-label="Page sections">
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`cafe-toc-item ${activeId === id ? "cafe-toc-item-active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (id === "newsletter") setNewsletterOpacity(1);
                  mainRef.current?.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="cafe-main" ref={mainRef}>
          <section id="intro" className="cafe-section">
            <h2>Your go-to solution for AI-driven web applications</h2>
            <p>
              Build and ship smarter products with AI-powered tools. From automation to insights, we help you focus on what matters.
            </p>
            <p>
              Webcafe AI brings together intelligent workflows, data-driven decisions, and seamless integrations so your team can automate repetitive tasks, surface actionable insights, and scale without the usual friction. Whether you're prototyping a new product or running production systems, our platform adapts to your stack and grows with you.
            </p>
            <p>
              Explore templates, connect your favorite tools, and get started in minutes—no heavy setup required.
            </p>
            <p>
              <a href="https://webcafelanding-a9b98.web.app/" target="_blank" rel="noopener noreferrer">Visit our website</a> 
            </p>
          </section>

          <section id="newsletter" className="cafe-section cafe-section-newsletter">
            <div ref={newsletterRef} className="cafe-newsletter-box" style={{ opacity: newsletterOpacity }}>
              <h2>Sign up for the AI Newsletter</h2>
              <p>
                Get the latest updates, tips, and resources delivered to your inbox. No spam, just value.
              </p>
              <div className="cafe-cta">
                <input type="email" placeholder="Your email here" className="cafe-input" aria-label="Email" />
                <button type="button" className="blue-button">Subscribe</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
