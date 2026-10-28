import { profile } from '@/lib/data';
import Reveal from '@/components/Reveal';

export default function About() {
	return (
		<section id="about" className="py-24 px-8 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10 transition-colors">
			<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
				
				{/* KIRI: Dikasih animasi delay 0 */}
				<Reveal className="md:col-span-5 space-y-6">
					<h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#ff6b81]">About Me</h3>
					<h2 className="font-serif-luxury text-5xl leading-tight text-[#2a0a0d] dark:text-white transition-colors">
						Strategy meets <span className="italic">creativity.</span>
					</h2>
					<p className="opacity-70 leading-relaxed text-sm md:text-base text-justify text-[#2a0a0d] dark:text-white/80 transition-colors">
						{profile.about[0]} 
						{profile.about[1]}
					</p>
					<a href="#contact" className="inline-flex items-center gap-2 border border-black/30 dark:border-white/30 rounded-full px-6 py-2 text-xs font-bold tracking-widest text-[#2a0a0d] dark:text-white hover:bg-[#2a0a0d] hover:text-white dark:hover:bg-white dark:hover:text-[#140305] transition-all mt-4">
						MORE ABOUT ME <span>→</span>
					</a>
				</Reveal>
				
				{/* KANAN: Kotak Besar (Dikasih animasi delay 200ms biar selang-seling) */}
				<div className="md:col-span-7">
					<Reveal delay={200}>
						<div className="bg-[#ff6b81]/5 dark:bg-[#3d1015] border border-black/5 dark:border-white/5 p-8 md:p-12 rounded-2xl hover:shadow-xl transition-all duration-300">
							<h4 className="font-serif-luxury text-3xl text-[#2a0a0d] dark:text-white italic border-b border-black/10 dark:border-white/10 pb-6 mb-8">
								My Journey & Experience
							</h4>

							<div className="space-y-8">
								{/* (ITEM 1, 2, 3 PUNYA KAMU TETAP DISINI, GAK USAH DIUBAH) */}
								<div className="group">
									<div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
										<h5 className="font-bold text-xl text-[#2a0a0d] dark:text-white group-hover:text-[#ff6b81] transition-colors">
											S1 Teknik Informatika
										</h5>
										<span className="text-xs font-bold tracking-widest text-[#ff6b81] uppercase mt-1 md:mt-0">2024 — Sekarang</span>
									</div>
									<p className="text-sm font-medium opacity-80 text-[#2a0a0d] dark:text-white/90 mb-1">Sekolah Tinggi Teknologi Bontang</p>
									<p className="text-sm opacity-60 text-[#2a0a0d] dark:text-white/60 leading-relaxed">Fokus pada pemrograman C++, Python dan pengembangan web.</p>
								</div>
								<div className="h-px w-full bg-black/5 dark:bg-white/5"></div>
								<div className="group">
									<div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
										<h5 className="font-bold text-xl text-[#2a0a0d] dark:text-white group-hover:text-[#ff6b81] transition-colors">Anggota Himpunan</h5>
										<span className="text-xs font-bold tracking-widest text-[#ff6b81] uppercase mt-1 md:mt-0">2025 — Sekarang</span>
									</div>
									<p className="text-sm font-medium opacity-80 text-[#2a0a0d] dark:text-white/90 mb-1">Cpanel</p>
									<p className="text-sm opacity-60 text-[#2a0a0d] dark:text-white/60 leading-relaxed">Ikut serta dalam kegiatan dan kepanitiaan kampus.</p>
								</div>
								<div className="h-px w-full bg-black/5 dark:bg-white/5"></div>
								<div className="group">
									<div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
										<h5 className="font-bold text-xl text-[#2a0a0d] dark:text-white group-hover:text-[#ff6b81] transition-colors">Admin Penjualan</h5>
										<span className="text-xs font-bold tracking-widest text-[#ff6b81] uppercase mt-1 md:mt-0">2026</span>
									</div>
									<p className="text-sm font-medium opacity-80 text-[#2a0a0d] dark:text-white/90 mb-1">PT Distrindo Pratama Sejahtera</p>
									<p className="text-sm opacity-60 text-[#2a0a0d] dark:text-white/60 leading-relaxed">Bertanggung jawab dalam penginputan data transaksi (nota) ke dalam sistem spreadsheet Excel, pembuatan invoice bulanan, serta penyusunan laporan rekap penjualan secara akurat.</p>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}