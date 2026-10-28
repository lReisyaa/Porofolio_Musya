import { projects, profile } from '@/lib/data';
import Reveal from '@/components/Reveal';

export default function Projects() {
	return (
		<section id="projects" className="py-24 px-8 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10 transition-colors">
			<Reveal>
				<div className="flex justify-between items-end mb-12">
					<div>
						<h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#ff6b81] mb-4">Featured Work</h3>
						<h2 className="font-serif-luxury text-5xl text-[#2a0a0d] dark:text-white">My Projects</h2>
					</div>
					<a href={profile.github} target="_blank" className="hidden md:inline-flex items-center gap-2 border border-black/30 dark:border-white/30 rounded-full px-6 py-2 text-xs font-bold tracking-widest text-[#2a0a0d] dark:text-white hover:bg-[#2a0a0d] hover:text-white dark:hover:bg-white dark:hover:text-[#140305] transition-all">
						VIEW ALL <span>→</span>
					</a>
				</div>
			</Reveal>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<Reveal key={project.url} delay={index * 150}>
						<a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
							<div className="w-full bg-[#ff6b81]/5 dark:bg-[#3d1015] overflow-hidden rounded-xl mb-5 relative border border-black/5 dark:border-white/5">
								{project.image && (
									<img src={project.image} alt={project.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
								)}
							</div>
							<h4 className="font-bold text-lg uppercase tracking-wider mb-2 text-[#2a0a0d] dark:text-white group-hover:text-[#ff6b81] transition-colors">{project.title}</h4>
							<p className="text-sm opacity-60 text-[#2a0a0d] dark:text-white mb-2 leading-relaxed">{project.description}</p>
							<p className="text-xs font-semibold tracking-widest uppercase text-[#ff6b81]">{project.tags.join(' • ')}</p>
						</a>
					</Reveal>
				))}
			</div>
		</section>
	);
}