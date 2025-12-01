'use client';

import Link from 'next/link';
import {Button} from '../ui/button';
import {motion} from 'motion/react';

const HomeBanner = () => {
	return (
		<div
			style={{
				backgroundImage: "url('/images/banner.png')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
			className="w-screen h-screen flex flex-col items-center justify-center">
			<motion.p
				initial={{opacity: 0, y: -20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
				className="text-5xl font-bold text-center text-white text-shadow-2xs">
				Better Technology
			</motion.p>
			<motion.p
				initial={{opacity: 0, y: -20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
				className="text-5xl font-bold text-center text-white text-shadow-2xs">
				Better Life
			</motion.p>

			<Link className="mt-4" href="/contact">
				<Button size={'lg'}>Contact Us</Button>
			</Link>
		</div>
	);
};

export default HomeBanner;
