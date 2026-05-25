import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Flame, Heart, Mail, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { PILLARS, PATHWAYS, GOSPEL_VERSES, BLOG_POSTS } from '../data';

interface HomeProps {
  setActivePage: (page: PageId) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
      setEmail('');
    }, 1200);
  };

  const currentBlogPost = BLOG_POSTS[0]; // Highlight featured post on home

  return (
    <div id="home-view">
      {/* ─── HERO SECTION ─── */}
      <section className="hero" id="home-hero">
        <div className="hero-content">
          {/* Logo Brand Image inside the hero-logo wrapper */}
          <div className="hero-logo mx-auto flex flex-col items-center justify-center mb-8">
            <img
              src="https://lh3.googleusercontent.com/d/1QjF1MGPQQZc7rp4olum50i8PPQS74XBz"
              alt="Sent to Save Logo"
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] h-auto object-contain block transition-transform duration-300 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz") {
                  target.src = "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz";
                }
              }}
            />
          </div>

          <p className="hero-tagline uppercase font-serif text-[#ffffff]/90 tracking-wide text-xl sm:text-2xl">
            "Go into all the world and preach the gospel..."
          </p>
          <div className="hero-rule" />
          <p className="hero-tagline-2">
            Jesus was sent to save us. Now we are sent to share Him.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => handleNavigate('salvation')}
              className="btn btn-primary"
              id="hero-primary-cta"
            >
              Hear the Gospel
            </button>
            <button
              onClick={() => handleNavigate('mission')}
              className="btn"
              id="hero-secondary-cta"
            >
              Our Mission
            </button>
          </div>
        </div>

        <div className="hero-scroll text-[#c8a84b]/60">
          Scroll to explore
        </div>
      </section>

      {/* ─── THREE PILLARS ─── */}
      <section className="pillars py-24 border-t border-[#c8a84b]/10 bg-[#111108]/40" id="home-pillars">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Redemption & Mission</span>
            <h2 className="h-section text-[#ffffff]">The Pillars of Faith</h2>
            <div className="gold-rule" />
            <p className="p-large text-slate-400">
              Discipleship isn't a passive structure; it's an organic, daily devotion to learning, growing, and multiplication.
            </p>
          </div>

          <div className="pillars-grid">
            {PILLARS.map((pillar) => (
              <div key={pillar.number} className="pillar-card group hover:border-[#c8a84b]/60 transition-all duration-300">
                <div className="pillar-number font-display text-5xl text-[#c8a84b]/15 group-hover:text-[#c8a84b]/30 transition-colors">
                  {pillar.number}
                </div>
                <h3 className="font-label text-[#ffffff] group-hover:text-[#c8a84b] transition-colors">
                  {pillar.title}
                </h3>
                <p className="p-body text-[#ffffff]/70">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC GOSPEL QUOTE ─── */}
      <section className="gospel-callout relative py-20 overflow-hidden bg-gradient-to-b from-[#0a0a06] to-[#111108]">
        <div className="gospel-callout-inner">
          <span className="gospel-quote-mark font-serif select-none">“</span>
          <p className="gospel-quote-text font-serif italic text-2xl sm:text-3xl text-[#ffffff]/90 leading-relaxed md:px-12">
            {GOSPEL_VERSES.quote}
          </p>
          <div className="gospel-quote-ref font-label text-[#c8a84b] font-semibold text-xs tracking-[4px]">
            {GOSPEL_VERSES.ref}
          </div>
        </div>
      </section>

      {/* ─── DETAILED PATHWAYS ─── */}
      <section className="pathways py-24 bg-[#111108]" id="home-pathways">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Walk the Path</span>
            <h2 className="h-section text-[#ffffff]">Where Are You Now?</h2>
            <div className="gold-rule" />
            <p className="p-large text-[#ffffff]/70">
              There is a step for everyone—whether searching for answers, ready to receive salvation, or preparing to equip others.
            </p>
          </div>

          <div className="pathways-grid">
            {PATHWAYS.map((path) => (
              <div
                key={path.title}
                onClick={() => handleNavigate(path.targetPage)}
                className="pathway-card group hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="label font-label text-xs tracking-wider text-[#c8a84b] mb-2 block">
                  {path.label}
                </span>
                <h4 className="font-display text-2xl tracking-wide text-[#ffffff] group-hover:text-[#c8a84b] transition-colors mb-3">
                  {path.title}
                </h4>
                <p className="p-body text-[#ffffff]/60 text-sm leading-relaxed mb-6">
                  {path.description}
                </p>
                <div className="arrow font-label text-[#c8a84b] flex items-center gap-1.5 mt-auto text-xs font-semibold uppercase tracking-wider">
                  {path.buttonText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOK SHOWCASE ─── */}
      <section className="book-section py-24 bg-gradient-to-b from-[#111108] to-[#0a0a06]" id="home-book-feature">
        <div className="container">
          <div className="book-grid items-center">
            {/* Visual 3D CSS Cover */}
            <div className="book-visual">
              <div className="book-cover">
                <span className="book-cover-eyebrow">A Discipleship Manifesto</span>
                <span className="book-cover-hold text-center font-display uppercase tracking-widest text-4xl block mt-4">
                  SENT
                </span>
                <div className="book-cover-the-wrap">
                  <div className="book-cover-the-rule" />
                  <span className="book-cover-the uppercase tracking-[4px]">TO</span>
                  <div className="book-cover-the-rule r" />
                </div>
                <span className="book-cover-line text-center text-[#c8a84b] font-display uppercase tracking-widest text-5xl block">
                  SAVE
                </span>
                <div className="book-cover-rule" />
                <span className="book-cover-author font-label text-[9px] text-[#ffffff]/60 uppercase tracking-[2px]">
                  BY DAVID COOPER
                </span>

                <div className="book-cover-bottom">
                  <p className="book-cover-verse font-serif text-[8.5px] italic text-[#ffffff]/30 leading-snug">
                    "Jesus said to them again, 'Peace be with you. As the Father has sent me, even so I am sending you.'"
                  </p>
                  <span className="book-cover-verse-ref font-label text-[6.5px] tracking-[1.5px] text-[#c8a84b]/40 uppercase block mt-1">
                    — John 20:21
                  </span>
                </div>
                <span className="book-cover-imprint uppercase text-[#c8a84b]/40 text-[6px] tracking-[3px]">
                  REVELATION PRESS
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="book-info">
              <div className="coming-soon-badge">
                <span className="coming-soon-dot" />
                New Publication
              </div>
              <h2 className="h-section font-display uppercase text-[#ffffff]">The "Sent to Save" Manifesto</h2>
              <p className="subtitle font-serif italic text-lg text-[#c8a84b]">
                An intimate blueprint on rediscovering our calling to share the Gospel of Christ.
              </p>
              <p className="p-body text-[#ffffff]/70 leading-relaxed mb-6">
                Are you tired of dry religiosity? "Sent to Save" is not just another theological treatise. It is a warm, deeply scriptural invitation to step out of comfortable seats and step into the cosmic commission given to us by our resurrected King.
              </p>
              <button
                onClick={() => handleNavigate('book')}
                className="btn btn-primary"
                id="book-section-cta"
              >
                Read Chapters Preview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER SIGNUP ─── */}
      <section className="newsletter py-24 bg-[#0a0a06] border-t border-[#c8a84b]/10" id="newsletter-section">
        <div className="container max-w-4xl">
          <div className="section-header text-center mb-8">
            <span className="eyebrow">Stay Connected</span>
            <h2 className="h-section text-[#ffffff]">Join the Movement</h2>
            <div className="gold-rule" />
            <p className="p-large text-slate-400">
              Receive theological insights, discipleship guides, and news about our upcoming Gospel outreach programs.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-[#111108] p-8 rounded-lg border border-[#c8a84b]/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#c8a84b]" />
            
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <CheckCircle2 className="w-14 h-14 text-[#c8a84b] mx-auto mb-4" />
                <h3 className="font-label text-xl text-[#ffffff] tracking-wider mb-2 uppercase">Grace & Peace!</h3>
                <p className="p-body text-[#ffffff]/70 text-sm">
                  You have successfully joined the Sent to Save newsletter group. We look forward to fellowship with you.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col gap-1 text-left">
                  <label htmlFor="newsletter-email" className="font-label text-[10px] tracking-[2px] uppercase text-[#c8a84b] font-semibold">
                    Your Sanctified Email
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      id="newsletter-email"
                      placeholder="e.g. grace.believer@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-input flex-1 focus:ring-1 focus:ring-[#c8a84b]/40 focus:border-[#c8a84b]"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary min-w-[140px]"
                    >
                      {submitting ? 'Joining...' : 'Subscribe'}
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-[#ffffff]/40 italic text-left leading-normal">
                  * We value your privacy as brethren in Christ. No spam. Only Gospel devotion and news.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
