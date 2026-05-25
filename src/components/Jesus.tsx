import { useState } from 'react';
import { motion } from 'motion/react';
import PageHeader from './PageHeader';
import { ShieldAlert, BookOpen, Sun, Compass, HeartPulse, Sparkles } from 'lucide-react';

export default function Jesus() {
  const [activeClaimIdx, setActiveClaimIdx] = useState(0);

  const claims = [
    {
      label: "John 14:6",
      title: "The Way, Truth, & Life",
      verse: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'",
      icon: <Compass className="w-5 h-5 text-[#c8a84b]" />,
      explanation: "Jesus does not merely point to a map or teach a set of rules. He claims to be the physical Bridge itself. Through His substitutionary death, He is the sole pathway back to the presence of God."
    },
    {
      label: "John 8:12",
      title: "Light of the World",
      verse: "Again Jesus spoke to them, saying, 'I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.'",
      icon: <Sun className="w-5 h-5 text-[#c8a84b]" />,
      explanation: "In our broken, confused generation, Christ shines as absolute moral and spiritual truth. To follow Him is to escape the dark cycle of sin, guilt, and existential hopelessness."
    },
    {
      label: "John 11:25",
      title: "Resurrection & Life",
      verse: "Jesus said to her, 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live.'",
      icon: <HeartPulse className="w-5 h-5 text-[#c8a84b]" />,
      explanation: "Christ holds sovereign authority over biological decay. His physical resurrection is the historical absolute guaranteeing that biological death is not the finish line for believers."
    },
    {
      label: "John 6:35",
      title: "The Bread of Life",
      verse: "Jesus said to them, 'I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst.'",
      icon: <Sparkles className="w-5 h-5 text-[#c8a84b]" />,
      explanation: "We search for satisfaction in wealth, career validation, relationships, and substances. Jesus claims to satisfy the deep, empty ache inside our souls—providing a permanent spiritual peace."
    }
  ];

  return (
    <div id="jesus-view">
      <PageHeader
        title="Who is Jesus?"
        subtitle="The ultimate revelation of God's unconditional love and holiness."
      />

      <section className="py-20 bg-[#0a0a06]" id="jesus-body">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="long-content"
          >
            {/* The Mystery of the Incarnation */}
            <h2 className="font-display uppercase tracking-[2px] mb-6 text-[#ffffff] text-center">Fully God. Fully Man.</h2>
            <p className="p-body text-[#ffffff]/80">
              For ages, humanity has asked: <i>What is God like?</i> Jesus is the absolute answer. Hebrews 1:3 declares that He is the <b>"radiance of the glory of God and the exact imprint of His nature."</b> He is not just a profound teacher or mystical moral guide. He is God Incarnate, taking on human form to undergo our struggles, take our guilt, and restore our purpose.
            </p>

            <h3 className="uppercase tracking-[3px] text-[#c8a84b] mt-10 mb-4 font-bold">The Sovereignty of His Nature</h3>
            <p className="p-body text-[#ffffff]/80">
              Scripture teaches that all things were created through Him and for Him (Colossians 1:16). Yet, out of infinite grace, this Architect of the cosmos wrapped Himself in humble swaddling cloths, subjected Himself to physical fatigue, endured unjust public trial, and accepted capital punishment on a wooden cross for us.
            </p>

            {/* Interactive Tab Interface for Jesus' Claims */}
            <div className="my-16 bg-[#111108] p-6 sm:p-8 rounded-lg border border-[#c8a84b]/20 shadow-2xl relative">
              <div className="absolute top-0 right-10 w-20 h-1 bg-gradient-to-r from-transparent to-[#c8a84b]" />
              
              <span className="eyebrow block text-center mb-4">Scripture Focus</span>
              <h4 className="font-display text-3xl uppercase text-[#ffffff] tracking-[1.5px] mb-6 text-center">
                The "I AM" Claims Explorer
              </h4>
              <p className="p-body text-[#ffffff]/70 text-sm mb-6 text-center max-w-xl mx-auto">
                In the Gospel of John, Jesus uses the divine name of God ("I AM") to describe His nature. Click the claims below to explore their eternal weight:
              </p>

              {/* Tabs list */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {claims.map((claim, idx) => (
                  <button
                    key={claim.title}
                    onClick={() => setActiveClaimIdx(idx)}
                    className={`p-3 text-center border font-label text-[10px] tracking-[1.5px] uppercase transition-all rounded ${
                      activeClaimIdx === idx
                        ? 'bg-[#c8a84b] text-[#0a0a06] border-[#c8a84b] font-bold'
                        : 'bg-[#1a1a14] text-[#ffffff]/70 border-[#c8a84b]/15 hover:border-[#c8a84b]/50'
                    }`}
                  >
                    {claim.title}
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <motion.div
                key={activeClaimIdx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0a06]/60 p-6 rounded border border-[#c8a84b]/10 min-h-[160px] flex flex-col items-center text-center justify-center animate-fade"
              >
                <div className="flex items-center justify-center gap-3 mb-4 text-[#c8a84b]">
                  {claims[activeClaimIdx].icon}
                  <span className="font-label text-xs tracking-[2px] uppercase font-bold text-[#c8a84b]/90">
                    {claims[activeClaimIdx].label}
                  </span>
                </div>
                <blockquote className="font-serif italic text-lg text-[#ffffff] border-y border-[#c8a84b]/20 py-3 text-center my-4 px-4 w-full max-w-2xl leading-normal">
                  "{claims[activeClaimIdx].verse}"
                </blockquote>
                <p className="p-body text-[#ffffff]/70 text-sm leading-relaxed text-center max-w-xl mx-auto">
                  {claims[activeClaimIdx].explanation}
                </p>
              </motion.div>
            </div>

            <h3 className="uppercase tracking-[3px] text-[#c8a84b] mt-10 mb-4 font-bold">The Historical Absolute: Resurrected</h3>
            <p className="p-body text-[#ffffff]/80">
              The Christian faith stands or falls on a historical fact: <b>did Jesus physically rise from the grave?</b> Unlike generic philosophies, historic Christianity appeals directly to empirical history. Apostle Paul writes that if Christ did not rise, our preaching is empty and faith is useless. But He rose, appearing to more than 500 eyewitnesses at once. The empty tomb changed cowering, terrified disciples into martyrs who turned the Roman Empire upside down.
            </p>

            <blockquote className="my-12">
              "For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many."
              <cite>— Mark 10:45</cite>
            </blockquote>

            <h3 className="uppercase tracking-[3px] text-[#c8a84b] mt-10 mb-4 font-bold">His Sincere Invitation to You</h3>
            <p className="p-body text-[#ffffff]/80">
              Jesus does not demand that you clean up your record before approaching Him. He asks for your surrender and willingness to let Him heal your brokenness. He says: <i>"Come to me, all who labor and are heavy laden, and I will give you rest."</i>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
