import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';
import { ArrowLeft, BookOpen, Clock, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../data';

export default function Blog() {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  // Theological essays for the selective articles
  const essays: Record<string, { body: string; scriptures: string[]; steps: string[] }> = {
    'post-1': {
      body: "In secular thinking, a recipient is judged worthy of a prize first. Merit creates the transaction. Religious thinking copies this matrix, insisting that if a man prays enough, fasts intensely, works consistently, and adheres to an unbending liturgical codex, God will record favor. This is religious legalism—it is safe, transactional, and entirely dead. Christian grace destroys this paradigm completely.",
      scriptures: [
        "Ephesians 2:8-9: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.'",
        "Galatians 5:1: 'For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery.'"
      ],
      steps: [
        "Shattered Pride: When salvation is entirely free, your religious merit, social background, or lineage mean zero. Only true humility remains.",
        "Unrestrained Gratitude: Loving someone out of fear produces slavery. Loving someone out of absolute favor produces true devotion.",
        "Supernatural Mercy: Under a legalistic mindset, we judge others. Under absolute unmerited favor, we look at coworkers of sin with the quiet compassion of a fellow patient in a hospital."
      ]
    },
    'post-2': {
      body: "Fear of modern rejection is the single greatest block keeping ordinary believers from speaking of Christ in active public squares. We dread being labeled uneducated, close-minded, or aggressive. Christ's model was entirely different. He did not seek to win combative debates. He sought relational, loving connection. When He met the Samaritan woman at the well, His approach was entirely therapeutic, relational, and targeted at her inner thirst.",
      scriptures: [
        "1 Peter 3:15: 'But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks... yet do it with gentleness and respect.'",
        "Colossians 4:6: 'Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person.'"
      ],
      steps: [
        "Abide First: If you haven't sat with Jesus in silence, you have nothing to spill over. Speak of Him because you love Him, not as a sales pitching quota tracker.",
        "Seek Thirst: Ask gentle questions about life, meaning, purpose, and suffering. Listen twice as much as you output.",
        "Point to Christ: Never promote a specific political structure or dry denomination first. Keep the focus entirely on the cross and resurrecting grace of Jesus."
      ]
    },
    'post-3': {
      body: "Modern church culture has mutated into a theater. People file into structured seats, watch high-production stages, drop checks, and exit with zero intimate connection to the believer next to them. If this is discipleship, it is completely foreign to the New Testament apostolic church. True fellowship—the Greek word 'Koinonia'—means life-on-life communion, deep spiritual sharing, absolute relational transparency, and communal accountability.",
      scriptures: [
        "Hebrews 10:24-25: 'And let us consider how to stir up one another to love and good works, not neglecting to meet together...'",
        "Acts 2:42: 'And they devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and the prayers.'"
      ],
      steps: [
        "Exchange superficial greetings: Ask people how they are truly struggling against sin and doubt.",
        "Practice daily life-on-life mentorship: Open your dining room, invite neighbors, model a faithful marriage, and pray sincerely.",
        "Sacrifice together: Stand as a mutual shield against financial, physical, and emotional dry seasons in your community."
      ]
    }
  };

  const handleOpenPost = (id: string) => {
    setActivePostId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePost = () => {
    setActivePostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePost = BLOG_POSTS.find((p) => p.id === activePostId);

  return (
    <div id="blog-view">
      <PageHeader
        title="Articles & Truth"
        subtitle="Exploring the rich soil of biblical theology and organic discipleship."
      />

      <section className="py-20 bg-[#0a0a06]" id="blog-body">
        <div className="container max-w-4xl">
          <AnimatePresence mode="wait">
            {!activePostId ? (
              /* Grid Layout */
              <motion.div
                key="blog-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="blog-grid">
                  {BLOG_POSTS.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => handleOpenPost(post.id)}
                      className="blog-card group hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full bg-[#111108] border border-[#c8a84b]/10 rounded overflow-hidden cursor-pointer"
                    >
                      {/* Decorative image-like placeholder card with golden number styling */}
                      <div className="blog-card-image pt-12 pb-8 flex items-center justify-center bg-[#1a1a14] border-b border-[#c8a84b]/10">
                        <span className="number font-display text-8xl text-[#c8a84b]/10 group-hover:text-[#c8a84b]/20 transition-colors">
                          {post.number}
                        </span>
                      </div>

                      <div className="blog-card-content p-6 flex flex-col flex-grow">
                        <span className="category font-label text-[10px] tracking-widest text-[#c8a84b] uppercase mb-2 block">
                          {post.category}
                        </span>
                        <h3 className="font-display text-2xl text-[#ffffff] group-hover:text-[#c8a84b] transition-colors leading-tight mb-3">
                          {post.title}
                        </h3>
                        <p className="p-body text-xs text-[#ffffff]/60 leading-relaxed mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <span className="meta font-label text-[10px] tracking-wider text-[#ffffff]/40 uppercase mt-auto block pt-2 border-t border-[#c8a84b]/5">
                          {post.meta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Reader Overlay Frame */
              activePost && essays[activePostId] && (
                <motion.div
                  key="blog-reader"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#111108] border border-[#c8a84b]/15 rounded-lg p-6 sm:p-10 shadow-2xl relative"
                  id="blog-reader-panel"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#c8a84b]" />

                  {/* Back Navigation Bar */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#c8a84b]/10">
                    <button
                      onClick={handleClosePost}
                      className="inline-flex items-center gap-1.5 font-label text-[10px] tracking-widest text-[#c8a84b] uppercase hover:text-[#ffffff] transition-colors"
                      id="blog-back-button"
                    >
                      <ArrowLeft className="w-4 h-4" /> Go back
                    </button>
                    <span className="meta font-label text-[10px] tracking-wider text-[#ffffff]/40 uppercase">
                      {activePost.meta}
                    </span>
                  </div>

                  {/* Title and Category block */}
                  <div className="mb-8">
                    <span className="eyebrow block mb-2">{activePost.category}</span>
                    <h2 className="font-display text-4xl sm:text-5xl text-[#ffffff] uppercase tracking-wide leading-tight mt-1 mb-2">
                      {activePost.title}
                    </h2>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-6 font-serif text-lg text-[#ffffff]/85 leading-relaxed">
                    <p className="first-letter:text-5xl first-letter:font-display first-letter:text-[#c8a84b] first-letter:mr-3 first-letter:float-left">
                      {essays[activePostId].body}
                    </p>

                    <div className="gold-rule my-10" />

                    {/* Step details from the essay */}
                    <div className="space-y-4 my-8">
                      <span className="block font-label text-xs tracking-widest text-[#c8a84b] uppercase font-bold">
                        Practical Discipleship Applications:
                      </span>
                      <ol className="space-y-4">
                        {essays[activePostId].steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#c8a84b]/10 text-[#c8a84b] text-[10px] font-label font-bold flex items-center justify-center border border-[#c8a84b]/30 mt-1 flex-shrink-0">
                              {idx + 1}
                            </div>
                            <p className="p-body text-sm text-[#ffffff]/85 leading-relaxed font-serif">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Associated Scriptures */}
                    <div className="bg-[#0a0a06]/85 border border-[#c8a84b]/15 p-6 rounded-lg my-10">
                      <span className="font-label text-xs tracking-widest text-[#c8a84b] uppercase font-bold block mb-4">
                        Guiding Scriptures for Study:
                      </span>
                      <div className="space-y-4 pr-2">
                        {essays[activePostId].scriptures.map((scrip, index) => (
                          <p
                            key={index}
                            className="text-xs text-[#ffffff]/70 italic leading-relaxed border-l-2 border-[#c8a84b]/40 pl-4 py-0.5"
                          >
                            {scrip}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions bar at bottom */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#c8a84b]/10 mt-10">
                    <button
                      onClick={handleClosePost}
                      className="font-label text-[10px] tracking-wider text-[#c8a84b] uppercase"
                    >
                      Finish Reading
                    </button>

                    <div className="flex items-center gap-2">
                      <span className="font-label text-[9px] tracking-widest text-[#ffffff]/30 uppercase">
                        Soli Deo Gloria
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
