'use client';

import {fadeInUp} from '@/lib/frame-motion';
import {motion, useInView, type Variants} from 'framer-motion';
import {useRef} from 'react';

type Props = {
	children: React.ReactNode;
	variant?: Variants;
	className?: string;
};

function AnimatedSection({
	children,
	variant = fadeInUp,
	className = '',
}: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true, margin: '-100px'});

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			variants={variant}
			className={className}>
			{children}
		</motion.div>
	);
}
export default AnimatedSection;
