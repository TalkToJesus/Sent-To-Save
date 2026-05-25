import React from 'react';
import PageHeader from './PageHeader';

export default function Grow() {
  return (
    <div id="grow-view" className="bg-[#0a0a06] text-white selection:bg-[#c8a84b]/20 selection:text-white pb-12">
      <PageHeader
        title="Grow"
        subtitle="Daily disciplines and rhythms for walking with Jesus."
      />

      <section className="py-36 bg-[#0a0a06]" id="grow-body">
        <div className="container max-w-2xl mx-auto px-6 sm:px-8 flex flex-col items-center">
          
          {/* Centered Column with Left-aligned Introductory Narrative */}
          <div className="space-y-8 text-left text-[#ffffff]/80 font-serif text-lg sm:text-xl leading-relaxed mb-36 max-w-xl mx-auto w-full">
            <p>
              You said yes to Jesus. Or you are figuring out what that even means. Or you have been walking with Him for years and you know the daily fight as well as anyone. This page is for all three.
            </p>
            <p>
              Sanctification is not a feeling. It is the slow, daily work of becoming more like Christ. Below are the rhythms and resources that help. Take what you need. Leave what you do not.
            </p>
          </div>

          {/* ─── DAILY SECTION ─── */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto" id="grow-daily-section">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center leading-[1.2]">
              DAILY
            </h2>
            <div className="space-y-16">
              <div className="space-y-4">
                <h3 className="font-label text-xs sm:text-sm tracking-[3px] text-[#c8a84b] font-bold uppercase text-left">
                  PRAY BEFORE THE PHONE
                </h3>
                <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
                  Before your feet hit the floor — before you reach for the screen — talk to God. Even thirty seconds. The first voice you hear sets the tone for everything that follows.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-label text-xs sm:text-sm tracking-[3px] text-[#c8a84b] font-bold uppercase text-left">
                  OPEN THE WORD
                </h3>
                <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
                  Start with the Gospel of John. Then Romans. Then Proverbs — one chapter per day of the month, there are thirty-one for a reason. A Bible app on your phone is fine. A paper Bible is better. Whatever gets it in front of you daily.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-label text-xs sm:text-sm tracking-[3px] text-[#c8a84b] font-bold uppercase text-left">
                  EVENING REFLECTION
                </h3>
                <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
                  Five minutes at the end of the day. What was supposed to happen? What actually happened? What do I bring to God and leave at His feet before tomorrow? Honest examination builds honest faith.
                </p>
              </div>
            </div>
          </div>

          {/* ─── WEEKLY SECTION ─── */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto" id="grow-weekly-section">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center leading-[1.2]">
              WEEKLY
            </h2>
            <div className="space-y-16">
              <div className="space-y-4">
                <h3 className="font-label text-xs sm:text-sm tracking-[3px] text-[#c8a84b] font-bold uppercase text-left">
                  SABBATH / REST
                </h3>
                <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
                  Even God rested. One day a week, unplug from the work and the screens and the hustle. Be with God. Be with people you love. The world will not collapse without you.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-label text-xs sm:text-sm tracking-[3px] text-[#c8a84b] font-bold uppercase text-left">
                  CHURCH
                </h3>
                <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
                  Find a Bible-preaching local church and commit to it. Not perfect. Faithful. Show up consistently. Get into a community of believers who know you by name.
                </p>
              </div>
            </div>
          </div>

          {/* ─── COMMUNITY SECTION ─── */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto" id="grow-community-section">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center leading-[1.2]">
              COMMUNITY
            </h2>
            <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
              Every person needs at least one other person who can ask the hard questions and expect honest answers. A trusted brother or sister, pastor, mentor, accountability partner. If you do not have that person, your next assignment is to find them.
            </p>
          </div>

          {/* ─── RECOMMENDED READING SECTION ─── */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto" id="grow-reading-section">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center leading-[1.2]">
              RECOMMENDED READING
            </h2>
            <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
              The Bible (ESV is what we use most). <span className="italic font-bold text-white">Mere Christianity</span> by C.S. Lewis. <span className="italic font-bold text-white font-serif">Knowing God</span> by J.I. Packer. <span className="italic font-bold text-white font-serif">The Pursuit of God</span> by A.W. Tozer. And soon — <span className="italic font-bold text-[#c8a84b] font-serif">Hold the Line</span> by Thomas Carver, written specifically for husbands and fathers walking through the battles men often face.
            </p>
          </div>

          {/* ─── IF YOU ARE IN CRISIS SECTION ─── */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto" id="grow-crisis-section">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center leading-[1.1]">
              IF YOU ARE IN CRISIS
            </h2>
            <p className="text-white/80 font-serif text-base sm:text-lg leading-relaxed text-left mb-10">
              You are not alone. Help is one phone call away.
            </p>
            <div className="space-y-6 flex flex-col items-start w-full">
              <div className="w-full">
                <a 
                  href="tel:988" 
                  className="block w-full px-6 py-5 border border-[#c8a84b]/40 rounded hover:bg-[#c8a84b]/10 hover:border-[#c8a84b] transition-all font-label text-xs sm:text-sm tracking-[2.5px] text-[#c8a84b] font-bold uppercase text-left"
                  id="link-crisis-lifeline"
                >
                  NATIONAL SUICIDE & CRISIS LIFELINE: CALL OR TEXT 988
                </a>
              </div>
              <div className="w-full">
                <a 
                  href="tel:988" 
                  className="block w-full px-6 py-5 border border-[#c8a84b]/40 rounded hover:bg-[#c8a84b]/10 hover:border-[#c8a84b] transition-all font-label text-xs sm:text-sm tracking-[2.5px] text-[#c8a84b] font-bold uppercase text-left"
                  id="link-crisis-veterans"
                >
                  VETERANS CRISIS LINE: 988, THEN PRESS 1
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
