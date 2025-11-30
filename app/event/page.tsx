'use client';

import {EVENT_DATA} from '@/data';
import {SectionTitle} from '@/components/common/SectionTitle';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {motion} from 'motion/react';
import {Calendar} from 'lucide-react';
import Image from 'next/image';

type EventItem = {
	name: string;
	date: string;
	imgUrl: string;
};

const EventPage = () => {
	const events: EventItem[] = EVENT_DATA || [];

	return (
		<div className="pt-(--header-height)">
			{/* Hero Section */}
			<section className="w-full h-screen flex flex-col items-center justify-center px-4 py-12">
				<motion.div
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, ease: 'easeOut'}}
					className="text-center max-w-3xl">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Events & Speaking</h1>
					<p className="text-lg md:text-xl text-secondary-foreground mb-8">
						Join us at industry-leading conferences and events where we share our
						insights on mobile app development and innovation.
					</p>
				</motion.div>
			</section>

			{/* Events Section */}
			<section
				aria-labelledby="events-heading"
				className="py-12 flex flex-col gap-20">
				<SectionTitle title="Our Events" shadowText="Events" />

				<div className="max-w-6xl mx-auto px-4">
					{events.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{events.map((event, idx) => (
								<motion.div
									key={idx}
									initial={{opacity: 0, y: 20}}
									whileInView={{opacity: 1, y: 0}}
									transition={{duration: 0.5, delay: idx * 0.1}}
									viewport={{once: true, margin: '-50px'}}
									className="group bg-card/60 dark:bg-card/40 shadow-primary overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
									<div className="flex flex-col gap-4">
										<div className="relative w-full h-[150px]">
											<Image
												src={event.imgUrl}
												alt={event.name}
												fill
												className="object-cover"
											/>
										</div>
										<div className="p-4">
											<h3 className="text-lg md:text-xl font-bold mb-2">{event.name}</h3>
											<div className="flex items-center gap-2 text-secondary-foreground">
												<Calendar size={18} />
												<time dateTime={event.date}>{event.date}</time>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					) : (
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							className="text-center py-12">
							<p className="text-muted text-lg">No upcoming events at the moment.</p>
						</motion.div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12">
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.6}}
					viewport={{once: true}}
					className="max-w-2xl mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Want to collaborate?
					</h2>
					<p className="text-secondary-foreground mb-6">
						Interested in sponsoring or speaking at an event? Get in touch with our
						team.
					</p>
					<Link href="/contact">
						<Button size="lg">Contact Us</Button>
					</Link>
				</motion.div>
			</section>
		</div>
	);
};

export default EventPage;
