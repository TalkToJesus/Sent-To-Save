import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';
import { ArrowRight, Bookmark, Printer, Heart, Sparkles, RefreshCw } from 'lucide-react';
import { ROMANS_ROAD_STEPS } from '../data';

export default function Salvation() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [showPrayer, setShowPrayer] = useState(false);
  const [believerName, setBelieverName] = useState('');
  const [decisionConfirmed, setDecisionConfirmed] = useState(false);

  const handleNextStep = () => {
    if (currentStepIdx < ROMANS_ROAD_STEPS.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    } else {
      setShowPrayer(true);
    }
  };

  const resetSalvationProgress = () => {
    setCurrentStepIdx(0);
    setShowPrayer(false);
    setBelieverName('');
    setDecisionConfirmed(false);
  };

  const handleConfirmDecision = (e: React.FormEvent) => {
    e.preventDefault();
    if (!believerName.trim()) return;
    setDecisionConfirmed(true);
  };

  return (
    <div id="salvation-view">
      <PageHeader
        title="Saved by Grace"
        subtitle="Unpacking the Romans Road plan of Salvation."
      />

      <section className="py-20 bg-[#0a0a06]" id="salvation-body">
        <div className="container max-w-4xl">
          {/* Active Walkthrough Block */}
          {!showPrayer ? (
            <div className="bg-[#111108] border border-[#c8a84b]/15 rounded-lg p-6 sm:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#c8a84b]" />
              
              {/* Step indicator bubbles */}
              <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2 gap-4 border-b border-[#c8a84b]/10">
                {ROMANS_ROAD_STEPS.map((step, idx) => (
                  <button
                    key={step.title}
                    onClick={() => {
                      setCurrentStepIdx(idx);
                      setShowPrayer(false);
                    }}
                    className="flex items-center gap-2 flex-shrink-0"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-display text-sm transition-all duration-300 ${
                        currentStepIdx === idx
                          ? 'bg-[#c8a84b] text-[#0a0a06] font-bold scale-110 shadow-lg shadow-[#c8a84b]/20'
                          : idx < currentStepIdx
                          ? 'bg-[#c8a84b]/20 text-[#c8a84b] border border-[#c8a84b]/30'
                          : 'bg-[#1a1a14] text-[#ffffff]/30 border border-[#c8a84b]/5'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span
                      className={`font-label text-[10px] tracking-wider uppercase transition-colors hidden sm:inline ${
                        currentStepIdx === idx ? 'text-[#c8a84b] font-bold' : 'text-[#ffffff]/40'
                      }`}
                    >
                      {step.title.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Walkthrough content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStepIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="min-h-[220px] flex flex-col items-center text-center justify-center"
                >
                  <span className="eyebrow block text-center">Step {currentStepIdx + 1} of 5 — {ROMANS_ROAD_STEPS[currentStepIdx].title}</span>
                  <h3 className="font-display text-3xl text-center text-[#ffffff] uppercase tracking-wide mb-4">
                    {ROMANS_ROAD_STEPS[currentStepIdx].title}
                  </h3>
                  
                  <div className="relative border-y border-[#c8a84b]/20 py-4 my-6 bg-[#0a0a06]/40 w-full text-center px-4 max-w-2xl mx-auto">
                    <p className="font-serif italic text-xl leading-relaxed text-[#ffffff] text-center">
                      "{ROMANS_ROAD_STEPS[currentStepIdx].verse}"
                    </p>
                    <span className="block font-label text-xs tracking-widest text-[#c8a84b] uppercase mt-2 font-bold text-center">
                      — {ROMANS_ROAD_STEPS[currentStepIdx].ref}
                    </span>
                  </div>

                  <p className="p-body text-[#ffffff]/80 text-md leading-relaxed text-center max-w-2xl mx-auto">
                    {ROMANS_ROAD_STEPS[currentStepIdx].explanation}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Controller button */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#c8a84b]/10">
                <button
                  onClick={() => setCurrentStepIdx(Math.max(0, currentStepIdx - 1))}
                  disabled={currentStepIdx === 0}
                  className={`font-label text-xs tracking-wider uppercase ${
                    currentStepIdx === 0 ? 'text-[#ffffff]/20 cursor-not-allowed' : 'text-[#c8a84b] hover:text-[#ffffff]'
                  }`}
                >
                  Back
                </button>
                
                <button
                  onClick={handleNextStep}
                  className="btn btn-primary"
                >
                  {currentStepIdx === ROMANS_ROAD_STEPS.length - 1 ? "Enter Prayer" : "Next Step"}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ) : (
            /* Salvation Prayer & Decision Form */
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#111108] border border-[#c8a84b]/15 rounded-lg p-6 sm:p-10 shadow-2xl relative"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#c8a84b]" />
                
                <div className="flex justify-between items-center mb-6">
                  <span className="eyebrow">Repentance & Belief</span>
                  <button
                    onClick={resetSalvationProgress}
                    className="p-1.5 rounded border border-[#c8a84b]/20 hover:border-[#c8a84b] text-[#c8a84b] text-[10px] font-label uppercase tracking-wider flex items-center gap-1 bg-[#1a1a14]"
                  >
                    <RefreshCw className="w-3 h-3" /> restart
                  </button>
                </div>
                
                <h3 className="font-display text-4xl text-[#ffffff] uppercase tracking-wide mb-4 text-center">
                  Crying Out to Jesus
                </h3>
                <p className="p-body text-[#ffffff]/80 text-center max-w-2xl mx-auto mb-8">
                  Salvation is a gift, but it must be received. Speak these sincere words to Jesus in the quiet of your heart or aloud:
                </p>

                {/* Sincere Prayer Block */}
                <div className="bg-[#0a0a06] border border-[#c8a84b]/10 bg-radial-gradient from-[#c8a84b]/5 p-6 sm:p-8 rounded-lg shadow-inner max-w-3xl mx-auto mb-10 leading-relaxed font-serif text-lg text-[#ffffff]/90 relative">
                  <Heart className="w-8 h-8 text-[#c8a84b] opacity-15 absolute top-4 right-4" />
                  <p className="mb-4">
                    "Dear Lord Jesus, I know that I am a sinner and have fallen short of Your standard. I believe with all my heart that You came to save me, died on the cross as my substitute, and rose physically from the grave to conquer death."
                  </p>
                  <p className="mb-4">
                    "I turn away from my old path of self-lordship and repent of my sins. I surrender my life to You today. Take absolute control, wash away my past, write my name in Your book of life, and guide me in Your grace. Thank You for saving me. Amen."
                  </p>
                </div>

                {/* Covenant generator panel */}
                {!decisionConfirmed ? (
                  <form onSubmit={handleConfirmDecision} className="max-w-md mx-auto space-y-4">
                    <h4 className="font-label text-xs tracking-wider text-[#c8a84b] uppercase text-center font-bold">
                      Did you pray this sincere prayer of faith?
                    </h4>
                    <p className="p-body text-[#ffffff]/60 text-xs text-center leading-relaxed">
                      Enter your name below if you placed your trust in Christ today to register this sacred covenant between you and God.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <input
                        type="text"
                        placeholder="e.g. Samuel Cooper"
                        value={believerName}
                        onChange={(e) => setBelieverName(e.target.value)}
                        required
                        className="form-input flex-1 focus:ring-1 focus:ring-[#c8a84b] focus:border-[#c8a84b]"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary min-w-[160px]"
                      >
                        Confirm Decision
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Divine Printable Covenant Card */
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mx-auto border-2 border-double border-[#c8a84b] bg-gradient-to-br from-[#1a1a14] via-[#111108] to-[#1a1a14] p-8 rounded shadow-2xl text-center relative"
                    id="salvation-covenant-card"
                  >
                    <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#c8a84b]/10 pointer-events-none" />
                    
                    <div className="flex justify-center mb-4">
                      <Sparkles className="w-8 h-8 text-[#c8a84b]" />
                    </div>
                    
                    <span className="font-label text-[10px] tracking-[4px] text-[#c8a84b]/80 uppercase block">
                      Kingdom Covenant Certificate
                    </span>
                    <h4 className="font-display text-3xl tracking-widest text-[#ffffff] uppercase mt-2 mb-1">
                      CITIZEN OF HEAVEN
                    </h4>
                    <p className="text-[10px] text-[#ffffff]/40 uppercase tracking-[1px]">Romans 10:13</p>

                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#c8a84b]/40 to-transparent mx-auto my-4" />

                    <p className="font-serif italic text-sm text-[#ffffff]/60 mb-1">This certifies that by grace through faith,</p>
                    <h5 className="font-label text-xl tracking-[1px] text-[#c8a84b] font-bold uppercase my-3 border-b border-[#c8a84b]/20 pb-1 max-w-[280px] mx-auto">
                      {believerName}
                    </h5>
                    <p className="font-serif italic text-sm text-[#ffffff]/60 max-w-sm mx-auto leading-relaxed">
                      has confessed Jesus Christ as Lord and Savior, and received complete remission of sins and the gift of eternal life, passing from spiritual death into spiritual light.
                    </p>

                    <div className="mt-8 pt-4 border-t border-[#c8a84b]/15 text-[10px] font-label text-slate-400 tracking-wider">
                      <p>“Be faithful unto death, and I will give you the crown of life.”</p>
                      <span className="block text-[#c8a84b]/60 mt-1 uppercase">— Revelation 2:10</span>
                    </div>

                    <button
                      onClick={() => window.print()}
                      className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-[#c8a84b]/25 rounded text-[10px] font-label tracking-wider uppercase text-[#c8a84b] hover:bg-[#c8a84b]/5 transition-colors"
                    >
                      <Printer className="w-3 h-3" /> Print Certificate
                    </button>
                  </motion.div>
                )}
              </motion.div>

              {/* Resource cards to help them with next steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#111108] p-6 border border-[#c8a84b]/10 rounded">
                  <h4 className="font-label text-sm tracking-wider text-[#c8a84b] uppercase mb-2">What Happens Now?</h4>
                  <p className="p-body text-xs text-[#ffffff]/70 leading-relaxed">
                    You have passed from death to life. Satan loves to attack new believers with doubt. Stand firmly on the historic promises of Scripture, not your floating feelings. Jesus will never let you go!
                  </p>
                </div>
                <div className="bg-[#111108] p-6 border border-[#c8a84b]/10 rounded">
                  <h4 className="font-label text-sm tracking-wider text-[#c8a84b] uppercase mb-2">Your Next Steps</h4>
                  <p className="p-body text-xs text-[#ffffff]/70 leading-relaxed">
                    A newborn physical baby needs milk; so does a newborn spiritual believer. Please, go to our <strong>Grow</strong> section to grasp the daily habits necessary to protect and increase your faith.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
