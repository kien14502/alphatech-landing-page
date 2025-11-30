'use client';

import React from 'react';
import {HOME_DATA} from '@/data';
import {SectionTitle} from './SectionTitle';
import AnimatedSection from './AnimationSection';
import Image from 'next/image';

export default function Achievements() {
	const achievements = HOME_DATA['achievements']?.items;

	return (
		<section
			aria-labelledby="achievements-title"
			className="py-12 flex flex-col gap-32 items-center justify-center">
			<SectionTitle title="Achievements" shadowText="Achievements" />

			<div className="max-w-8xl mx-auto w-full px-4">
				<div className="grid grid-cols-1 sm:grid-cols-4 gap-14 items-stretch">
					{achievements.map((a, idx) => (
						<AnimatedSection
							key={idx}
							className="flex h-[314px] relative shadow-primary rounded-tr-[30px] rounded-bl-[30px] blur-shadow flex-col items-start justify-center bg-card/60 dark:bg-card/40 rounded-lg p-6 text-foreground">
							{idx === 0 && (
								<div className="flex justify-center -space-x-10 absolute translate-x-[-50%] left-[50%] top-[-25%] w-full">
									<Image width={114} height={220} src={'/icons/phone.svg'} alt="" />
									<Image
										className="animate-bounce-vertical"
										width={86}
										height={160}
										src={'/icons/woman.svg'}
										alt=""
									/>
								</div>
							)}
							{idx === 1 && (
								<div className="flex justify-center absolute translate-x-[-50%] left-[50%] top-[-25%] w-full">
									<Image
										width={226}
										height={253}
										src={'/icons/light-banner.svg'}
										alt=""
									/>
									<Image
										className="animate-bounce-vertical absolute"
										width={226}
										height={253}
										src={'/icons/opera.svg'}
										alt=""
									/>
								</div>
							)}
							{idx === 2 && (
								<div className="flex justify-center absolute translate-x-[-50%] left-[50%] top-[-25%] w-full">
									<Image
										className="animate-wiggle"
										width={226}
										height={253}
										src={'/icons/bg-intro.svg'}
										alt=""
									/>
								</div>
							)}
							{idx === 3 && (
								<div className="flex justify-center absolute translate-x-[-50%] left-[50%] top-[-25%] w-full">
									<Image width={226} height={253} src={'/icons/sofa.svg'} alt="" />
									<Image
										className="animate-bounce-vertical absolute"
										width={226}
										height={253}
										src={'/icons/man.svg'}
										alt=""
									/>
								</div>
							)}
							<div className="relative top-[40%] translate-y-[-50%] flex flex-col items-center justify-center w-full">
								<span className="text-2xl md:text-3xl font-extrabold tracking-tight">
									{a.number}
								</span>
								<span className="mt-2 text-sm md:text-base text-secondary-foreground">
									{a.description}
								</span>
							</div>
						</AnimatedSection>
					))}
				</div>
			</div>
		</section>
	);
}
