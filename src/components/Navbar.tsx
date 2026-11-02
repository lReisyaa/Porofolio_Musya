'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
	const [theme, setTheme] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false); 

	useEffect(() => {
		const storedTheme = window.localStorage.getItem('theme') || 'light';
		if (storedTheme === 'dark') {
			document.documentElement.classList.add('dark');
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			setTheme('light');
		}
	}, []);

	const toggleTheme = () => {
		if (theme === 'dark') {
			document.documentElement.classList.remove('dark');
			window.localStorage.setItem('theme', 'light');
			setTheme('light');
		} else {
			document.documentElement.classList.add('dark');
			window.localStorage.setItem('theme', 'dark');
			setTheme('dark');
		}
	};

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<nav className="absolute top-0 w-full z-50 px-6 py-6 border-b border-black/10 dark:border-white/10 transition-colors">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				
				<div className="font-serif-luxury text-2xl tracking-widest font-bold text-[#2a0a0d] dark:text-white">
					MOSYAROFAH
					<span className="text-[10px] md:text-xs block tracking-widest text-[#ff6b81] font-sans font-normal mt-1">WEB DEVELOPER</span>
				</div>
				
				{/* Menu Desktop */}
				<div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-[#2a0a0d] dark:text-white/80">
					<a href="#home" className="hover:text-[#ff6b81] transition-colors">HOME</a>
					<a href="#about" className="hover:text-[#ff6b81] transition-colors">ABOUT</a>
					<a href="#skills" className="hover:text-[#ff6b81] transition-colors">SKILLS</a>
					<a href="#projects" className="hover:text-[#ff6b81] transition-colors">PROJECTS</a>
					<a href="#contact" className="hover:text-[#ff6b81] transition-colors">CONTACT</a>
				</div>

				{/* Tombol Kanan Desktop (INI YANG DIUBAH) */}
				<div className="hidden md:flex items-center gap-4">
					<button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
						{theme === 'dark' ? '☀️' : '🌙'}
					</button>
					<a href="#contact" className="flex items-center gap-2 border border-black/30 dark:border-white/30 rounded-full px-6 py-2 text-xs tracking-widest text-[#2a0a0d] dark:text-white hover:bg-[#2a0a0d] hover:text-white dark:hover:bg-white dark:hover:text-[#140305] transition-all">
						HUBUNGI SAYA <span>→</span> 
					</a>
				</div>

				{/* Menu HP (Hamburger) */}
				<div className="flex md:hidden items-center gap-4">
					<button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
						{theme === 'dark' ? '☀️' : '🌙'}
					</button>
					<button onClick={toggleMenu} className="p-2 text-[#2a0a0d] dark:text-white">
						{isOpen ? (
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
						) : (
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
						)}
					</button>
				</div>

			</div>

			{/* Dropdown Menu HP */}
			{isOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1a1a1a] border-b border-black/10 dark:border-white/10 shadow-xl py-4 px-6 flex flex-col gap-4 text-sm font-semibold tracking-widest text-[#2a0a0d] dark:text-white">
					<a href="#home" onClick={closeMenu} className="hover:text-[#ff6b81] transition-colors">HOME</a>
					<a href="#about" onClick={closeMenu} className="hover:text-[#ff6b81] transition-colors">ABOUT</a>
					<a href="#skills" onClick={closeMenu} className="hover:text-[#ff6b81] transition-colors">SKILLS</a>
					<a href="#projects" onClick={closeMenu} className="hover:text-[#ff6b81] transition-colors">PROJECTS</a>
					<a href="#contact" onClick={closeMenu} className="hover:text-[#ff6b81] transition-colors">CONTACT</a>
				</div>
			)}
		</nav>
	);
}