import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

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

  const pathways = [
    {
      label: 'CURIOUS',
      title: 'WHO IS JESUS?',
      description: 'You are not sure what to believe. Start with the person at the center of everything. Read His story honestly.',
      buttonText: 'LEARN ABOUT HIM →',
      target: 'jesus' as PageId
    },
    {
      label: 'READY',
      title: 'SURRENDER TODAY',
      description: 'You feel God pulling at you and you are ready to respond. Walk through the Gospel step by step and meet Him here.',
      buttonText: 'THE ROMANS ROAD →',
      target: 'salvation' as PageId
    },
    {
      label: 'GROWING',
      title: 'WALK WITH HIM',
      description: 'You said yes to Jesus and now you want to grow. Daily disciplines, resources, and rhythms for the long walk.',
      buttonText: 'GROW IN FAITH →',
      target: 'grow' as PageId
    },
    {
      label: 'SENDING',
      title: 'SHARE THE GOSPEL',
      description: 'You want to reach others. Learn the simple Pray · Care · Share rhythm and the heart behind Sent to Save.',
      buttonText: 'JOIN THE MISSION →',
      target: 'mission' as PageId
    }
  ];

  const blogPosts = [
    {
      num: '01',
      category: 'TESTIMONY',
      title: 'THE DRIVE THAT SAVED MY LIFE',
      description: "One bed at a VA three and a half hours away. The drive that changed everything. How God kept the truck on the road when I couldn't.",
      footer: 'READ POST →'
    },
    {
      num: '02',
      category: 'FAITH',
      title: 'YOU ARE NOT TOO FAR GONE',
      description: 'For anyone quietly believing the lie that grace is for other people. It is not. The charges have already been dropped.',
      footer: 'READ POST →'
    },
    {
      num: '03',
      category: 'GOSPEL',
      title: 'HOW TO SHARE JESUS WITHOUT BEING WEIRD',
      description: 'Pray. Care. Share. A practical rhythm anyone can live — that turns ordinary lives into Gospel conversations.',
      footer: 'READ POST →'
    }
  ];

  return (
    <div id="home-view" className="w-full">
      {/* ─── HERO SECTION ─── */}
      <section className="hero relative flex min-h-[calc(100vh-76px)] items-center justify-center bg-[#0a0a06] py-20 px-4 text-center overflow-hidden" id="home-hero">
        <div className="hero-content relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
          {/* Logo Brand Image inside the hero-logo wrapper */}
          <div className="hero-logo w-full max-w-[280px] sm:max-w-[420px] md:max-w-[540px] mx-auto flex flex-col items-center justify-center mb-10">
            <img
              src="https://lh3.googleusercontent.com/d/1QjF1MGPQQZc7rp4olum50i8PPQS74XBz"
              alt="Sent to Save Logo"
              className="w-full h-auto object-contain block transition-transform duration-300 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz") {
                  target.src = "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz";
                }
              }}
            />
          </div>

          <p className="font-serif italic text-xl sm:text-2xl text-[#ffffff]/90 mb-3 text-center">
            Jesus was sent to save us.
          </p>
          <p className="font-serif italic font-semibold text-2xl sm:text-3xl text-[#c8a84b] mb-12 text-center">
            Now we are sent to share Him.
          </p>

          <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 w-full flex-wrap">
            <button
              onClick={() => handleNavigate('jesus')}
              className="btn btn-primary px-8 sm:px-10 py-4 font-bold text-xs tracking-[2px] rounded text-center justify-center min-w-[160px]"
              id="hero-primary-cta"
            >
              MEET JESUS →
            </button>
            <button
              onClick={() => handleNavigate('mission')}
              className="btn border border-[#c8a84b] text-[#c8a84b] bg-transparent hover:bg-[#c8a84b] hover:text-[#0a0a06] px-8 sm:px-10 py-4 font-bold text-xs tracking-[2px] rounded text-center justify-center min-w-[160px]"
              id="hero-secondary-cta"
            >
              OUR MISSION →
            </button>
          </div>
        </div>

        <div className="hero-scroll text-[#c8a84b]/60 absolute bottom-6 left-1/2 -translate-x-1/2">
          Scroll to explore
        </div>
      </section>

      {/* ─── THREE SIMPLE CALLS ─── */}
      <section className="pillars py-36 border-t border-[#c8a84b]/10 bg-[#0a0a06]" id="home-pillars">
        <div className="container mx-auto px-6">
          <div className="section-header text-center max-w-4xl mx-auto mb-20">
            <span className="eyebrow text-[#c8a84b]/60 tracking-[4px] block mb-2 uppercase text-xs">A GOSPEL MOVEMENT</span>
            <h2 className="font-display uppercase text-5xl sm:text-6xl text-[#ffffff] tracking-[1px] text-center mb-6">THREE SIMPLE CALLS</h2>
            <div className="gold-rule mx-auto my-3 w-28" />
            <p className="p-large font-serif italic text-[#ffffff]/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-center mt-3">
              Sent to Save exists to help everyday people — men, women, families, single people, young and old — encounter Jesus and walk faithfully with Him. The framework is simple. The Gospel is for everyone.
            </p>
          </div>

          <div className="pillars-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pillar-card bg-[#111108] border border-[#c8a84b]/10 hover:border-[#c8a84b]/30 rounded-lg p-10 text-center flex flex-col items-center justify-center transition-all duration-300">
              <div className="pillar-number font-display text-5xl text-[#c8a84b]/35 mb-2">
                01
              </div>
              <h3 className="font-label text-xl font-bold tracking-[4px] uppercase text-[#ffffff] mb-5">
                PRAY
              </h3>
              <p className="p-body text-[#ffffff]/70 text-sm sm:text-base leading-relaxed text-center">
                For the people God places in your life. By name. Consistently. Whether they know it or not — pray for them first. Prayer is where every Gospel conversation begins, long before words are spoken.
              </p>
            </div>

            <div className="pillar-card bg-[#111108] border border-[#c8a84b]/10 hover:border-[#c8a84b]/30 rounded-lg p-10 text-center flex flex-col items-center justify-center transition-all duration-300">
              <div className="pillar-number font-display text-5xl text-[#c8a84b]/35 mb-2">
                02
              </div>
              <h3 className="font-label text-xl font-bold tracking-[4px] uppercase text-[#ffffff] mb-5">
                CARE
              </h3>
              <p className="p-body text-[#ffffff]/70 text-sm sm:text-base leading-relaxed text-center">
                Show up practically. Notice what others miss. Meet needs without expecting return. The Gospel travels on ordinary kindness when ordinary people are willing to carry it.
              </p>
            </div>

            <div className="pillar-card bg-[#111108] border border-[#c8a84b]/10 hover:border-[#c8a84b]/30 rounded-lg p-10 text-center flex flex-col items-center justify-center transition-all duration-300">
              <div className="pillar-number font-display text-5xl text-[#c8a84b]/35 mb-2">
                03
              </div>
              <h3 className="font-label text-xl font-bold tracking-[4px] uppercase text-[#ffffff] mb-5">
                SHARE
              </h3>
              <p className="p-body text-[#ffffff]/70 text-sm sm:text-base leading-relaxed text-center">
                When the door opens, walk through it. Tell people what Jesus did for you and what He can do for them. Not with pressure — with honesty. Share Him as naturally as you share anything that changed your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CENTRAL GOSPEL SCRIPTURE ─── */}
      <section className="relative py-36 bg-[#0a0a06] text-center flex flex-col items-center justify-center border-t border-b border-[#c8a84b]/10">
        <div className="container max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="text-[#c8a84b]/40 font-serif text-[120px] leading-none select-none h-14 overflow-hidden mb-8 filter drop-shadow(0 0 12px rgba(200,168,75,0.15))">
            ”
          </div>
          <p className="font-serif italic text-[#ffffff]/95 text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto mb-8 text-center px-4">
            For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.
          </p>
          <div className="font-label text-[#c8a84b] font-semibold text-xs tracking-[4px] uppercase mb-12 text-center">
            JOHN 3:16-17 · ESV
          </div>
          <button
            onClick={() => handleNavigate('jesus')}
            className="btn btn-primary px-10 py-5 font-bold transition-all hover:scale-[1.02]"
          >
            WHO IS JESUS? →
          </button>
        </div>
      </section>

      {/* ─── START WHERE YOU ARE / FIND YOUR NEXT STEP ─── */}
      <section className="pathways py-36 bg-[#111108]" id="home-pathways">
        <div className="container mx-auto px-6">
          <div className="section-header text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow text-[#c8a84b]/60 tracking-[4px] block mb-2 uppercase text-xs">START WHERE YOU ARE</span>
            <h2 className="font-display uppercase text-5xl sm:text-6xl text-[#ffffff] tracking-[1px] text-center mb-6">FIND YOUR NEXT STEP</h2>
            <div className="gold-rule mx-auto my-3 w-28" />
            <p className="p-large text-slate-300 font-serif max-w-2xl mx-auto text-center italic text-md sm:text-lg">
              Wherever you are with God — curious, broken, returning, or growing — there is a place for you here.
            </p>
          </div>

          <div className="pathways-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map((path) => (
              <div
                key={path.title}
                onClick={() => handleNavigate(path.target)}
                className="pathway-card bg-[#1a1a14] border border-[#c8a84b]/10 hover:border-[#c8a84b]/40 rounded p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              >
                <div>
                  <span className="label font-label text-[10px] tracking-widest text-[#c8a84b] uppercase block mb-3 font-semibold">
                    {path.label}
                  </span>
                  <h4 className="font-display text-[#ffffff] text-2xl tracking-wide uppercase mb-3">
                    {path.title}
                  </h4>
                  <p className="p-body text-[#ffffff]/70 text-sm leading-relaxed mb-6">
                    {path.description}
                  </p>
                </div>
                <div className="arrow font-label text-xs tracking-wider text-[#c8a84b] hover:text-[#ffffff] duration-200 uppercase font-bold flex items-center gap-1.5 mt-auto">
                  {path.buttonText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOK SHOWCASE ─── */}
      <section className="book-section py-36 bg-[#0a0a06]" id="home-book-feature">
        <div className="container mx-auto px-6">
          <div className="section-header text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow text-[#c8a84b]/60 tracking-[4px] block mb-2 uppercase text-xs">FROM THE TRENCHES</span>
            <h2 className="font-display uppercase text-5xl sm:text-6xl text-[#ffffff] tracking-[1px] text-center mb-4">THE FIRST BOOK</h2>
            <div className="gold-rule mx-auto my-3 w-28" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Visual 3D Cover */}
            <div className="book-visual flex justify-center items-center py-6">
              <div className="book-cover">
                {/* Book Spine Crease and shadow for photorealistic 3D rendering */}
                <div className="absolute top-0 left-0 w-3.5 h-full bg-gradient-to-r from-black/45 via-white/5 to-transparent border-r border-white/5 mix-blend-overlay z-10 pointer-events-none" />
                
                {/* Book Header Section */}
                <div className="flex flex-col items-center text-center w-full">
                  <span className="book-cover-eyebrow">A Christian Man's Battle Plan</span>
                  <span className="book-cover-hold">
                    HOLD
                  </span>
                  <div className="book-cover-the-wrap">
                    <div className="book-cover-the-rule" />
                    <span className="book-cover-the">THE</span>
                    <div className="book-cover-the-rule r" />
                  </div>
                  <span className="book-cover-line">
                    LINE
                  </span>
                  <div className="book-cover-rule" />
                  <span className="book-cover-author">
                    THOMAS CARVER
                  </span>
                </div>

                {/* Book Footer Section */}
                <div className="flex flex-col items-center text-center w-full">
                  <div className="book-cover-bottom">
                    <p className="book-cover-verse">
                      "Fight the good fight of faith."
                    </p>
                    <span className="book-cover-verse-ref">
                      — 1 TIMOTHY 6:12 · ESV
                    </span>
                  </div>
                  <span className="book-cover-imprint">
                    SENT TO SAVE
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="book-info flex flex-col items-center text-center md:items-start md:text-left md:pl-10">
              <div className="coming-soon-badge mb-6 md:mb-8">
                <span className="coming-soon-dot" />
                COMING SOON
              </div>
              <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl text-[#ffffff] leading-[1.1] tracking-wide text-center md:text-left w-full">HOLD THE LINE</h2>
              <p className="subtitle font-serif italic text-[#f0d080] text-lg sm:text-xl leading-relaxed text-center md:text-left w-full">
                A Christian Man's Battle Plan for Marriage, Fatherhood, and Faith
              </p>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#ffffff]/80 font-serif text-center md:text-left">
                <p>
                  I wrote this book for fathers and husbands because I am one — writing from the middle of my own fight, not the end of it. I sat at the end of a dead end road, ready to end it all. God had other plans. The woman who checked me into the VA that night is now my wife. This book is what happened after.
                </p>
                <p>
                  It is honest, Scripture-rooted, and written from the trenches — for any man who is tired of fighting battles nobody can see, and any family carrying the cost.
                </p>
              </div>
              <button
                onClick={() => handleNavigate('book')}
                className="btn btn-primary px-8 py-4 font-bold tracking-wider"
              >
                LEARN MORE →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RECENT WORDS (BLOG) ─── */}
      <section className="blog-section py-36 bg-[#111108] border-t border-b border-[#c8a84b]/10" id="home-blog">
        <div className="container mx-auto px-6">
          <div className="section-header text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow text-[#c8a84b]/60 tracking-[4px] block mb-2 uppercase text-xs">FROM THE BLOG</span>
            <h2 className="font-display uppercase text-5xl sm:text-6xl text-[#ffffff] tracking-[1px] text-center mb-4">RECENT WORDS</h2>
            <div className="gold-rule mx-auto my-3 w-28" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.title}
                onClick={() => handleNavigate('blog')}
                className="blog-card group hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full bg-[#111108] border border-[#c8a84b]/10 rounded overflow-hidden cursor-pointer"
              >
                {/* Decorative card header containing the giant golden number */}
                <div className="blog-card-image pt-12 pb-8 flex items-center justify-center bg-[#1a1a14] border-b border-[#c8a84b]/10">
                  <span className="number font-display text-8xl text-[#c8a84b]/10 group-hover:text-[#c8a84b]/25 transition-colors">
                    {post.num}
                  </span>
                </div>

                <div className="blog-card-content p-6 flex flex-col flex-grow text-left">
                  <span className="category font-label text-[10px] tracking-widest text-[#c8a84b] uppercase mb-2 block font-bold text-left">
                    {post.category}
                  </span>
                  <h3 className="font-display text-2xl text-[#ffffff] group-hover:text-[#c8a84b] transition-colors leading-tight mb-3 text-left">
                    {post.title}
                  </h3>
                  <p className="p-body text-xs text-[#ffffff]/60 leading-relaxed mb-4 flex-grow text-left font-serif">
                    {post.description}
                  </p>
                  <span className="meta font-label text-[10px] tracking-wider text-[#ffffff]/40 uppercase mt-auto block pt-2 border-t border-[#c8a84b]/5 text-left">
                    {post.footer}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-12">
            <button
              onClick={() => handleNavigate('blog')}
              className="btn border border-[#c8a84b]/40 text-[#c8a84b] hover:bg-[#c8a84b] hover:text-[#0a0a06] bg-transparent font-medium text-xs tracking-[2px] transition-all px-8 py-4 uppercase"
            >
              ALL POSTS →
            </button>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER SIGNUP ─── */}
      <section className="newsletter py-36 bg-[#0a0a06]" id="newsletter-section">
        <div className="container max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="section-header text-center mb-10">
            <span className="eyebrow text-[#c8a84b]/60 tracking-[4px] block mb-2 uppercase text-xs text-center">JOIN THE MISSION</span>
            <h2 className="font-display uppercase text-4xl sm:text-5xl text-[#ffffff] tracking-[1px] text-center mb-4">STAY ENCOURAGED. STAY EQUIPPED.</h2>
            <div className="gold-rule mx-auto my-3 w-28 animate-pulse" />
            <p className="p-large font-serif text-slate-300 text-md sm:text-lg text-center max-w-2xl mx-auto italic mt-2">
              Weekly notes from the trenches. Scripture for the fight. First word on new resources and the Hold the Line release.
            </p>
          </div>

          <div className="w-full max-w-xl mx-auto bg-[#111108] p-8 rounded-lg border border-[#c8a84b]/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#c8a84b]" />
            
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center justify-center"
              >
                <CheckCircle2 className="w-14 h-14 text-[#c8a84b] mb-4" />
                <h3 className="font-label text-xl text-[#ffffff] tracking-wider mb-2 uppercase font-bold text-center">Grace & Peace!</h3>
                <p className="p-body text-[#ffffff]/70 text-sm text-center">
                  You have successfully joined the Sent to Save newsletter group. We look forward to fellowship with you.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col gap-1 text-center items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
                    <input
                      type="email"
                      id="newsletter-email"
                      placeholder="your.email@address.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-input flex-1 bg-[#0a0a06] border border-[#c8a84b]/20 hover:border-[#c8a84b]/40 focus:border-[#c8a84b] text-[#ffffff] placeholder-[#ffffff]/40 text-center sm:text-left px-4 py-3 rounded text-sm focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary min-w-[120px] rounded text-center justify-center"
                    >
                      {submitting ? 'JOINING...' : 'JOIN'}
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-[#ffffff]/40 italic text-center leading-normal">
                  * We value your privacy. No spam. Only Gospel devotion, Scripture and resources.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
