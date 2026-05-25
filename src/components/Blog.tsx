import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../data';

// Definition of each essay's multi-paragraph body, subtitles, and scriptures
const essays: Record<string, { subtitle: string; paragraphs: string[]; scriptures: string[] }> = {
  'post-1': {
    subtitle: "One bed. Three and a half hours away. And God's hands on the wheel.",
    paragraphs: [
      "I am going to tell you something I do not say out loud very often.",
      "Not because it is hard to talk about — I have talked about it plenty. I tell it because someone reading this right now is sitting at their own version of that road, and they need to know what I know now: it was not the end. It was the beginning.",
      "It was the middle of the afternoon when I sat at the end of a dead end road in my truck. Both literally and figuratively. I was done. I had run out of reasons to drive back, and everything in me had decided that was acceptable.",
      "Before the VA. Before Ginny. Before any of the healing or the growth or the life I have now. There was that afternoon.",
      "I want to say that plainly, without softening it, because I know there are people reading this who are sitting in their own version of that moment right now. Not necessarily in a truck on a dead end road, but at the end of something. Out of options. Out of reasons.",
      "The lie feels different when you are inside it. From the outside, looking back, it is obvious that it was a lie. But from inside, it has this terrible logic to it. It makes sense. The enemy is very good at making despair feel like reason.",
      "There Was One Bed",
      "An advertisement came over the radio for a civilian mental health facility. I laughed. I said there’s no way I am going to see someone who wouldn’t understand me or what I was going through. Then a random thought came… What if there is someone who could understand me? What if there was someone who knew what I was going through? I looked up veteran mental health and found a number. I called a veteran mental health line. I had decided I was not going to talk to a civilian — no civilian could understand what I was carrying. So I looked up veteran mental health, made the call, and the voice on the other end told me the Ann Arbor VA was full. No beds available.",
      "I remember thinking: well, that is it then. It is not meant to be!",
      "And then he said, \"One second.\" Please stay on the line. Let me call Battle Creek.",
      "There was one bed.",
      "One.",
      "Three and a half hours away. He made me promise I would come. And something in me — something I now understand was not my own will, because my will was spent — said yes.",
      "I started the truck. I started driving.",
      "God Drove",
      "It was the longest drive of my life. Every underpass on that highway, the enemy told me to drive into the pillar. To end it. That nobody needed me. That I was doing them a favor.",
      "I drove past every single one.",
      "I did not complete that drive. God did. His hands were on the wheel. That is the only explanation I have. My will was gone. My reasons were gone. But I kept driving.",
      "Looking back now, I believe the enemy was scared. I believe he knew what God was going to do with that story. He was not trying to destroy a broken man. He was trying to prevent a testimony.",
      "I walked through the doors of the Battle Creek VA. And the person who checked me in that night was a young woman named Ginny.",
      "She is my wife now.",
      "What I Want You to Hear",
      "If you are in that place right now — the place where the math does not add up and the reasons have run out, I want you to hear something directly.",
      "The enemy is not just attacking you. He is attacking the testimony he knows God is going to build out of your survival. He knows what is on the other side of the drive you are afraid to take. He knows who is waiting at the end of it.",
      "That is why he is working this hard on you.",
      "You are not too far gone. You never were. Romans 5:8 says God showed His love for us in that while we were still sinners, while we were still in it, still a mess, still nowhere close to having it together, Christ died for us. Not after. While.",
      "The charges have already been dropped. The case is already closed. The enemy is reading from a file God already sealed.",
      "Make the drive. Keep the promise. Stay on the road.",
      "There is one bed with your name on it."
    ],
    scriptures: [
      "\"For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery.\" — Galatians 5:1"
    ]
  },
  'post-2': {
    subtitle: "For the person quietly believing the lie that grace is for other people.",
    paragraphs: [
      "I know the lie.",
      "It does not come loudly. It does not announce itself. It just settles in quietly, like carbon monoxide, you cannot smell it, but it is filling the room.",
      "It sounds like this: Grace is real. But probably not for someone who has done what you have done.",
      "Or this: God forgives. But probably not this many times. Probably not this particular thing.",
      "Or this, which is the version I lived in the longest: You have blown it too many times to be taken seriously by God anymore.",
      "I am writing this for the person who has that voice running in the background. The one who shows up at church and sings the songs and says the right things, but privately has decided that the grace being talked about up front does not quite reach as far as where you actually are.",
      "It Is a Lie",
      "Not a misunderstanding. Not a theological gray area. A lie. From the father of lies. Who knows exactly how to weaponize your own history against you.",
      "Romans 5:8 is one of the most important sentences in the Bible, and I do not think we sit with it long enough. It says God showed His love for us in that while we were still sinners, Christ died for us.",
      "While. Not after. Not once we had made progress. Not once we had demonstrated we were serious about changing.",
      "While we were still in it. Still a wreck. Still failing. Still nowhere close to the people we wanted to be.",
      "That is when Christ went to the cross.",
      "That means the cross was not designed for people who had it together. It was designed for people who did not and never would on their own. It was designed for you. It was designed for me. It was designed for every person who has ever sat alone at night with the weight of what they have done and wondered if they had finally crossed some invisible line into unforgivable territory.",
      "There is no such line. Jesus already went farther than you can go.",
      "The Charges Have Been Dropped",
      "Romans 8:33-34 asks, \"Who shall bring any charge against God's elect?\" It is God who justifies. Who is to condemn? Christ Jesus is the one who died more than that, who was raised, who is at the right hand of God, who is interceding for us.",
      "The enemy brings your past into the room like a prosecutor laying out evidence. And it feels real because the evidence is real. You did those things. Those things happened. The record is accurate.",
      "But the case has already been heard. The verdict has already been rendered. Jesus stood in that courtroom in your place and took what was yours. The file is closed. The charges have been dropped.",
      "When the enemy reads from it, he is reading from a file that does not exist anymore in the court that matters.",
      "What This Actually Requires of You",
      "Not perfection. Not having it together. Not a certain number of consecutive clean days before God will take you seriously again.",
      "Faith. And repentance. And if you have failed at repentance a hundred times, faith and repentance one more time.",
      "That is it. Access to God is not gated by your track record. It is gated by whether you are willing to come back.",
      "Come back.",
      "The devil knows your name but calls you by your sins. God knows your sins and calls you by your name. You are His. And He has not stopped calling."
    ],
    scriptures: [
      "\"But God shows His love for us in that while we were still sinners, Christ died for us.\" — Romans 5:8"
    ]
  },
  'post-3': {
    subtitle: "Pray. Care. Share. A practical rhythm anyone can actually live.",
    paragraphs: [
      "Most Christians I know want to share their faith. They genuinely do. They care about the people in their lives. They believe what they believe. They are not trying to keep it to themselves.",
      "But somewhere between believing the Gospel and actually sharing it with another human being, something locks up.",
      "Part of it is fear of rejection. Part of it is not wanting to damage a relationship. Part of it is the creeping suspicion that they do not know enough theology to hold their own if the person pushes back.",
      "And part of it, if we are being honest, is that they have seen the alternative done badly. The awkward ambush at the wrong moment. So instead of doing it wrong, they do not do it at all.",
      "Here is a framework that is simple enough to actually live. Not a script. Not a technique. A rhythm. Three words: Pray. Care. Share.",
      "Pray First — Before Anything Else",
      "Pick someone in your life who does not know Jesus or who has walked away from Him. Write their name down. And start praying for them. By name. Every day.",
      "Not a complicated prayer. Not a long one. Just: God, I am asking You to work in this person's life. Open a door. Soften their heart. Give me an opportunity and the courage to walk through it.",
      "Do this for thirty days and watch what happens. The person you have been praying for consistently does not look the same to you after thirty days. You start seeing them the way God sees them. You start noticing openings that were always there.",
      "Prayer is not the pre-work before the real evangelism starts. Prayer is the work.",
      "Care Practically — Show Up Before You Speak Up",
      "The Gospel travels on ordinary kindness.",
      "Most people who eventually come to faith can point to a person who showed up for them before they started talking about Jesus. Someone who noticed them. Someone who met a real need without keeping score.",
      "This is not manipulation. You are not being nice to people, so you can eventually convert them. You are loving your neighbor because Christ loved you. The care is real. The relationship is real.",
      "People do not generally want to hear the Gospel from a stranger. They want to hear it from someone who has already proved they care whether the person lives or dies.",
      "Share When the Door Opens — And It Will",
      "Prayer and care create openings. Consistently, reliably, over time, a moment will come when they ask you something. Or something hard happens in their life, and they turn to you. Or they notice you are different and want to know why.",
      "That is the moment. Walk through it.",
      "You do not need a seminary degree to share your testimony. You just need to answer three questions: What was my life like before Jesus? What happened? What is different now?",
      "That is your story. Nobody can argue with it. It is what happened to you.",
      "You are not responsible for saving anyone. That is God's job. You are responsible for being faithful — for praying, for caring, for speaking when the moment comes. Plant the seed. Water it. Trust God to make it grow."
    ],
    scriptures: [
      "\"How then will they call on Him in whom they have not believed? And how are they to believe in Him of whom they have never heard?\" — Romans 10:14"
    ]
  }
};

export default function Blog() {
  const [activePostId, setActivePostId] = useState<string | null>(null);

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
    <div id="blog-view" className="bg-[#0a0a06] text-white selection:bg-[#c8a84b]/20 selection:text-white min-h-screen">
      <PageHeader
        title="BLOG"
        subtitle="Exploring the rich soil of biblical theology and organic discipleship."
      />

      <section className="py-36 bg-[#0a0a06]" id="blog-body">
        <div className="container max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {!activePostId ? (
              /* Centered Block Container with strictly left-aligned contents */
              <motion.div
                key="blog-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-16 max-w-2xl mx-auto"
              >
                <div className="space-y-8">
                  {BLOG_POSTS.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => handleOpenPost(post.id)}
                      className="group flex flex-col items-start text-left bg-[#111108] border border-[#c8a84b]/10 rounded-lg px-8 py-10 cursor-pointer hover:border-[#c8a84b]/30 hover:bg-[#111108]/90 transition-all duration-300 shadow-xl w-full"
                    >
                      {/* Flex layout for Number & Meta */}
                      <div className="flex justify-between items-baseline w-full mb-3">
                        <span className="font-display text-4xl text-[#c8a84b]/30 group-hover:text-[#c8a84b]/60 transition-colors">
                          {post.number}
                        </span>
                        <span className="font-label text-[10px] tracking-[1.5px] text-[#ffffff]/40 uppercase text-right">
                          {post.meta}
                        </span>
                      </div>
                      
                      {/* Category */}
                      <span className="font-label text-xs tracking-[3px] text-[#c8a84b] uppercase block mb-2 font-bold">
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-2xl sm:text-3xl uppercase text-white tracking-wider leading-tight group-hover:text-[#c8a84b] transition-colors mb-3">
                        {post.title}
                      </h3>

                      {/* Subtitle / Excerpt */}
                      <p className="font-serif text-sm sm:text-base text-[#ffffff]/70 leading-relaxed mb-6">
                        {essays[post.id]?.subtitle || post.excerpt}
                      </p>

                      {/* Divider */}
                      <div className="w-12 h-px bg-[#c8a84b]/20 mb-6" />

                      {/* CTA label */}
                      <span className="font-label text-[10px] tracking-[2px] text-[#c8a84b] group-hover:text-white duration-200 uppercase font-bold">
                        READ POST →
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Reader Mode - Completely Centered Panel with Beautiful Book-Like left-aligned content */
              activePost && essays[activePostId] && (
                <motion.div
                  key="blog-reader"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#111108]/90 border border-[#c8a84b]/15 rounded-lg p-6 sm:p-12 shadow-2xl relative max-w-2xl mx-auto text-left"
                  id="blog-reader-panel"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a84b] to-transparent" />

                  {/* Back Navigation Bar */}
                  <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#c8a84b]/10">
                    <button
                      onClick={handleClosePost}
                      className="inline-flex items-center gap-1.5 font-label text-[10px] tracking-[3px] text-[#c8a84b] uppercase hover:text-white transition-colors cursor-pointer"
                      id="blog-back-button"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Go Back
                    </button>
                    <span className="font-label text-[9px] tracking-[2px] text-[#ffffff]/40 uppercase">
                      {activePost.meta}
                    </span>
                  </div>

                  {/* Title and Category block */}
                  <div className="mb-8">
                    <span className="font-label text-xs tracking-[4px] text-[#c8a84b] uppercase block mb-2 font-semibold">
                      {activePost.category}
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-widest leading-snug">
                      {activePost.title}
                    </h2>
                    {essays[activePostId].subtitle && (
                      <p className="font-serif italic text-[#c8a84b] text-base sm:text-lg mt-3">
                        {essays[activePostId].subtitle}
                      </p>
                    )}
                    <div className="w-16 h-px bg-[#c8a84b]/30 mt-6" />
                  </div>

                  {/* Body Paragraphs Render (Book-style, separated by margins) */}
                  <div className="space-y-6 font-serif text-base sm:text-lg text-[#ffffff]/85 leading-relaxed">
                    {essays[activePostId].paragraphs.map((pText, pIdx) => {
                      // Subheading detection for nicer typography
                      const isSubheading = pText.length < 50 && (pText === "There Was One Bed" || pText === "God Drove" || pText === "What I Want You to Hear" || pText === "It Is a Lie" || pText === "The Charges Have Been Dropped" || pText === "What This Actually Requires of You" || pText === "Pray First — Before Anything Else" || pText === "Care Practically — Show Up Before You Speak Up" || pText === "Share When the Door Opens — And It Will");
                      
                      if (isSubheading) {
                        return (
                          <h4 key={pIdx} className="font-display text-xl tracking-wider text-white uppercase pt-6 pb-2 border-b border-[#c8a84b]/10">
                            {pText}
                          </h4>
                        );
                      }
                      
                      return (
                        <p key={pIdx}>
                          {pText}
                        </p>
                      );
                    })}
                  </div>

                  {/* Associated Scripture Block */}
                  {essays[activePostId].scriptures && essays[activePostId].scriptures.length > 0 && (
                    <div className="bg-[#0a0a06]/90 border border-[#c8a84b]/20 p-6 sm:p-8 rounded-lg my-10 text-left">
                      <span className="font-label text-[10px] tracking-[3px] text-[#c8a84b] uppercase font-bold block mb-3">
                        GUIDING TRUTH:
                      </span>
                      {essays[activePostId].scriptures.map((scrip, index) => (
                        <p
                          key={index}
                          className="font-serif text-[#ffffff]/90 italic leading-relaxed text-sm sm:text-base border-l-2 border-[#c8a84b] pl-4"
                        >
                          {scrip}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Emergency line helper inside Blog Post 1 */}
                  {activePostId === 'post-1' && (
                    <div className="border border-red-900/40 bg-red-950/20 rounded p-6 my-8 text-left">
                      <p className="font-serif text-sm text-white/90">
                        <span className="font-bold text-[#c8a84b]">If you are currently in crisis:</span> Call or text <strong>988</strong> to stream immediate support from the National Suicide & Crisis Lifeline. Veterans: <strong>988, then press 1</strong>. You are never alone in this fight.
                      </p>
                    </div>
                  )}

                  {/* Footer metadata inside Reader */}
                  <div className="flex justify-between items-center pt-8 border-t border-[#c8a84b]/15 mt-12 bg-transparent">
                    <button
                      onClick={handleClosePost}
                      className="font-label text-[10px] tracking-[3px] text-[#c8a84b] hover:text-white transition-colors uppercase font-bold cursor-pointer"
                    >
                      ← FINISH READING
                    </button>
                    <span className="font-label text-[8px] tracking-[2px] text-[#ffffff]/45 uppercase font-bold">
                      Thomas Carver
                    </span>
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
