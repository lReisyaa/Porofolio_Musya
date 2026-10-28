'use client';

import { useState, useEffect } from 'react';
import { profile } from '@/lib/data';

export default function Navbar() {
	const [theme, setTheme] = useState<string | null>(null);

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

	return (
		<nav className="absolute top-0 w-full z-50 px-8 py-6 flex items-center justify-between border-b border-black/10 dark:border-white/10 transition-colors">
			<div className="font-serif-luxury text-2xl tracking-widest font-bold text-[#2a0a0d] dark:text-white">
				MOSYAROFAH
				<span className="text-xs block tracking-widest text-[#ff6b81] font-sans font-normal mt-1">WEB DEVELOPER</span>
			</div>
			
			<div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-[#2a0a0d] dark:text-white/80">
				<a href="#home" className="hover:text-[#ff6b81] transition-colors">HOME</a>
				<a href="#about" className="hover:text-[#ff6b81] transition-colors">ABOUT</a>
				<a href="#skills" className="hover:text-[#ff6b81] transition-colors">SKILLS</a>
				<a href="#projects" className="hover:text-[#ff6b81] transition-colors">PROJECTS</a>
				<a href="#contact" className="hover:text-[#ff6b81] transition-colors">CONTACT</a>
			</div>

			<div className="flex items-center gap-4">
				<button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
					{theme === 'dark' ? '☀️' : '🌙'}
				</button>
				<a href="#contact" className="hidden md:flex items-center gap-2 border border-black/30 dark:border-white/30 rounded-full px-6 py-2 text-xs tracking-widest text-[#2a0a0d] dark:text-white hover:bg-[#2a0a0d] hover:text-white dark:hover:bg-white dark:hover:text-[#140305] transition-all">
					LET'S TALK <span>→</span>
				</a>
			</div>
		</nav>
	);
}