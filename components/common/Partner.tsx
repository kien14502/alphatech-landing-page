'use client';

import {HOME_DATA} from '@/data';
import Image from 'next/image';
import {motion} from 'motion/react';
import {useMemo} from 'react';
import {SectionTitle} from './SectionTitle';

type PartnerItem = {
	name: string;
	imgUrl: string;
};

const Partner = () => {
	// Duplicate partners to create seamless infinite loop
	const duplicatedPartners = useMemo(() => {
		const partners: PartnerItem[] = HOME_DATA['partners']?.items || [];
		return [...partners, ...partners, ...partners];
	}, []);

	return (
		<section className="py-12 bg-card/40 flex flex-col gap-20 dark:bg-card/20 overflow-hidden">
			<SectionTitle title="Partners" />

			<div className="relative w-full overflow-hidden">
				<motion.div
					className="flex gap-8 py-6"
					animate={{x: [-1080, 0]}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear',
					}}>
					{duplicatedPartners.map((partner, idx) => (
						<motion.div
							key={idx}
							className="shrink-0 w-[231px] h-[231px] bg-background dark:bg-card rounded-4xl border border-border/50 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-colors shadow-primary">
							<div className="relative w-12 h-12 sm:w-16 sm:h-16">
								<Image
									src={partner.imgUrl}
									alt={partner.name}
									fill
									className="object-contain"
								/>
							</div>
							<span className="text-lg capitalize font-medium text-center px-4">
								{partner.name}
							</span>
						</motion.div>
					))}
				</motion.div>

				{/* Gradient overlays for smooth fade effect */}
				<div className="absolute top-0 left-0 w-20 h-full bg-linear-to-r from-background dark:from-background to-transparent pointer-events-none" />
				<div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-background dark:from-background to-transparent pointer-events-none" />
			</div>
		</section>
	);
};

export default Partner;
