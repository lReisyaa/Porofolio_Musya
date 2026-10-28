import { profile } from '@/lib/data';

export default function Hero() {
	return (
		<section id="home" className="relative min-h-screen flex items-center justify-center px-6">
			<div className="max-w-3xl mx-auto text-center space-y-8">
				
				{/* Bagian I AM - Diberi garis di kiri kanan biar seimbang */}
				<div className="flex items-center justify-center gap-4 text-[#2a0a0d]/60 dark:text-white/60 transition-colors">
					<div className="h-px w-12 bg-current"></div>
					<span className="font-serif-luxury text-2xl italic tracking-wider">PORTOFOLIO</span>
					<div className="h-px w-12 bg-current"></div>
				</div>

				{/* Judul Utama - Ukuran disesuaikan biar gak melar */}
				<h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] text-[#2a0a0d] dark:text-white transition-colors">
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b81] to-[#2a0a0d] dark:from-[#ff9a9e] dark:to-[#ff6b81]">
						Menghidupkan Ide Lewat Kode
					</span>
				</h1>

				{/* Deskripsi - Dibuat lebih manis */}
				<p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-[#ff6b81] pt-2 pb-6">
					Informatika • Web Dev • Terus Belajar
				</p>

				{/* Tombol */}
				<div>
					<a href="#projects" className="inline-flex items-center gap-3 bg-[#2a0a0d] dark:bg-white text-white dark:text-[#2a0a0d] rounded-full px-8 py-3.5 text-xs font-bold tracking-widest hover:bg-[#ff6b81] dark:hover:bg-[#ff6b81] hover:text-white dark:hover:text-white transition-all duration-300">
						VIEW MY WORK
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
					</a>
				</div>

			</div>
		</section>
	);
}