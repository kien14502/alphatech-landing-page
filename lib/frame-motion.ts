import type {Variants} from 'motion-dom';

const fadeInUp: Variants = {
	hidden: {opacity: 0, y: 60},
	visible: {
		opacity: 1,
		y: 0,
		transition: {duration: 0.6, ease: 'easeOut'},
	},
};
const fadeInLeft: Variants = {
	hidden: {opacity: 0, x: -60},
	visible: {
		opacity: 1,
		x: 0,
		transition: {duration: 0.6, ease: 'easeOut'},
	},
};

const fadeInRight: Variants = {
	hidden: {opacity: 0, x: 60},
	visible: {
		opacity: 1,
		x: 0,
		transition: {duration: 0.6, ease: 'easeOut'},
	},
};

const scaleIn: Variants = {
	hidden: {opacity: 0, scale: 0.8},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {duration: 0.6, ease: 'easeOut'},
	},
};

const staggerContainer: Variants = {
	hidden: {opacity: 0},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

const staggerItem: Variants = {
	hidden: {opacity: 0, y: 30},
	visible: {
		opacity: 1,
		y: 0,
		transition: {duration: 0.5, ease: 'easeOut'},
	},
};
export {
	fadeInUp,
	fadeInLeft,
	fadeInRight,
	scaleIn,
	staggerContainer,
	staggerItem,
};
