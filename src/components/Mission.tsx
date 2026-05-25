import { motion } from 'motion/react';
import PageHeader from './PageHeader';
import { ShieldCheck, MessageSquarePlus, Flame, HeartHandshake } from 'lucide-react';

export default function Mission() {
  const values = [
    {
      icon: <Flame className="w-8 h-8 text-[#c8a84b]" />,
      title: "1. Spirit-Led Devotion",
      description: "Intellectual knowledge without the Holy Spirit is dry. We abide daily in the Counselor's guidance, letting Him direct opportunities, spark boldness, and heal broken hearts."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#c8a84b]" />,
      title: "2. Biblically Centered Truth",
      description: "Our foundation is timeless. We stand firmly on the inspired, inerrant Scriptures as our absolute benchmark for theology, life, relationships, and modern ministry."
    },
    {
      icon: <MessageSquarePlus className="w-8 h-8 text-[#c8a84b]" />,
      title: "3. Active Faith Multiplication",
      description: "The Gospel is not meant to be safely hoarded. Disciples are called to produce disciplemakers. We dedicate ourselves to training believers to duplicate their faith in others."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#c8a84b]" />,
      title: "4. Grace-Driven Relational Love",
      description: "Jesus walked in absolute truth and absolute grace. We reject judgmental hostility, striving to meet skeptics, searchers, and broken souls with sacrificial love and complete empathy."
    }
  ];

  return (
    <div id="mission-view">
      <PageHeader
        title="Our Mission & Values"
        subtitle="Jesus was sent to save us. Now we are sent to share Him."
      />

      <section className="py-20 bg-[#0a0a06]" id="mission-body">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="long-content"
          >
            {/* The Great Decree */}
            <h2 className="text-center font-display uppercase tracking-[2px] mb-8 text-[#ffffff]">The Sovereign Intent</h2>
            <p className="p-large text-[#ffffff]/80 text-center font-serif italic leading-relaxed mb-10 md:px-6">
              "We do not exist to build massive, comfortable country-club churches. We exist to equip, fuel, and send ordinary saints into extraordinary harvest fields, carrying the message of eternal life."
            </p>
            
            <div className="gold-rule" />

            <h3 className="uppercase tracking-[3px] text-[#c8a84b] mt-12 mb-4 font-bold">The Mission Declaration</h3>
            <p className="p-body text-[#ffffff]/80">
              To ignite a relational Gospel movement for everyone. We strive to proclaim the uncompromised salvation of Jesus Christ, disciple believers in first-century spiritual practices, and equip everyone to multiply faith with warm relational grace and scriptural depth.
            </p>

            <h3 className="uppercase tracking-[3px] text-[#c8a84b] mt-10 mb-4 font-bold">The Multi-Cultural Vision</h3>
            <p className="p-body text-[#ffffff]/80">
              We envision a worldwide community of disciples who view themselves not as consumers of spiritual goods, but as divine ambassadors. We see a future where every home, workplace, and college becomes a satellite of God's redemption, sharing the peace of the cross with absolute confidence.
            </p>

            <blockquote>
              "As you sent me into the world, so I have sent them into the world."
              <cite>— John 17:18 (Our Lord's Prayer for the Brethren)</cite>
            </blockquote>

            <div className="gold-rule my-14" />

            {/* Core Values Grid */}
            <h2 className="text-center font-display uppercase tracking-[2px] mb-12 text-[#ffffff]">Core Pillars of Our Ministry</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#111108] p-6 rounded-lg border border-[#c8a84b]/10 hover:border-[#c8a84b]/40 transition-colors flex flex-col items-center text-center"
                >
                  <div className="mb-4 bg-[#c8a84b]/5 p-3 rounded-full w-fit mx-auto">
                    {v.icon}
                  </div>
                  <h4 className="font-label text-[#c8a84b] tracking-[2px] font-bold text-md mb-2 uppercase text-center w-full">
                    {v.title}
                  </h4>
                  <p className="p-body text-[#ffffff]/70 text-sm leading-relaxed text-center">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
