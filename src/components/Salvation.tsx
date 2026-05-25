import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import PageHeader from './PageHeader';

const SALVATION_STEPS = [
  {
    num: 1,
    title: "YOU ARE A SINNER.",
    verse: "For all have sinned and fall short of the glory of God.",
    ref: "ROMANS 3:23",
    explanation: "Not because you are uniquely terrible — because every human being is. Some hide it better than others. The Bible refuses to let anyone hide."
  },
  {
    num: 2,
    title: "SIN HAS A WAGE.",
    verse: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
    ref: "ROMANS 6:23",
    explanation: "Sin separates us from a holy God. The payment is real. But notice the second half — there is a free gift. We do not earn it. We receive it."
  },
  {
    num: 3,
    title: "CHRIST PAID THAT WAGE.",
    verse: "But God shows His love for us in that while we were still sinners, Christ died for us.",
    ref: "ROMANS 5:8",
    explanation: "Not after we cleaned up. Not after we got our lives together. While we were still in the mess — Christ went to the cross for us."
  },
  {
    num: 4,
    title: "BELIEVE AND CONFESS.",
    verse: "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised Him from the dead, you will be saved.",
    ref: "ROMANS 10:9",
    explanation: "That is it. Confess Him as Lord. Believe He rose from the dead. Salvation is yours — not because you earned it, because He paid for it."
  },
  {
    num: 5,
    title: "YOU ARE HIS.",
    verse: "For there is no distinction between Jew and Greek; for the same Lord is Lord of all, bestowing His riches on all who call on Him.",
    ref: "ROMANS 10:12",
    explanation: "No exceptions. No qualifications. No \"you are too far gone.\" Anyone who calls on Him is saved."
  }
];

export default function Salvation() {
  const [showCovenant, setShowCovenant] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [believerName, setBelieverName] = useState('');
  const [decisionConfirmed, setDecisionConfirmed] = useState(false);

  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleConfirmDecision = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setBelieverName(`${firstName.trim()} ${lastName.trim()}`);
      setDecisionConfirmed(true);
    }
  };

  return (
    <div id="salvation-view" className="bg-[#0a0a06] text-white selection:bg-[#c8a84b]/20 selection:text-white pb-12">
      <PageHeader
        title="Salvation"
        subtitle="The most important decision you will ever make."
      />

      <section className="py-36 bg-[#0a0a06]" id="salvation-body">
        <div className="container max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center">
          
          {/* Centered Column with Left-aligned Introductory Text */}
          <div className="space-y-8 text-left text-white/80 font-serif text-lg sm:text-xl leading-relaxed mb-36 max-w-xl mx-auto w-full">
            <p>
              This page exists because nothing else in this ministry matters if you have not first encountered the One it points to. Before any of the rest of it — there is the question of where you stand with Jesus Christ.
            </p>
            <p>
              This is the Gospel. Plainly. As clearly as it can be said.
            </p>
          </div>

          {/* THE ROMANS ROAD (Left-aligned Paragraph, Centered Column) */}
          <div className="text-left mb-32 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-white mb-12 text-center leading-[1.2]">
              THE ROMANS ROAD
            </h2>
            <p className="text-white/85 font-serif text-base sm:text-lg leading-relaxed text-left mb-6">
              The book of Romans walks through the Gospel in a sequence so clear it has been used for centuries to help people understand what God has done. Read these slowly. Let them work on you.
            </p>
          </div>

          {/* List of Vertical Cards (Left-aligned text, Centered Column) */}
          <div className="space-y-16 w-full max-w-xl mx-auto mb-36 relative">
            {SALVATION_STEPS.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-left relative">
                
                {/* Step circle index badge positioned on top/center */}
                <div className="relative -mb-5 z-10 w-10 h-10 rounded-full bg-[#c8a84b] text-[#0a0a06] font-display text-sm sm:text-base font-bold flex items-center justify-center shadow-lg shadow-[#c8a84b]/25 select-none hover:scale-105 transition-transform">
                  {step.num}
                </div>

                {/* Card wrapper left-aligned text */}
                <div className="w-full bg-[#111108] border border-[#c8a84b]/10 hover:border-[#c8a84b]/30 rounded px-6 py-10 sm:px-10 pt-10 shadow-2xl transition-all duration-300 text-left">
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-widest text-white mb-4 mt-2 border-b border-[#c8a84b]/10 pb-2">
                    {step.title}
                  </h3>
                  
                  {/* Bible Verse in Gold Italic (Left-aligned) */}
                  <blockquote className="font-serif italic text-base sm:text-lg text-[#c8a84b] my-4 leading-relaxed border-l border-[#c8a84b]/30 pl-4">
                    "{step.verse}"
                  </blockquote>
                  
                  {/* Scripture Reference Tag */}
                  <span className="block font-label text-[10px] tracking-[3px] text-[#c8a84b]/60 uppercase mb-6 font-bold">
                    — {step.ref}
                  </span>
                  
                  <div className="w-12 h-[1px] bg-[#c8a84b]/20 mb-6" />

                  {/* Explanation Paragraph */}
                  <p className="text-white/85 font-serif text-sm sm:text-base leading-relaxed">
                    {step.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* A SIMPLE PRAYER (Left-aligned text, Centered Column) */}
          <div className="text-left mb-36 border-t border-[#c8a84b]/10 pt-36 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-white mb-12 leading-[1.2] text-center">
              A SIMPLE PRAYER
            </h2>
            <p className="text-white/80 font-serif text-base sm:text-lg leading-relaxed text-left mb-10">
              If you are ready to surrender your life to Jesus Christ, you can pray something like this. The words are not magic. The heart behind them is everything.
            </p>
 
            {/* Prayer quote block with left-aligned text inside border */}
            <div className="border border-[#c8a84b]/25 rounded px-6 sm:px-10 py-10 bg-[#111108] relative text-left shadow-2xl">
              <Heart className="w-12 h-12 text-[#c8a84b] opacity-5 absolute top-4 right-4 pointer-events-none" />
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#c8a84b] leading-relaxed text-left">
                "Jesus, I admit I am a sinner. I cannot save myself. I believe You died on the cross for my sin and rose again on the third day. I receive Your gift of salvation right now. I surrender my life to You as Lord. Forgive me. Change me. Lead me from this moment forward. Thank You for what You did for me. Amen."
              </p>
            </div>
 
            <p className="text-[#c8a84b] font-serif italic text-lg sm:text-xl mt-12 block text-center max-w-md mx-auto">
              If you prayed that prayer and meant it — welcome to the family of God.
            </p>
          </div>
 
          {/* WHAT'S NEXT? (Left-aligned, Centered Column) */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-white mb-12 leading-[1.2] text-center">
              WHAT'S NEXT?
            </h2>
            <p className="text-white/80 font-serif text-base sm:text-lg leading-relaxed text-left mb-8">
              Tell someone. Find a Bible-believing church. Start reading the Gospel of John. Begin praying every day — even badly. And reach out to us. We want to know about it and walk with you in the next steps.
            </p>
          </div>

          {/* Bottom CTA trigger for Registering Decision */}
          <div className="flex flex-col items-center justify-center mt-6 mb-8 w-full max-w-xs mx-auto">
            <button
              onClick={() => {
                setShowCovenant(true);
                setTimeout(() => {
                  const element = document.getElementById('covenant-anchor');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="w-full bg-gradient-to-r from-[#c8a84b] via-[#f0d080] to-[#c8a84b] text-[#0a0a06] font-label text-sm font-bold tracking-[3px] px-8 py-5 rounded transition-transform hover:scale-[1.03] duration-300 shadow-[0_4px_24px_rgba(200,168,75,0.22)] flex items-center justify-center hover:shadow-[0_4px_35_rgba(200,168,75,0.38)] cursor-pointer"
            >
              TELL US YOU SAID YES →
            </button>
          </div>

          {/* Invisible anchor for scrolling */}
          <div id="covenant-anchor" />

          {/* Dynamic Covenant / Certificate Section */}
          {showCovenant && (
            <div id="salvation-covenant-container" className="mt-16 pt-16 border-t border-[#c8a84b]/10 w-full max-w-4xl mx-auto">
              {!decisionConfirmed ? (
                <form onSubmit={handleConfirmDecision} className="space-y-6 w-full max-w-md mx-auto text-center">
                  <span className="text-[#c8a84b]/70 font-label text-[10px] tracking-[3px] block mb-1 uppercase">Your Declaration</span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wider mb-2">Register Your Decision</h3>
                  <p className="text-white/60 text-sm font-serif leading-relaxed px-4">
                    Enter your first and last name below if you placed your trust in Christ today to declare this historic and sacred decision.
                  </p>
                  
                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="bg-[#111108] text-white border border-[#c8a84b]/20 px-4 py-3.5 rounded text-sm focus:outline-none focus:border-[#c8a84b] text-center w-full"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="bg-[#111108] text-white border border-[#c8a84b]/20 px-4 py-3.5 rounded text-sm focus:outline-none focus:border-[#c8a84b] text-center w-full"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#c8a84b] text-[#0a0a06] font-label font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded hover:bg-[#f0d080] transition-colors focus:outline-none select-none cursor-pointer"
                    >
                      Generate Certificate
                    </button>
                  </div>
                </form>
              ) : (
                /* Divine Printable Covenant Card */
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="border-4 border-double border-[#c8a84b] bg-gradient-to-br from-[#1c1c14] via-[#0f0f08] to-[#1c1c14] p-6 sm:p-10 md:p-12 rounded shadow-2xl relative max-w-4xl mx-auto w-full flex flex-col justify-between min-h-[500px] md:min-h-[560px]"
                  id="salvation-covenant-card"
                >
                  {/* Decorative thin gold inner boundary lines */}
                  <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#c8a84b]/15 pointer-events-none" />
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#c8a84b]/5 pointer-events-none" />

                  {/* Centered structured layout container */}
                  <div className="relative z-10 w-full flex flex-col justify-between flex-grow text-center max-w-2xl mx-auto space-y-6">
                    
                    {/* Top Column: Logo & Titles */}
                    <div className="flex flex-col items-center space-y-1.5 mt-1">
                      {/* Sent to Save Logo */}
                      <img
                        src="https://lh3.googleusercontent.com/d/1QjF1MGPQQZc7rp4olum50i8PPQS74XBz"
                        alt="Sent to Save Logo"
                        className="certificate-logo block opacity-95 filter brightness-110 drop-shadow-[0_0_8px_rgba(200,168,75,0.3)]"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz") {
                            target.src = "https://drive.google.com/uc?export=view&id=1QjF1MGPQQZc7rp4olum50i8PPQS74XBz";
                          }
                        }}
                      />
                      <span className="font-label text-[9px] sm:text-[10px] tracking-[5px] text-[#c8a84b]/95 uppercase block pt-1">
                        COVENANT OF REDEMPTION
                      </span>
                      <h4 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-widest text-[#ffffff] uppercase font-black leading-none mt-1">
                        CITIZEN OF HEAVEN
                      </h4>
                      <p className="text-[9px] sm:text-[10px] text-[#ffffff]/45 uppercase tracking-[2px] font-mono leading-none pt-0.5">
                        REGISTRATION NO. • LUKE 10:20
                      </p>
                    </div>

                    {/* Middle Column: Covenant Text & Recipient */}
                    <div className="flex flex-col items-center my-auto py-1">
                      <div className="w-36 h-px bg-gradient-to-r from-transparent via-[#c8a84b]/40 to-transparent mx-auto mb-3" />
                      <p className="font-serif italic text-xs sm:text-sm text-[#ffffff]/60 leading-normal">
                        This certifies that by Grace through Faith in Jesus Christ,
                      </p>
                      
                      {/* Recipient Name with complete wrap support & precise sizing */}
                      <div className="w-full max-w-xl mx-auto my-2.5 text-center">
                        <h5 className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-gradient bg-gradient-to-r from-[#e5cf80] via-[#c8a84b] to-[#f5e0a0] bg-clip-text text-transparent font-medium py-1.5 break-all leading-tight border-b border-[#c8a84b]/30">
                          {believerName}
                        </h5>
                      </div>

                      <p className="font-serif italic text-xs sm:text-sm text-[#ffffff]/75 max-w-xl mx-auto leading-relaxed px-2">
                        has confessed with the mouth that Jesus is Lord, believed in the heart that God raised Him from the dead, and passed from spiritual death into everlasting life — having received salvation, complete remission of sins, and the inheritance of the Kingdom of God.
                      </p>
                    </div>

                    {/* Bottom Column: Seal, Witness, Scripture and Actions */}
                    <div className="w-full space-y-4">
                      {/* Dual columns for Seal & Signatures */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-3 border-t border-[#c8a84b]/15 w-full">
                        
                        {/* Left Column: Traditional Gold Seal of Heaven */}
                        <div className="flex flex-col items-center">
                          <div className="relative flex justify-center items-center">
                            {/* Outer serrated golden ring */}
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#b38f2d] via-[#f5e0a0] to-[#8c671b] flex items-center justify-center shadow-lg border border-[#c8a84b]/50 relative select-none">
                              <div className="absolute inset-1 rounded-full border border-dashed border-[#0a0a06]/35" />
                              <div className="absolute inset-2 rounded-full border border-[#0a0a06]/10 flex items-center justify-center bg-gradient-to-tr from-[#9c7823] via-[#e5cf80] to-[#805e15]">
                                <Sparkles className="w-5 h-5 text-[#0a0a06]/85 drop-shadow" />
                              </div>
                            </div>
                          </div>
                          <span className="font-label text-[8px] tracking-[2px] text-[#c8a84b] uppercase font-bold mt-1.5">
                            SEAL OF THE COVENANT
                          </span>
                        </div>

                        {/* Right Column: Signatures / Date */}
                        <div className="space-y-2 text-center sm:text-right font-serif text-xs text-[#ffffff]/70 pl-0 sm:pl-4">
                          <div>
                            <p className="font-mono text-[8px] text-[#ffffff]/40 uppercase tracking-widest leading-none">DATE OF CONFESSION</p>
                            <p className="text-xs font-label font-bold text-[#c8a84b] mt-0.5 uppercase tracking-wider">{formattedDate}</p>
                          </div>
                          <div className="pt-1">
                            <p className="font-mono text-[8px] text-[#ffffff]/40 uppercase tracking-widest leading-none">WITNESSED BY</p>
                            <p className="font-serif italic text-xs text-white/90 mt-0.5">The Holy Spirit</p>
                            <div className="w-28 h-px bg-[#c8a84b]/30 mt-1 mx-auto sm:mr-0" />
                          </div>
                        </div>

                      </div>

                      {/* Bottom Scripture Quote Footer */}
                      <div className="pt-2 border-t border-[#c8a84b]/10 text-[10px] sm:text-[11px] font-serif italic text-slate-400 max-w-lg mx-auto">
                        <p className="leading-relaxed">“Yet to all who did receive Him, to those who believed in His name, He gave the right to become children of God.”</p>
                        <span className="block text-[#c8a84b]/70 mt-0.5 uppercase font-label text-[8px] tracking-[2.5px] font-bold">— John 1:12</span>
                      </div>
                    </div>

                  </div>

                  {/* Actions (Hidden on Print) */}
                  <div className="certificate-actions print-exclude flex justify-center gap-3 mt-4 relative z-20">
                    <button
                      onClick={() => window.print()}
                      className="px-5 py-2.5 border border-[#c8a84b] bg-gradient-to-r from-[#c8a84b]/10 to-[#c8a84b]/20 hover:from-[#c8a84b]/20 hover:to-[#c8a84b]/30 rounded text-[11px] font-label tracking-widest uppercase text-[#c8a84b] hover:text-white transition-all duration-300 font-bold flex items-center gap-2 cursor-pointer"
                    >
                      <span>Print Certificate</span>
                    </button>
                    <button
                      onClick={() => {
                        setDecisionConfirmed(false);
                        setFirstName('');
                        setLastName('');
                        setBelieverName('');
                      }}
                      className="px-5 py-2.5 border border-white/10 bg-transparent rounded text-[11px] font-label tracking-widest uppercase text-white/60 hover:bg-white/5 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      Reset name
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
