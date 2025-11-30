'use client';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import {useMobile} from '@/hooks/useMobile';
import {Button} from '../ui/button';
import {Menu} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {routes} from '@/lib/utils';

const HeaderCollapse = () => {
	const isMobile = useMobile();

	// Only render on mobile screens
	if (!isMobile) {
		return null;
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size={'icon-lg'} variant={'ghost'} className="sm:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="top" className="p-4">
				<SheetHeader>
					<SheetTitle>
						<div className="flex items-center gap-4">
							<Link href="/" aria-label="Home">
								<Image
									src="/icons/logo.svg"
									alt="ALPHASOFTX logo"
									width={48}
									height={48}
								/>
							</Link>
							<p className="font-bold text-lg text-primary">ALPHASOFTX LIMITED</p>
						</div>
					</SheetTitle>
					<SheetDescription />
				</SheetHeader>
				<nav aria-label="Footer navigation" className="flex flex-col gap-4">
					{routes.map((r) => (
						<Link
							key={r.link}
							href={r.link}
							className="text-sm p-2 hover:text-primary uppercase font-medium">
							{r.name}
						</Link>
					))}
				</nav>
				<Link className="w-full" href="/contact">
					<Button className="w-full">Get In Touch</Button>
				</Link>
			</SheetContent>
		</Sheet>
	);
};
export default HeaderCollapse;
