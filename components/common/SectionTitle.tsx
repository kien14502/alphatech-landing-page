'use client';

import {motion} from 'framer-motion';

interface SectionTitleProps {
	title: string;
	shadowText?: string;
}

export function SectionTitle({title, shadowText}: SectionTitleProps) {
	const displayShadow = shadowText || title;

	return (
		<div className="relative flex items-center justify-center py-8">
			{/* Shadow text - large faded text behind */}
			<motion.span
				initial={{opacity: 0, y: -20}}
				whileInView={{opacity: 0.1, y: 0}}
				viewport={{once: true, margin: '-100px'}}
				transition={{duration: 0.6, ease: 'easeOut'}}
				className="absolute text-4xl md:text-6xl lg:text-8xl font-black uppercase text-foreground select-none pointer-events-none whitespace-nowrap"
				aria-hidden="true">
				{displayShadow}
			</motion.span>

			{/* Main title - centered on top */}
			<motion.h2
				initial={{opacity: 0, y: -20}}
				whileInView={{opacity: 1, y: 0}}
				viewport={{once: true, margin: '-100px'}}
				transition={{duration: 0.6, ease: 'easeOut', delay: 0.1}}
				className="relative text-2xl md:text-4xl font-black uppercase text-foreground tracking-tight">
				{title}
			</motion.h2>
		</div>
	);
}
