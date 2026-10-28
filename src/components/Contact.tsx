import { profile } from '@/lib/data';

export default function Contact() {
	return (
		<section id="contact" className="relative py-24 px-8 mt-12 bg-[#ff6b81]/5 dark:bg-[#5c151b]/30 border-t border-[#ff6b81]/20 overflow-hidden transition-colors z-20">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				
				{/* KIRI: Teks & Tombol (TANPA ANIMASI REVEAL) */}
				<div className="space-y-6">
					<h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#ff6b81]">Let's Connect</h3>
					<h2 className="font-serif-luxury text-5xl md:text-7xl leading-tight text-[#2a0a0d] dark:text-white">
						Ready to <span className="italic">collaborate?</span>
					</h2>
					<p className="opacity-70 max-w-md text-[#2a0a0d] dark:text-white">
						Let's create something beautiful, strategic, and unforgettable.
					</p>
					<a href={`mailto:${profile.email}`} className="inline-flex items-center gap-4 bg-[#ff6b81] text-white rounded-full px-8 py-4 text-xs font-bold tracking-widest hover:bg-[#2a0a0d] hover:text-white dark:hover:bg-white dark:hover:text-[#140305] transition-all mt-4 cursor-pointer">
						LET'S WORK TOGETHER <span>→</span>
					</a>
				</div>

				{/* KANAN: List Kontak (Z-INDEX SUPER TINGGI: z-50) */}
				<div className="space-y-2 md:pl-12 relative z-50">
					
					{/* Email */}
					<a href={`mailto:${profile.email}`} className="group flex items-center justify-between border-b border-black/10 dark:border-white/10 py-6 text-[#2a0a0d] dark:text-white hover:text-[#ff6b81] dark:hover:text-[#ff6b81] transition-colors cursor-pointer">
						<div className="flex items-center gap-6 pointer-events-none">
							<div className="size-10 rounded-full bg-white dark:bg-black/20 flex items-center justify-center group-hover:bg-[#ff6b81]/10 transition-colors">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
							</div>
							<span className="text-sm font-semibold tracking-wide">{profile.email}</span>
						</div>
						<span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 pointer-events-none">→</span>
					</a>

					{/* GitHub */}
					<a href={profile.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-black/10 dark:border-white/10 py-6 text-[#2a0a0d] dark:text-white hover:text-[#ff6b81] dark:hover:text-[#ff6b81] transition-colors cursor-pointer">
						<div className="flex items-center gap-6 pointer-events-none">
							<div className="size-10 rounded-full bg-white dark:bg-black/20 flex items-center justify-center group-hover:bg-[#ff6b81]/10 transition-colors">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/></svg>
							</div>
							<span className="text-sm font-semibold tracking-wide">@{profile.github.split('/').pop()}</span>
						</div>
						<span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 pointer-events-none">→</span>
					</a>

					{/* Instagram */}
					<a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-black/10 dark:border-white/10 py-6 text-[#2a0a0d] dark:text-white hover:text-[#ff6b81] dark:hover:text-[#ff6b81] transition-colors cursor-pointer">
						<div className="flex items-center gap-6 pointer-events-none">
							<div className="size-10 rounded-full bg-white dark:bg-black/20 flex items-center justify-center group-hover:bg-[#ff6b81]/10 transition-colors">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
							</div>
							<span className="text-sm font-semibold tracking-wide">@{profile.instagram.split('/').pop()}</span>
						</div>
						<span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 pointer-events-none">→</span>
					</a>

					{/* LinkedIn */}
					<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-black/10 dark:border-white/10 py-6 text-[#2a0a0d] dark:text-white hover:text-[#ff6b81] dark:hover:text-[#ff6b81] transition-colors cursor-pointer">
						<div className="flex items-center gap-6 pointer-events-none">
							<div className="size-10 rounded-full bg-white dark:bg-black/20 flex items-center justify-center group-hover:bg-[#ff6b81]/10 transition-colors">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
							</div>
							<span className="text-sm font-semibold tracking-wide">LinkedIn</span>
						</div>
						<span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 pointer-events-none">→</span>
					</a>

				</div>
			</div>
		</section>
	);
}