import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';
import { Book, Edit3, Trash2, CheckCircle2, Bookmark, Flame } from 'lucide-react';
import { GROW_STEPS } from '../data';

interface Devotion {
  id: string;
  date: string;
  scripture: string;
  revelation: string;
  prayer: string;
}

export default function Grow() {
  const [scripture, setScripture] = useState('');
  const [revelation, setRevelation] = useState('');
  const [prayer, setPrayer] = useState('');
  const [devotions, setDevotions] = useState<Devotion[]>([]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Load Saved devotions from localStorage on load
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sent_to_save_devotions');
      if (stored) {
        setDevotions(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Could not retrieve devotions", e);
    }
  }, []);

  const handleSaveDevotion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scripture.trim() || !revelation.trim()) return;

    const newDevotion: Devotion = {
      id: `devotion-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      scripture,
      revelation,
      prayer
    };

    const updated = [newDevotion, ...devotions];
    setDevotions(updated);
    try {
      localStorage.setItem('sent_to_save_devotions', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    // Reset inputs
    setScripture('');
    setRevelation('');
    setPrayer('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleDeleteDevotion = (id: string) => {
    const updated = devotions.filter((d) => d.id !== id);
    setDevotions(updated);
    try {
      localStorage.setItem('sent_to_save_devotions', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="grow-view">
      <PageHeader
        title="Spiritual Growth"
        subtitle="Crucial daily habits to root your soul deeply in the knowledge of God."
      />

      <section className="py-20 bg-[#0a0a06]" id="grow-body">
        <div className="container max-w-4xl">
          <div className="long-content mb-16">
            <h2 className="text-center font-display uppercase tracking-[2px] mb-8 text-[#ffffff]">The Discipleship Protocol</h2>
            <p className="p-body text-[#ffffff]/80 text-center">
              A physical child matures by drinking milk, sleeping, and communicating. A child of God grows in a very similar fashion—by daily feeding on scripture, breathing in prayer, running in fellowship, and standing as a witness to the nations.
            </p>
          </div>

          {/* Grid of Grow Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {GROW_STEPS.map((step) => (
              <div
                key={step.title}
                className="bg-[#111108] border border-[#c8a84b]/10 hover:border-[#c8a84b]/30 p-6 rounded flex flex-col items-center text-center justify-center"
              >
                <div className="flex items-center justify-center gap-2 mb-4 w-full">
                  <span className="font-label text-[10px] tracking-widest text-[#c8a84b] uppercase font-bold text-center">
                    {step.accent}
                  </span>
                </div>
                <h4 className="font-display text-2xl text-[#ffffff] uppercase mb-3 text-center">
                  {step.title}
                </h4>
                <p className="p-body text-[#ffffff]/70 text-sm leading-relaxed mb-4 text-center">
                  {step.text}
                </p>
                <div className="bg-[#0a0a06] border border-[#c8a84b]/5 p-4 rounded text-xs leading-relaxed italic font-serif text-[#ffffff]/80 text-center w-full">
                  "{step.scripture}"
                  <span className="block mt-2 font-label text-[9px] tracking-wider text-[#c8a84b] not-italic uppercase font-bold text-center">
                    — {step.ref}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="gold-rule mb-20" />

          {/* Interactive Journal Widget */}
          <div className="bg-[#111108] border border-[#c8a84b]/15 rounded-lg p-6 sm:p-10 shadow-2xl relative" id="grow-journal-panel">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#c8a84b]" />
            <span className="eyebrow block text-left mb-2">Abide in Truth</span>
            <h3 className="font-display text-3xl uppercase text-[#ffffff] tracking-[1.5px] mb-4">
              Daily Devotional & Hope Journal
            </h3>
            <p className="p-body text-[#ffffff]/70 text-sm mb-8">
              "Thy word is a lamp unto my feet, and a light unto my path." Work through your daily scripture readings. Type your meditations and prayer requests below to generate your private growth journal.
            </p>

            <form onSubmit={handleSaveDevotion} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="scriptureFocus" className="font-label text-[10px] tracking-[2.5px] uppercase text-[#c8a84b] font-bold">
                    Scripture Passage
                  </label>
                  <input
                    type="text"
                    id="scriptureFocus"
                    placeholder="e.g. John 1:1-5"
                    value={scripture}
                    onChange={(e) => setScripture(e.target.value)}
                    required
                    className="form-input focus:ring-1 focus:ring-[#c8a84b] focus:border-[#c8a84b]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="revelationText" className="font-label text-[10px] tracking-[2.5px] uppercase text-[#c8a84b] font-bold">
                    What does God reveal to you? (Meditations)
                  </label>
                  <textarea
                    id="revelationText"
                    placeholder="Describe how this scripture speaks to your heart, exposes sin, or promises grace..."
                    value={revelation}
                    onChange={(e) => setRevelation(e.target.value)}
                    required
                    className="form-textarea focus:ring-1 focus:ring-[#c8a84b] focus:border-[#c8a84b]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="prayerText" className="font-label text-[10px] tracking-[2.5px] uppercase text-[#c8a84b] font-bold">
                    Your Personal Prayer Request
                  </label>
                  <textarea
                    id="prayerText"
                    placeholder="Offer your petition or thanks to the Heavenly Father..."
                    value={prayer}
                    onChange={(e) => setPrayer(e.target.value)}
                    className="form-textarea min-h-[90px] focus:ring-1 focus:ring-[#c8a84b] focus:border-[#c8a84b]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AnimatePresence>
                    {savedSuccess && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-[#c8a84b] font-label uppercase tracking-widest flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#c8a84b]" /> Devotion Logged
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <Edit3 className="w-4 h-4 mr-1" /> Log Devotion
                </button>
              </div>
            </form>

            {/* List of Registered Devotions */}
            <div className="mt-12 pt-8 border-t border-[#c8a84b]/10 bg-[#0a0a06]/40 p-4 rounded-lg">
              <h4 className="font-label text-sm text-[#ffffff] uppercase tracking-[2.5px] mb-6 flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[#c8a84b]" /> Devotion History ({devotions.length})
              </h4>

              {devotions.length === 0 ? (
                <div className="text-center py-10 border border-dashed border-[#c8a84b]/10 rounded bg-[#111108]/50">
                  <p className="font-serif italic text-[#ffffff]/40 text-sm">
                    No devotional record added yet. Your logs will appear here, saved securely on this device.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 max-h-[460px] overflow-y-auto pr-2" id="journal-history-list">
                  {devotions.map((dev) => (
                    <div
                      key={dev.id}
                      className="bg-[#111108] border border-[#c8a84b]/10 p-5 rounded relative group hover:border-[#c8a84b]/35 transition-colors"
                    >
                      <button
                        onClick={() => handleDeleteDevotion(dev.id)}
                        className="absolute right-4 top-4 text-[#ffffff]/30 hover:text-red-500 transition-colors p-1"
                        title="Delete Devotion Log"
                        aria-label="Delete Devotion Log"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex flex-col sm:flex-row justify-between items-start gap-1 mb-3">
                        <span className="font-label text-xs font-bold text-[#c8a84b] uppercase tracking-wider">
                          {dev.scripture}
                        </span>
                        <span className="text-[10px] text-[#ffffff]/40 uppercase tracking-widest font-mono">
                          {dev.date}
                        </span>
                      </div>

                      <div className="space-y-3 font-serif">
                        <div>
                          <span className="block text-[10px] uppercase font-label tracking-widest text-[#ffffff]/40 not-italic mb-1">
                            Scripture Meditations:
                          </span>
                          <p className="p-body text-xs text-[#ffffff]/80 leading-relaxed italic pl-3 border-l border-[#c8a84b]/20">
                            {dev.revelation}
                          </p>
                        </div>

                        {dev.prayer && (
                          <div>
                            <span className="block text-[10px] uppercase font-label tracking-widest text-[#ffffff]/40 not-italic mb-1">
                              Prayer Petitions:
                            </span>
                            <p className="p-body text-xs text-[#ffffff]/70 leading-relaxed italic pl-3 border-l border-[#c8a84b]/20">
                              {dev.prayer}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
