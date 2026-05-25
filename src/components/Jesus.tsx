import { PageId } from '../types';
import PageHeader from './PageHeader';

interface JesusProps {
  setActivePage: (page: PageId) => void;
}

export default function Jesus({ setActivePage }: JesusProps) {
  return (
    <div id="jesus-view" className="bg-[#0a0a06] text-white selection:bg-[#c8a84b]/20 selection:text-white">
      <PageHeader
        title="Jesus"
        subtitle="The person at the center of everything."
      />

      <section className="py-36 bg-[#0a0a06]" id="jesus-body">
        <div className="container max-w-2xl mx-auto px-6 sm:px-8 flex flex-col items-center">
          
          {/* Left-aligned Introductory Narrative, Centered on the Page */}
          <div className="space-y-8 text-left text-[#ffffff]/80 font-serif text-lg sm:text-xl leading-relaxed mb-36 max-w-xl mx-auto w-full">
            <p>
              Jesus of Nazareth was born to a virgin in Bethlehem around 4 B.C. He grew up in obscurity, worked as a carpenter, and began His public ministry around the age of thirty. He taught for roughly three years. He performed miracles. He challenged the religious establishment of His day. He was crucified by the Roman government at the request of religious leaders who wanted Him silenced.
            </p>
            <p>
              Three days later, He walked out of the tomb.
            </p>
            <p>
              That sentence is the hinge of human history. Every claim of Christianity rests on whether it is true. Either Jesus rose from the dead, or He did not. If He did not, the Gospel is a beautiful story but nothing more. If He did — everything changes.
            </p>
          </div>

          {/* WHAT HE CLAIMED (Left-aligned Paragraphs, Centered Block) */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center">
              WHAT HE CLAIMED
            </h2>
            <div className="space-y-8 text-[#ffffff]/80 font-serif text-lg leading-relaxed mb-12 text-left">
              <p>
                Jesus did not present Himself as merely a good teacher. He claimed to be God. He forgave sins, which only God can do. He accepted worship, which only God can receive. He said, "Before Abraham was, I am" — using the divine name from Exodus. The religious leaders called for His execution not because He was a kind moral teacher but because He claimed equality with God.
              </p>
            </div>

            {/* Accent Highlight Callout Box Centered */}
            <div className="border border-[#c8a84b]/25 px-8 py-12 my-16 bg-[#111108] rounded text-center max-w-lg mx-auto shadow-2xl">
              <p className="font-serif italic text-xl sm:text-2xl text-[#c8a84b] leading-snug text-center">
                "I am the way, and the truth, and the life. No one comes to the Father except through Me."
              </p>
              <span className="font-label text-[10px] tracking-[2px] text-[#c8a84b]/60 uppercase mt-5 block text-center font-bold">
                JOHN 14:6
              </span>
            </div>
          </div>

          {/* WHY HE CAME (Left-aligned Paragraphs, Centered Block) */}
          <div className="text-left mb-36 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center">
              WHY HE CAME
            </h2>
            <div className="space-y-8 text-[#ffffff]/80 font-serif text-lg leading-relaxed mb-12 text-left">
              <p>
                The Bible tells us all of us — every human being — have sinned and fallen short of God's holiness. Not because God is cruel, but because He is good. Sin separates us from a perfect God. The penalty is real. The good news is that Jesus came as the answer.
              </p>
              <p>
                He lived the perfect life we could never live. He died the death we deserved. He rose again to defeat death itself. And He offers His righteousness to anyone who will receive it by faith.
              </p>
              <p>
                This is the Gospel. Not a list of rules. Not a moral framework. A rescue.
              </p>
            </div>

            {/* Accent Highlight Callout Box Centered */}
            <div className="border border-[#c8a84b]/25 px-8 py-12 my-16 bg-[#111108] rounded text-center max-w-lg mx-auto shadow-2xl">
              <p className="font-serif italic text-xl sm:text-2xl text-[#c8a84b] leading-snug text-center">
                "For God so loved the world, that He gave His only Son, that whoever believes in Him should not perish but have eternal life."
              </p>
              <span className="font-label text-[10px] tracking-[2px] text-[#c8a84b]/60 uppercase mt-5 block text-center font-bold">
                JOHN 3:16
              </span>
            </div>
          </div>

          {/* WHAT HE ASKS (Left-aligned Paragraphs, Centered Block) */}
          <div className="text-[#ffffff]/80 text-left mb-36 w-full max-w-xl mx-auto">
            <h2 className="font-display uppercase tracking-widest text-3xl sm:text-4xl text-[#ffffff] mb-12 border-b border-[#c8a84b]/10 pb-8 text-center">
              WHAT HE ASKS
            </h2>
            <div className="space-y-8 text-[#ffffff]/80 font-serif text-lg leading-relaxed text-left">
              <p>
                Faith. Repentance. Surrender. Not perfection. Not arrival. Not having every answer. Just an honest acknowledgment that you cannot save yourself, and a willingness to trust the One who already did.
              </p>
              <p>
                Jesus is not a self-help teacher. He is the risen Son of God. And He is the only one who can do what we have been trying to do on our own for too long.
              </p>
            </div>
          </div>

          {/* Bottom Callout Option Button */}
          <div className="flex justify-center mt-6 mb-8">
            <button
              onClick={() => setActivePage('salvation')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#c8a84b] via-[#f0d080] to-[#c8a84b] text-[#0a0a06] font-label text-sm font-bold tracking-[3px] px-12 py-5 rounded transition-transform hover:scale-[1.03] duration-300 shadow-[0_4px_24px_rgba(200,168,75,0.22)] flex items-center justify-center hover:shadow-[0_4px_35px_rgba(200,168,75,0.38)] cursor-pointer"
            >
              TAKE THE NEXT STEP →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
