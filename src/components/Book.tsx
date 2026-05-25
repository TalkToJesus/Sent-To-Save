import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Book() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const bookParts = [
    {
      num: "I",
      title: "THE BATTLE WITHIN",
      desc: "Honest examination — the wounds, the lies, the dead end road, and the God who drove the rest of the way."
    },
    {
      num: "II",
      title: "MARRIAGE",
      desc: "Your wife needs more than a provider. False refuges. The secret war. Leadership through repentance."
    },
    {
      num: "III",
      title: "FATHERHOOD",
      desc: "Be the hero your children are looking for. Teach them to pray. They are watching everything."
    },
    {
      num: "IV",
      title: "STRENGTH TO SURRENDER",
      desc: "Every breakthrough came after surrender. Fighting from freedom, not for it. Christ already won."
    },
    {
      num: "V",
      title: "BATTLE PLAN",
      desc: "The armor of God. The After Action Review for daily life. Habits that compound over decades."
    },
    {
      num: "VI",
      title: "LEGACY",
      desc: "Breaking the cycle. The home as first ministry. Hold the line — for the family God gave you."
    }
  ];

  return (
    <div id="book-view" className="bg-[#0a0a06] text-white selection:bg-[#c8a84b]/20 selection:text-[#ffffff]">
      {/* SECTION 1: BOOK HERO */}
      <section className="pt-36 pb-24 px-6 sm:px-12 md:px-24 bg-[#0a0a06]" id="book-hero">
        <div className="container max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Centered Pill COMING SOON */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8a84b]/30 bg-[#c8a84b]/10 text-[#c8a84b] font-label text-[10px] tracking-[3px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b] animate-pulse" />
              COMING SOON
            </span>
          </div>

          {/* Centered Large Book Title */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-[90px] uppercase tracking-wider text-white text-center leading-none mb-3">
            HOLD THE LINE
          </h1>

          {/* Centered Subtitle */}
          <p className="font-serif italic text-[#c8a84b] text-base sm:text-xl md:text-2xl text-center mb-16 max-w-3xl leading-relaxed">
            A Christian Man's Battle Plan for Marriage, Fatherhood, and Faith
          </p>

          {/* 2-Column Cover and Text Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start w-full mt-4">
            
            {/* Left: 3D Book Cover Card */}
            <div className="flex justify-center md:justify-end xl:pr-8">
              <div className="book-cover">
                {/* Book Spine Crease and shadow for photorealistic 3D rendering */}
                <div className="absolute top-0 left-0 w-3.5 h-full bg-gradient-to-r from-black/45 via-white/5 to-transparent border-r border-white/5 mix-blend-overlay z-10 pointer-events-none" />

                <span className="book-cover-eyebrow">A Christian Man's Battle Plan</span>
                <span className="book-cover-hold text-center font-display uppercase tracking-widest text-4xl block mt-4">
                  HOLD
                </span>
                <div className="book-cover-the-wrap">
                  <div className="book-cover-the-rule" />
                  <span className="book-cover-the uppercase tracking-[4px]">THE</span>
                  <div className="book-cover-the-rule r" />
                </div>
                <span className="book-cover-line text-center text-[#c8a84b] font-display uppercase tracking-widest text-5xl block">
                  LINE
                </span>
                <div className="book-cover-rule" />
                <span className="book-cover-author font-label text-[9px] text-[#ffffff]/60 uppercase tracking-[2px]">
                  BY THOMAS CARVER
                </span>
 
                <div className="book-cover-bottom">
                  <p className="book-cover-verse font-serif text-[8.5px] italic text-[#ffffff]/30 leading-snug text-center">
                    "Fight the good fight of faith."
                  </p>
                  <span className="book-cover-verse-ref font-label text-[6.5px] tracking-[1.5px] text-[#c8a84b]/40 uppercase block mt-1">
                    — 1 TIMOTHY 6:12 · ESV
                  </span>
                </div>
                <span className="book-cover-imprint uppercase text-[#c8a84b]/40 text-[6px] tracking-[3px]">
                  SENT TO SAVE
                </span>
              </div>
            </div>

            {/* Right: Narrative Details */}
            <div className="space-y-6 text-left text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed max-w-xl md:pt-4">
              <p>
                He sat at the end of a dead end road, ready to end it all. A stranger on the phone found one bed at a VA hospital three and a half hours away. He made a promise to drive there. God drove him the rest of the way. The woman who checked him in is now his wife.
              </p>
              <p>
                <span className="italic font-bold text-white">Hold the Line</span> is what happened after — and what is still happening. It is a raw, honest, Scripture-rooted battle plan written for husbands and fathers carrying battles nobody can see. PTSD. Pornography. Substance use. Marriage decay. The shame cycle that follows every failure. The slow, daily work of becoming the man your family actually needs.
              </p>
              <p className="mb-8">
                Written from the trenches, not the pulpit. By a combat veteran in active recovery, not a polished expert. Theologically grounded. Practically structured. 21 chapters. Six parts. Every chapter ending in reflection, action, and prayer.
              </p>

              {/* Notify form inline */}
              <div className="pt-2">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-[#c8a84b]/10 border border-[#c8a84b]/30 rounded text-center sm:text-left text-[#c8a84b] font-label text-xs uppercase tracking-wider"
                  >
                    Grace and peace! You will be notified when the book releases.
                  </motion.div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                    <input
                      type="email"
                      required
                      placeholder="Notify me when available"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3.5 bg-[#111108] border border-[#c8a84b]/20 text-white rounded text-base placeholder-[#ffffff]/35 focus:outline-none focus:border-[#c8a84b] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-gradient-to-r from-[#c8a84b] via-[#f0d080] to-[#c8a84b] text-[#0a0a06] font-label text-xs tracking-[2px] font-bold uppercase rounded hover:scale-[1.02] shadow-md transition-all active:scale-[0.98] cursor-pointer"
                    >
                      NOTIFY ME
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: WHAT'S INSIDE / SIX PARTS */}
      <section className="py-36 bg-[#0a0a06] border-t border-[#c8a84b]/5 relative" id="book-parts">
        <div className="container max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-label text-xs sm:text-sm tracking-[4px] text-[#c8a84b] uppercase block mb-3 font-semibold">
              WHAT'S INSIDE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-wider leading-none mb-6">
              SIX PARTS. 21 CHAPTERS.
            </h2>
            <div className="w-24 h-[1.5px] bg-[#c8a84b] mx-auto mt-2" />
          </div>
 
          {/* Grid of the 6 centered Cards but with left-aligned contents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            {bookParts.map((part) => (
              <div
                key={part.num}
                className="bg-[#111108]/90 border border-[#c8a84b]/10 rounded px-8 py-12 flex flex-col items-start text-left hover:border-[#c8a84b]/30 hover:bg-[#111108] hover:translate-y-[-2px] transition-all duration-300 shadow-xl w-full"
              >
                {/* Roman Numeral */}
                <span className="font-serif text-[#c8a84b]/50 text-3xl sm:text-4xl block mb-3 tracking-wider select-none">
                  {part.num}
                </span>
 
                {/* Card Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-widest text-white mb-4 leading-tight">
                  {part.title}
                </h3>
 
                {/* Card Description */}
                <p className="font-serif text-sm sm:text-base leading-relaxed text-[#ffffff]/70">
                  {part.desc}
                </p>
              </div>
            ))}
          </div>
 
        </div>
      </section>
 
      {/* SECTION 3: CENTERED QUOTE */}
      <section className="py-36 bg-[#0a0a06] border-t border-[#c8a84b]/5 relative" id="book-quote">
        <div className="container max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* Centered Quote Marks in Gold */}
          <span className="font-serif text-[#c8a84b]/30 text-[140px] leading-[0.3] select-none block mb-8 font-extrabold">
            "
          </span>

          {/* Core Quote */}
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white tracking-wide leading-relaxed px-4">
            You are not too far gone. You never were.
          </blockquote>

          {/* Ref */}
          <span className="font-label text-xs sm:text-sm tracking-[4px] text-[#c8a84b] uppercase block mt-10 font-bold">
            HOLD THE LINE &middot; CHAPTER 4
          </span>

        </div>
      </section>
    </div>
  );
}
