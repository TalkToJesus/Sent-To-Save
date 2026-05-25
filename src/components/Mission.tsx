import { PageId } from '../types';
import PageHeader from './PageHeader';

interface MissionProps {
  setActivePage: (page: PageId) => void;
}

export default function Mission({ setActivePage }: MissionProps) {
  return (
    <div id="mission-view" className="bg-[#0a0a06] text-white selection:bg-[#c8a84b]/20 selection:text-white">
      <PageHeader
        title="Our Mission"
        subtitle="Jesus was sent to save us. Now we are sent to share Him."
      />

      <section className="py-36 bg-[#0a0a06]" id="mission-body">
        <div className="container max-w-2xl mx-auto px-6 sm:px-8 flex flex-col items-center">
          
          {/* Centered Column with Left-aligned Introductory Paragraphs */}
          <div className="space-y-8 text-left text-[#ffffff]/80 font-serif text-lg sm:text-xl leading-relaxed mb-36 max-w-xl mx-auto w-full">
            <p>
              Sent to Save exists because the Gospel was never meant to stay in our heads. It was meant to go out — into ordinary conversations, into broken homes, into the lives of people the world has written off but God has not.
            </p>
            <p>
              This is a ministry for everyone. For men. For women. For families. For people who have been walking with Jesus for decades and for people who are still figuring out if any of this is real. Whoever you are — there is a place for you here.
            </p>
          </div>

          {/* WHAT WE BELIEVE */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center">
              WHAT WE BELIEVE
            </h2>
            <div className="space-y-8 text-[#ffffff]/80 font-serif text-lg leading-relaxed text-left">
              <p>
                We believe Jesus Christ is the Son of God, fully God and fully man, who lived a sinless life, died on the cross for our sins, and rose again on the third day. We believe salvation is by grace through faith in Him alone — not by works, not by performance, not by becoming impressive enough.
              </p>
              <p>
                We believe the Bible is the inerrant Word of God. We believe the Holy Spirit lives in every person who surrenders to Christ. We believe the Gospel is good news for everyone — without exception.
              </p>
            </div>
          </div>

          {/* HOW WE LIVE IT */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center">
              HOW WE LIVE IT
            </h2>
            
            <div className="space-y-16">
              <div className="space-y-4">
                <h3 className="font-label text-sm sm:text-base tracking-[3px] text-[#c8a84b] font-bold uppercase text-left">
                  PRAY · CARE · SHARE
                </h3>
                <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
                  This is the simple framework we teach and try to live. Pray for the people God places in your life. Care for them practically and consistently. When the moment is right, share why you live the way you do. The Gospel travels on ordinary things when ordinary people are willing to carry it.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-label text-sm sm:text-base tracking-[3px] text-[#c8a84b] font-bold uppercase text-left">
                  HONEST TESTIMONY
                </h3>
                <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
                  We do not perform Christianity. We live it openly — failures included. The book of Acts is full of broken people whom God used in spite of themselves. We are part of that lineage. Every person who has met Jesus has a story worth telling. Including yours.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-label text-sm sm:text-base tracking-[3px] text-[#c8a84b] font-bold uppercase text-left">
                  EQUIPPING FOR THE LONG WALK
                </h3>
                <p className="text-[#ffffff]/80 font-serif text-base sm:text-lg leading-relaxed text-left">
                  Saying yes to Jesus is the beginning, not the end. We exist to come alongside people as they grow — through resources, community, honest writing, and practical tools for everyday faith. Sanctification is the slow, daily work of becoming more like Christ. We are committed to walking it together.
                </p>
              </div>
            </div>

            {/* Accent Highlight Callout Box */}
            <div className="border border-[#c8a84b]/20 py-10 px-6 my-14 bg-[#111108] rounded text-center max-w-lg mx-auto shadow-2xl">
              <p className="font-serif italic text-xl sm:text-2xl text-[#c8a84b] leading-snug text-center">
                "Jesus was sent to save us. Now we are sent to share Him."
              </p>
              <span className="font-label text-[10px] tracking-[2px] text-[#c8a84b]/60 uppercase mt-5 block text-center font-bold">
                THE SENT TO SAVE MISSION
              </span>
            </div>
          </div>

          {/* WHO THIS IS FOR */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center">
              WHO THIS IS FOR
            </h2>
            <div className="space-y-8 text-[#ffffff]/80 font-serif text-lg leading-relaxed text-left">
              <p>
                If you are curious about Jesus — this is for you. If you grew up in church and walked away — this is for you. If you have never read a Bible in your life — this is for you. If you have been walking with God for forty years and still feel like you are figuring it out — this is for you too.
              </p>
              <p>
                Sent to Save is not a club for people who have it together. It is a movement for people who know they need Jesus.
              </p>
            </div>
          </div>

          {/* Bottom Callout Option Button */}
          <div className="flex justify-center mt-6 mb-8">
            <button
              onClick={() => setActivePage('jesus')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#c8a84b] via-[#f0d080] to-[#c8a84b] text-[#0a0a06] font-label text-sm font-bold tracking-[3px] px-12 py-5 rounded transition-transform hover:scale-[1.03] duration-300 shadow-[0_4px_24px_rgba(200,168,75,0.22)] flex items-center justify-center hover:shadow-[0_4px_35px_rgba(200,168,75,0.38)] cursor-pointer"
            >
              MEET JESUS TODAY →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
