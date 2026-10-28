'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					// Optional: Berhenti ngeliatin kalau udah muncul
					observer.unobserve(entry.target); 
				}
			},
			{
				threshold: 0.1, // Muncul pas 10% elemen udah kelihatan
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, []);

	// Kita pakai delay dinamis pakai inline style
	const delayStyle = { transitionDelay: `${delay}ms` };

	return (
		<div
			ref={ref}
			className={`reveal ${isVisible ? 'active' : ''} ${className}`}
			style={delayStyle}
		>
			{children}
		</div>
	);
}