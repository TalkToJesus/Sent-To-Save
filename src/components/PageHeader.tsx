import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="page-hero relative overflow-hidden border-b border-[#c8a84b]/10 bg-gradient-to-b from-[#0a0a06] to-[#111108]">
      {/* Background radial glow */}
      <div className="absolute inset-x-0 top-0 h-64 bg-radial-gradient from-[#c8a84b]/10 to-transparent pointer-events-none blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="h-display uppercase tracking-[4px] mb-4 text-[#ffffff]">
            {title}
          </h1>
          <div className="gold-rule" />
          <p className="subtitle font-serif italic text-[#c8a84b] text-lg leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
