import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Prayer Request');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div id="contact-view" className="bg-[#0a0a06] text-white selection:bg-[#c8a84b]/20 selection:text-white">
      
      {/* SECTION 1: CUSTOM CONTACT HEADER */}
      <section className="pt-36 pb-20 px-6 sm:px-12 bg-[#0a0a06] text-center" id="contact-header">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <span className="font-label text-xs sm:text-sm tracking-[4px] text-[#c8a84b] uppercase block mb-3 font-semibold">
            REACH OUT
          </span>
          
          <h1 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-wider text-white mb-4 leading-none text-center">
            CONTACT
          </h1>

          <p className="font-serif italic text-[#c8a84b]/95 text-base sm:text-lg md:text-xl text-center max-w-2xl leading-relaxed">
            "If God prompted you to reach out — that is not an accident."
          </p>
          
          <div className="w-20 h-[1.5px] bg-[#c8a84b]/30 mx-auto mt-10" />
        </div>
      </section>

      {/* SECTION 2: DESCRIPTION TEXT & INTERACTIVE FORM */}
      <section className="pt-16 pb-36 bg-[#0a0a06]" id="contact-body">
        <div className="container max-w-xl mx-auto px-6 flex flex-col items-center">
          
          {/* Left-aligned narrative paragraphs with generous margin and padding, centered on the page */}
          <div className="space-y-8 text-left text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed mb-24 max-w-lg w-full">
            <p>
              Whether you have a question, a prayer request, a testimony to share, or an invitation to speak — this is the place to start.
            </p>
            <p>
              If you just gave your life to Christ on the Salvation page, please reach out. We want to know about it and connect you with a local church and resources to help you in your first steps.
            </p>
            <p>
              If you are a publisher, agent, or media inquiry related to <span className="italic font-bold text-white">Hold the Line</span> — use this form. Reference "publishing" in the subject line.
            </p>
          </div>

          {/* Clean Rounded Form Box conforming closely to Screenshot 3 */}
          <div className="w-full bg-[#111108] border border-[#c8a84b]/15 rounded-lg p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a84b] to-transparent" />
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <ShieldCheck className="w-16 h-16 text-[#c8a84b] mx-auto mb-6" />
                <h3 className="font-label text-2xl text-white tracking-widest mb-3 uppercase font-bold">MESSAGE RECEIVED</h3>
                <p className="font-serif italic text-[#ffffff]/80 text-base leading-relaxed mb-4 max-w-md mx-auto">
                  "Grace and peace! We have set this dialogue aside for sincere response and prayerful focus."
                </p>
                <p className="font-label text-[11px] tracking-[1.5px] text-[#c8a84b] uppercase max-w-md mx-auto mb-8">
                  We will reply to you from contact@senttosave.com
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border border-[#c8a84b]/45 text-[#c8a84b] font-label text-[10px] tracking-wider uppercase bg-transparent rounded hover:bg-[#c8a84b]/10 transition-all font-bold cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name field */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-4 bg-[#0a0a06] border border-[#c8a84b]/20 text-white rounded text-base placeholder-[#ffffff]/35 focus:outline-none focus:border-[#c8a84b] transition-colors"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col">
                  <input
                    type="email"
                    required
                    placeholder="your.email@address.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 bg-[#0a0a06] border border-[#c8a84b]/20 text-white rounded text-base placeholder-[#ffffff]/35 focus:outline-none focus:border-[#c8a84b] transition-colors"
                  />
                </div>

                {/* Subject field dropdown */}
                <div className="flex flex-col">
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-5 py-4 bg-[#0a0a06] border border-[#c8a84b]/20 text-white rounded text-base focus:outline-none focus:border-[#c8a84b] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Prayer Request">Prayer Request / Intercession</option>
                    <option value="Theological Question">Theological / Bible Inquiry</option>
                    <option value="Discipleship Support">Discipleship Guidance</option>
                    <option value="Publishing Inquiry">Hold the Line / Publishing</option>
                    <option value="General Conversation">General Conversation</option>
                  </select>
                </div>

                {/* Message text area */}
                <div className="flex flex-col">
                  <textarea
                    required
                    placeholder="Your message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 bg-[#0a0a06] border border-[#c8a84b]/20 text-white rounded text-base placeholder-[#ffffff]/35 focus:outline-none focus:border-[#c8a84b] transition-colors resize-none"
                  />
                </div>

                {/* Submit button with golden gradient background */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#c8a84b] via-[#f0d080] to-[#c8a84b] text-[#0a0a06] font-label text-xs tracking-[2px] font-bold uppercase rounded hover:scale-[1.02] shadow-lg transition-transform active:scale-[0.98] cursor-pointer"
                  >
                    {submitting ? 'SENDING...' : 'SEND MESSAGE →'}
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Email fallback section with direct contact */}
          <div className="mt-16 text-center space-y-3">
            <Mail className="w-5 h-5 text-[#c8a84b] mx-auto" />
            <p className="font-label text-[10px] tracking-[2.5px] uppercase text-[#ffffff]/30">Or direct email</p>
            <a href="mailto:contact@senttosave.com" className="block text-sm font-label tracking-wider font-bold text-white hover:text-[#c8a84b] transition-colors">
              CONTACT@SENTTOSAVE.COM
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
