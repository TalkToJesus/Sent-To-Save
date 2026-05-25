import React, { useState } from 'react';
import { motion } from 'motion/react';
import PageHeader from './PageHeader';
import { CheckCircle2, Flame, MapPin, Mail, MessageSquarePlus } from 'lucide-react';

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
    <div id="contact-view">
      <PageHeader
        title="Fellowship & Prayer"
        subtitle="Let us pray with you, answer your questions, and walk in faith together."
      />

      <section className="py-20 bg-[#0a0a06]" id="contact-body">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            
            {/* Info Column */}
            <div className="md:col-span-2 space-y-6 flex flex-col items-center text-center">
              <span className="eyebrow block text-center">Get In Touch</span>
              <h2 className="font-display uppercase text-3xl text-[#ffffff] tracking-wide text-center">
                We Are Here for You
              </h2>
              <p className="p-body text-[#ffffff]/80 text-sm leading-relaxed text-center">
                We take prayer, mentorship, and biblical guidance seriously as brothers and sisters in Christ. Please, write to us with total transparency. Our team sets aside time every single day to pray over incoming requests.
              </p>

              <div className="w-16 h-px bg-[#c8a84b]/30 mx-auto" />

              <div className="space-y-6 text-[#ffffff]/80 w-full flex flex-col items-center">
                <div className="flex flex-col items-center text-center">
                  <Mail className="w-6 h-6 text-[#c8a84b] mb-2" />
                  <span className="block font-label text-[10px] tracking-wider text-[#c8a84b]/70 uppercase">Email Us Directly</span>
                  <a href="mailto:info@senttosave.org" className="text-sm font-label font-bold text-[#ffffff] hover:text-[#c8a84b] transition-colors uppercase">
                    info@senttosave.org
                  </a>
                </div>

                <div className="flex flex-col items-center text-center max-w-sm">
                  <Flame className="w-6 h-6 text-[#c8a84b] mb-2" />
                  <span className="block font-label text-[10px] tracking-wider text-[#c8a84b]/70 uppercase">Prayer Group Mandate</span>
                  <p className="text-xs italic font-serif leading-relaxed text-[#ffffff]/60 text-center">
                    "Where two or three are gathered in my name, there am I among them." — Matthew 18:20
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="md:col-span-3 bg-[#111108] border border-[#c8a84b]/15 rounded-lg p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute top-0 right-10 w-20 h-1 bg-gradient-to-r from-transparent to-[#c8a84b]" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#c8a84b] mx-auto mb-4" />
                  <h3 className="font-label text-2xl text-[#ffffff] tracking-wider mb-2 uppercase">Grace & Peace!</h3>
                  <p className="p-body text-[#ffffff]/80 text-md leading-relaxed mb-6 font-serif italic max-w-sm mx-auto">
                    "Your message has been received. Our prayer intercessors and discipleship crew have set this aside for sincere prayer and response."
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="font-label text-[10px] tracking-[2.5px] uppercase text-[#c8a84b] font-bold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="e.g. Deborah Parker"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="form-input focus:ring-1 focus:ring-[#c8a84b] focus:border-[#c8a84b]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="font-label text-[10px] tracking-[2.5px] uppercase text-[#c8a84b] font-bold">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      placeholder="e.g. deborah@believer.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-input focus:ring-1 focus:ring-[#c8a84b] focus:border-[#c8a84b]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="font-label text-[10px] tracking-[2.5px] uppercase text-[#c8a84b] font-bold">
                      Subject Matter
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="form-input bg-[#1a1a14] text-[#ffffff] focus:ring-1 focus:ring-[#c8a84b] focus:border-[#c8a84b]"
                    >
                      <option value="Prayer Request">Prayer Request / Intercession</option>
                      <option value="Theological Question">Theological / Bible Inquiry</option>
                      <option value="Discipleship Support">Discipleship Guidance</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="font-label text-[10px] tracking-[2.5px] uppercase text-[#c8a84b] font-bold">
                      Your Sincere Message
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Please write details about your prayer request or query..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="form-textarea min-h-[160px] focus:ring-1 focus:ring-[#c8a84b] focus:border-[#c8a84b]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary w-full mt-2"
                  >
                    {submitting ? 'Submitting request...' : 'Send Message to Brethren'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
