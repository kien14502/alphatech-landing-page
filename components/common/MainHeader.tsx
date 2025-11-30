'use client';

import {cn, routes} from '@/lib/utils';
import {motion} from 'motion/react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';
import {Button} from '../ui/button';
import Image from 'next/image';
import HeaderCollapse from './HeaderCollapse';

const MainHeader = () => {
	const pathname = usePathname();
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY < 10) {
				setIsVisible(true);
			} else if (currentScrollY > lastScrollY) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, {passive: true});

		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	return (
		<div
			className={cn(
				'flex items-center h-(--header-height) justify-between sm:justify-evenly gap-4 bg-[#000000b3] p-(--padding-layout) text-white',
				'fixed top-0 left-0 right-0 z-50 border-b border-border transition-transform duration-300 ease-in-out',
				isVisible ? 'translate-y-0' : '-translate-y-full',
			)}>
			<Link href={'/'}>
				<Image width={48} height={48} src={'/icons/logo.svg'} alt="" />
			</Link>
			<div className="hidden sm:flex items-center">
				{routes.map((route) => (
					<Link
						className={cn(
							'hover:text-primary text-lg font-semibold uppercase',
							pathname === route.link && 'text-primary',
						)}
						href={route.link}
						key={route.link}>
						<div className="relative px-3 py-2">
							{route.name}
							{pathname === route.link && (
								<motion.div
									layoutId="active-tab-indicator"
									className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"
									initial={false}
									transition={{
										type: 'spring',
										stiffness: 500,
										damping: 30,
									}}
								/>
							)}
						</div>
					</Link>
				))}
			</div>
			<Link className="hidden sm:block" href="/contact">
				<Button>Get In Touch</Button>
			</Link>
			<HeaderCollapse />
		</div>
	);
};
export default MainHeader;
