import { skills } from '@/lib/data';
import Reveal from '@/components/Reveal';

export default function Skills() {
	return (
		<section id="skills" className="py-24 px-8 max-w-7xl mx-auto transition-colors">
			<Reveal>
				<div className="mb-12">
					<h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#ff6b81] mb-4">My Toolkit</h3>
					<h2 className="font-serif-luxury text-4xl text-[#2a0a0d] dark:text-white">Technology I use</h2>
				</div>
			</Reveal>
			<div className="flex flex-wrap gap-6">
				{skills.map((skill, index) => (
					<Reveal key={skill.name} delay={index * 100}>
						<div className="flex items-center gap-4 bg-[#ff6b81]/10 dark:bg-[#3d1015] border border-black/5 dark:border-white/5 px-6 py-4 rounded-full hover:border-[#ff6b81] transition-colors group">
							<img src={skill.icon} alt={skill.name} className="size-8 grayscale group-hover:grayscale-0 transition-all" />
							<span className="text-sm font-semibold tracking-wide text-[#2a0a0d] dark:text-white">{skill.name}</span>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}