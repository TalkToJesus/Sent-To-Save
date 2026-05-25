import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';
import { Bookmark, Clipboard, Compass, Volume2, Star } from 'lucide-react';
import { BOOK_CHAPTERS } from '../data';

export default function Book() {
  const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);

  const chapterPrevs = [
    {
      excerpt: "The archetypal model for of all discipleship begins with absolute dispatch. Just as the Father dispatched Jesus from local celestial throne to foreign dust, so Christ dispatches us. Understanding the Father's sending model is key to understanding our own.",
      insights: [
        "Inconceivable condescension: God coming to earth.",
        "The incarnation as a model for relational empathy.",
        "Breaking religious comfort grids in exchange for cross-carrying obedience."
      ]
    },
    {
      excerpt: "Many are eager to share but speak a distorted, diluted message of self-actualization. To represent the King, we must preach His solid truth: holiness, judgment, redemption, grace, and faith. Let the cross be as sharp and magnificent as the original.",
      insights: [
        "Defining raw biblical terms: sin, atonement, glorification.",
        "Why self-help principles cannot substitute the historical blood of the Savior.",
        "Preserving truth while flowing with absolute grace."
      ]
    },
    {
      excerpt: "Skeptics do not care how much you know until they see how much you love. We explore historical relational barriers and understand how Christ reached the Samaritan woman by identifying thirst, avoiding hostile debates, and seeking genuine salvation.",
      insights: [
        "Tactics for gentle, loving dialogue in highly secular environments.",
        "The power of vulnerability: sharing your personal testimony.",
        "Rejecting culture-war animosity to represent real unconditional love."
      ]
    },
    {
      excerpt: "An in-depth modern analysis of the classic Romans Road technique. We learn how this structural scriptural sequence translates in modern dialogue. Keeping the structure intact but matching the tempo of our post-secular audience.",
      insights: [
        "Deconstructing Romans 3:23, 6:23, 5:8, 10:9 and 8:1.",
        "How to respond dynamically to standard pushbacks and theological concerns.",
        "Counseling seekers through the emotional weight of repentance."
      ]
    },
    {
      excerpt: "Discipleship is a chain of multiplication. If your Christian life is not reproducing other faithful believers, the cycle is halted. We draft practical life-on-life mentorship goals to make you an effective spiritual parent.",
      insights: [
        "How to select and invest in someone with mentoring intentionality.",
        "Setting spiritual goals (daily abiding, weekly study, prayer loops).",
        "The glorious multiplier effect: building 2nd and 3rd Generation disciples."
      ]
    }
  ];

  return (
    <div id="book-view">
      <PageHeader
        title="The Manifesto"
        subtitle="Explore 'Sent to Save', an intimate blueprint for grace-filled disciplemaking."
      />

      <section className="py-20 bg-[#0a0a06]" id="book-body">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            {/* Visual 3D CSS Cover card */}
            <div className="flex justify-center md:sticky md:top-24">
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

            {/* Book info text */}
            <div className="space-y-6">
              <div className="coming-soon-badge">
                <Star className="w-4 h-4 fill-current text-[#c8a84b]" />
                Interactive Chapter Explorer
              </div>
              <h2 className="font-display uppercase text-3xl text-[#ffffff] tracking-wide">
                Rediscover The Commission
              </h2>
              <p className="subtitle font-serif italic text-[#c8a84b]">
                "Sharing the Gospel is not the duty of professional clergy. It is the joy of the redeemed."
              </p>
              <p className="p-body text-[#ffffff]/80">
                In this volume, author David Cooper outlines a challenging, beautiful pathway for common believers to walk in obedience to the Great Commission. No dry legalism—only raw, biblical hospitality, relational empathy, theological clarity, and multiplication.
              </p>

              <div className="gold-rule text-left m-0" />

              <h4 className="font-label text-xs tracking-wider text-[#c8a84b] uppercase font-bold">Key Focus Areas:</h4>
              <ul className="space-y-2.5 text-[#ffffff]/80 font-serif text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#c8a84b] rounded-full" /> Recovering the First-Century sending model.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#c8a84b] rounded-full" /> Structuring clear, unmerited-favor Gospel dialogue.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#c8a84b] rounded-full" /> Walking with empathy, hospitality, and relational care.
                </li>
              </ul>
            </div>
          </div>

          <div className="gold-rule mb-16" />

          {/* Interactive Chapter Previews Panel */}
          <div className="bg-[#111108] border border-[#c8a84b]/15 rounded-lg p-6 sm:p-10 shadow-2xl" id="book-chapters-panel">
            <span className="eyebrow block mb-2">Manifesto Blueprint</span>
            <h3 className="font-display text-3xl uppercase text-[#ffffff] tracking-[1.5px] mb-6">
              Interactive Table of Contents
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Left Column: Chapters List selector */}
              <div className="space-y-2 md:col-span-1">
                {BOOK_CHAPTERS.map((chap, idx) => (
                  <button
                    key={chap.number}
                    onClick={() => setSelectedChapterIdx(idx)}
                    className={`w-full p-4 border rounded text-left transition-all duration-300 flex items-center justify-between ${
                      selectedChapterIdx === idx
                        ? 'bg-[#c8a84b] border-[#c8a84b] text-[#0a0a06] font-bold shadow-md shadow-[#c8a84b]/10'
                        : 'bg-[#1a1a14] border-[#c8a84b]/15 text-[#ffffff]/80 hover:border-[#c8a84b]/50'
                    }`}
                  >
                    <div>
                      <span className={`block text-[10px] uppercase font-mono tracking-wider ${selectedChapterIdx === idx ? 'text-[#0a0a06]/60' : 'text-[#c8a84b]/60'}`}>
                        {chap.number}
                      </span>
                      <span className="font-label text-sm uppercase truncate max-w-[140px] block mt-1">
                        {chap.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono opacity-60">{chap.pages}</span>
                  </button>
                ))}
              </div>

              {/* Right Column: Previews display panel */}
              <div className="md:col-span-2 bg-[#0a0a06]/55 border border-[#c8a84b]/10 rounded-lg p-6 sm:p-8 min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedChapterIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="font-label text-[10px] tracking-widest text-[#c8a84b] uppercase font-bold">
                        Chapter Summary & Draft Section
                      </span>
                      <h4 className="font-display text-4xl text-[#ffffff] uppercase tracking-wide mt-2">
                        {BOOK_CHAPTERS[selectedChapterIdx].title}
                      </h4>
                      <p className="font-serif text-[#ffffff]/60 text-xs italic mt-1 pb-4 border-b border-[#c8a84b]/10">
                        Page Range: {BOOK_CHAPTERS[selectedChapterIdx].pages}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="block font-label text-[10px] uppercase tracking-wider text-[#ffffff]/40 mb-2">
                          Primary Theme:
                        </span>
                        <p className="p-body text-sm text-[#ffffff]/90 leading-relaxed italic pl-4 border-l border-[#c8a84b]/30 font-serif">
                          "{BOOK_CHAPTERS[selectedChapterIdx].description}"
                        </p>
                      </div>

                      <div>
                        <span className="block font-label text-[10px] uppercase tracking-wider text-[#ffffff]/40 mb-2">
                          Excerpt Preview:
                        </span>
                        <p className="p-body text-[#ffffff]/80 text-sm leading-relaxed">
                          {chapterPrevs[selectedChapterIdx].excerpt}
                        </p>
                      </div>

                      <div>
                        <span className="block font-label text-[10px] uppercase tracking-wider text-[#ffffff]/40 mb-3">
                          Discipleship Insights Covered:
                        </span>
                        <ul className="space-y-2">
                          {chapterPrevs[selectedChapterIdx].insights.map((insight, index) => (
                            <li key={index} className="flex items-start gap-2 text-[#ffffff]/70 text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b] mt-1.5 flex-shrink-0" />
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
