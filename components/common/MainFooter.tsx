'use client';

import Link from 'next/link';
import Image from 'next/image';
import {routes} from '@/lib/utils';
import {Building2, Mail} from 'lucide-react';
import React from 'react';

const MainFooter: React.FC = () => {
	return (
		<footer className="bg-[#000000b3] dark:bg-card p-8 mt-12 border-t border-border">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
					<div className="flex items-center gap-4">
						<Link href="/" aria-label="Home">
							<Image
								src="/icons/logo.svg"
								alt="ALPHASOFTX logo"
								width={48}
								height={48}
							/>
						</Link>

						<div>
							<p className="font-bold text-lg text-primary">ALPHASOFTX LIMITED</p>
							<p className="text-sm text-muted">
								Building meaningful mobile experiences
							</p>
						</div>
					</div>

					<div className="flex flex-col items-start gap-3 text-white text-sm">
						<div className="flex items-start gap-2 flex-col">
							<div className="flex items-end gap-2">
								<Mail size={30} /> Email:
							</div>
							<span>admin@alphasoftx.com</span>
						</div>
						<div className="flex items-start gap-2 flex-col">
							<div className="flex items-end gap-2">
								<Building2 size={30} />
								Address:
							</div>
							<span>
								Suite C, Level 7, World Trust Tower, 50 Stanley Street, Central, Hong
								Kong
							</span>
						</div>
					</div>
				</div>

				<div className="mt-6 border-t border-border pt-4 text-sm text-muted flex flex-col md:flex-row md:justify-between">
					<span>
						© {new Date().getFullYear()} ALPHASOFTX LIMITED. All rights reserved.
					</span>

					<nav aria-label="Footer navigation" className="flex gap-4">
						{routes.map((r) => (
							<Link
								key={r.link}
								href={r.link}
								className="text-sm text-white hover:text-primary uppercase font-medium">
								{r.name}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default MainFooter;
